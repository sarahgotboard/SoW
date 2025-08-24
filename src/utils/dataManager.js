// Enhanced data management utility for IAL P1 Schema
import { toast } from "sonner";

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'ial-p1-completed-lessons',
  USER_PROFILE: 'ial-p1-user-profile',
  APP_SETTINGS: 'ial-p1-app-settings',
  BACKUP_DATA: 'ial-p1-backup-data'
};

// User profile management
export const userProfileManager = {
  createProfile: (name, role = 'teacher') => {
    const profile = {
      id: `user_${Date.now()}`,
      name,
      role,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString()
    };
    
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
      toast.success(`Welcome ${name}!`, {
        description: "Your profile has been created successfully"
      });
      return profile;
    } catch (error) {
      toast.error("Failed to create profile", {
        description: "Please check your browser settings"
      });
      return null;
    }
  },

  getProfile: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (saved) {
        const profile = JSON.parse(saved);
        // Update last active
        profile.lastActive = new Date().toISOString();
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
        return profile;
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
    return null;
  },

  updateProfile: (updates) => {
    try {
      const current = userProfileManager.getProfile();
      if (current) {
        const updated = { ...current, ...updates, lastActive: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
        return updated;
      }
    } catch (error) {
      toast.error("Failed to update profile");
    }
    return null;
  },

  deleteProfile: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
      localStorage.removeItem(STORAGE_KEYS.COMPLETED_LESSONS);
      localStorage.removeItem(STORAGE_KEYS.APP_SETTINGS);
      toast.success("Profile deleted successfully");
      return true;
    } catch (error) {
      toast.error("Failed to delete profile");
      return false;
    }
  }
};

// Enhanced lesson data management
export const lessonDataManager = {
  load: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error loading lesson data:', error);
      toast.error("Failed to load progress data", {
        description: "Starting with empty progress"
      });
      return {};
    }
  },

  save: (completedLessons) => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessons));
      
      // Create automatic backup every 10 completions
      const completionCount = Object.keys(completedLessons).filter(key => completedLessons[key]).length;
      if (completionCount > 0 && completionCount % 10 === 0) {
        dataManager.createBackup(completedLessons);
      }
      
      return true;
    } catch (error) {
      console.error('Error saving lesson data:', error);
      toast.error("Failed to save progress", {
        description: "Your progress may not be preserved"
      });
      return false;
    }
  },

  reset: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPLETED_LESSONS);
      toast.success("Progress reset successfully", {
        description: "All lesson completions have been cleared"
      });
      return true;
    } catch (error) {
      toast.error("Failed to reset progress");
      return false;
    }
  },

  getStatistics: (completedLessons, weekData) => {
    let totalLessons = 0;
    let totalTests = 0;
    let totalRevision = 0;
    let completedLessons_count = 0;
    let completedTests = 0;
    let completedRevision = 0;

    weekData.forEach((week, weekIndex) => {
      ['teacherA', 'teacherB'].forEach(teacher => {
        week[teacher]?.forEach((lesson, lessonIndex) => {
          const lessonId = `${weekIndex}-${teacher === 'teacherA' ? 'A' : 'B'}-${lessonIndex}`;
          const isCompleted = completedLessons[lessonId];

          if (lesson.type === 'test') {
            totalTests++;
            if (isCompleted) completedTests++;
          } else if (lesson.type === 'revision') {
            totalRevision++;
            if (isCompleted) completedRevision++;
          } else {
            totalLessons++;
            if (isCompleted) completedLessons_count++;
          }
        });
      });
    });

    return {
      lessons: { completed: completedLessons_count, total: totalLessons },
      tests: { completed: completedTests, total: totalTests },
      revision: { completed: completedRevision, total: totalRevision },
      overall: { 
        completed: completedLessons_count + completedTests + completedRevision,
        total: totalLessons + totalTests + totalRevision 
      }
    };
  }
};

// Data export/import functionality
export const dataManager = {
  export: (completedLessons, userProfile) => {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      userProfile,
      completedLessons,
      statistics: lessonDataManager.getStatistics(completedLessons, [])
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `ial-p1-progress-${userProfile?.name || 'user'}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    toast.success("Progress exported successfully", {
      description: "Download should start automatically"
    });
  },

  import: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importData = JSON.parse(e.target.result);
          
          if (!importData.version || !importData.completedLessons) {
            throw new Error('Invalid file format');
          }

          // Validate data structure
          if (typeof importData.completedLessons !== 'object') {
            throw new Error('Invalid lesson data format');
          }

          resolve(importData);
        } catch (error) {
          reject(new Error('Failed to parse file: ' + error.message));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  },

  createBackup: (completedLessons) => {
    try {
      const backup = {
        timestamp: new Date().toISOString(),
        completedLessons
      };
      localStorage.setItem(STORAGE_KEYS.BACKUP_DATA, JSON.stringify(backup));
    } catch (error) {
      console.error('Backup creation failed:', error);
    }
  },

  restoreBackup: () => {
    try {
      const backup = localStorage.getItem(STORAGE_KEYS.BACKUP_DATA);
      if (backup) {
        const backupData = JSON.parse(backup);
        return backupData.completedLessons || {};
      }
    } catch (error) {
      console.error('Backup restoration failed:', error);
    }
    return null;
  }
};

// App settings management
export const settingsManager = {
  getSettings: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APP_SETTINGS);
      return saved ? JSON.parse(saved) : {
        autoSave: true,
        showNotifications: true,
        theme: 'light',
        examDate: '2026-01-08'
      };
    } catch (error) {
      return {
        autoSave: true,
        showNotifications: true,
        theme: 'light',
        examDate: '2026-01-08'
      };
    }
  },

  saveSettings: (settings) => {
    try {
      localStorage.setItem(STORAGE_KEYS.APP_SETTINGS, JSON.stringify(settings));
      return true;
    } catch (error) {
      toast.error("Failed to save settings");
      return false;
    }
  }
};

export default {
  userProfileManager,
  lessonDataManager,
  dataManager,
  settingsManager
};
