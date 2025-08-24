import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { dataManager, lessonDataManager, userProfileManager } from '../utils/dataManager';
import { toast } from "sonner";

const DataManagementPanel = ({ userProfile, completedLessons, weekData, onDataImported, onReset }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const fileInputRef = useRef(null);

  const statistics = lessonDataManager.getStatistics(completedLessons, weekData);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      dataManager.export(completedLessons, userProfile);
      setIsExporting(false);
    }, 500);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsImporting(true);
    try {
      const importData = await dataManager.import(file);
      
      // Confirm import
      const confirmed = window.confirm(
        `Import data from ${importData.userProfile?.name || 'Unknown User'}?\n` +
        `This will replace your current progress.\n\n` +
        `Import contains:\n` +
        `• ${Object.keys(importData.completedLessons).filter(k => importData.completedLessons[k]).length} completed items\n` +
        `• Exported on: ${new Date(importData.exportDate).toLocaleDateString()}`
      );

      if (confirmed) {
        lessonDataManager.save(importData.completedLessons);
        onDataImported(importData.completedLessons);
        toast.success("Data imported successfully!", {
          description: "Your progress has been updated"
        });
      }
    } catch (error) {
      toast.error("Import failed", {
        description: error.message
      });
    } finally {
      setIsImporting(false);
      event.target.value = ''; // Reset file input
    }
  };

  const handleReset = () => {
    const success = lessonDataManager.reset();
    if (success) {
      onReset();
      setShowResetDialog(false);
    }
  };

  const handleDeleteProfile = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your profile and all data?\n" +
      "This action cannot be undone."
    );
    
    if (confirmed) {
      const success = userProfileManager.deleteProfile();
      if (success) {
        window.location.reload();
      }
    }
  };

  const overallProgress = statistics.overall.total > 0 
    ? Math.round((statistics.overall.completed / statistics.overall.total) * 100) 
    : 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          ⚙️ Data Management
          <Badge variant="outline">{userProfile?.role}</Badge>
        </CardTitle>
        <CardDescription>
          Export, import, and manage your progress data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* User Profile Info */}
        <div className="space-y-2">
          <h4 className="font-semibold">Profile Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <div className="font-medium">{userProfile?.name}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Created:</span>
              <div className="font-medium">
                {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'Unknown'}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Progress Statistics */}
        <div className="space-y-3">
          <h4 className="font-semibold">Progress Overview</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span className="font-medium">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="text-center p-2 bg-blue-50 rounded">
              <div className="font-bold text-blue-600">{statistics.lessons.completed}/{statistics.lessons.total}</div>
              <div className="text-blue-700">Lessons</div>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <div className="font-bold text-green-600">{statistics.tests.completed}/{statistics.tests.total}</div>
              <div className="text-green-700">Tests</div>
            </div>
            <div className="text-center p-2 bg-purple-50 rounded">
              <div className="font-bold text-purple-600">{statistics.revision.completed}/{statistics.revision.total}</div>
              <div className="text-purple-700">Revision</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Data Management Actions */}
        <div className="space-y-3">
          <h4 className="font-semibold">Data Actions</h4>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={handleExport} 
              disabled={isExporting}
              variant="outline"
              className="w-full"
            >
              {isExporting ? '📤 Exporting...' : '📤 Export Data'}
            </Button>
            
            <Button 
              onClick={handleImportClick} 
              disabled={isImporting}
              variant="outline"
              className="w-full"
            >
              {isImporting ? '📥 Importing...' : '📥 Import Data'}
            </Button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        <Alert>
          <AlertDescription>
            💡 <strong>Tip:</strong> Export your data regularly to backup progress and share with colleagues. 
            Import data to sync across devices or restore from backup.
          </AlertDescription>
        </Alert>

        <Separator />

        {/* Danger Zone */}
        <div className="space-y-3">
          <h4 className="font-semibold text-red-600">Danger Zone</h4>
          
          <div className="space-y-2">
            <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm" className="w-full">
                  🔄 Reset All Progress
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reset All Progress</DialogTitle>
                  <DialogDescription>
                    This will clear all your completed lessons, tests, and revision sessions. 
                    This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 justify-end mt-4">
                  <Button variant="outline" onClick={() => setShowResetDialog(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleReset}>
                    Reset Progress
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              variant="destructive" 
              size="sm" 
              className="w-full"
              onClick={handleDeleteProfile}
            >
              🗑️ Delete Profile & All Data
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataManagementPanel;
