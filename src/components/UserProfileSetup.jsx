import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { userProfileManager } from '../utils/dataManager';

const UserProfileSetup = ({ onProfileCreated }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('teacher');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProfile = () => {
    if (!name.trim()) {
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const profile = userProfileManager.createProfile(name.trim(), role);
      if (profile) {
        onProfileCreated(profile);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateProfile();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            📚 IAL Pure Mathematics 1
          </CardTitle>
          <CardDescription>
            Interactive Scheme of Work - Set up your profile to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <div className="flex gap-2">
              <Button
                variant={role === 'teacher' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole('teacher')}
                disabled={isLoading}
              >
                👨‍🏫 Teacher
              </Button>
              <Button
                variant={role === 'student' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole('student')}
                disabled={isLoading}
              >
                👨‍🎓 Student
              </Button>
              <Button
                variant={role === 'admin' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole('admin')}
                disabled={isLoading}
              >
                👨‍💼 Admin
              </Button>
            </div>
          </div>

          <Button 
            onClick={handleCreateProfile} 
            className="w-full" 
            disabled={!name.trim() || isLoading}
          >
            {isLoading ? 'Creating Profile...' : 'Start Using App'}
          </Button>

          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>✅ Your progress will be automatically saved</p>
            <p>📤 Export/import data to share with colleagues</p>
            <p>🔄 Sync across devices using export/import</p>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-sm mb-2">Features:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary">Auto-save</Badge>
              <Badge variant="secondary">Export Data</Badge>
              <Badge variant="secondary">Progress Tracking</Badge>
              <Badge variant="secondary">Toast Notifications</Badge>
              <Badge variant="secondary">Offline Ready</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfileSetup;
