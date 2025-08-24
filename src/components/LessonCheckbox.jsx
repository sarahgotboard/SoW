import React from 'react';
import { toast } from "sonner";
import { COLORS } from './ColorTheme';

const LessonCheckbox = ({ 
  isCompleted, 
  onToggle, 
  lessonId, 
  lessonType = 'lesson',
  disabled = false,
  teacher = null
}) => {
  const getCheckboxStyle = () => {
    const baseStyle = {
      width: '16px',
      height: '16px',
      margin: '0 8px 0 0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      accentColor: isCompleted ? COLORS.SUCCESS : COLORS.INTERACTIVE,
    };

    // Teacher-specific coloring for accountability
    if (teacher === 'A') {
      baseStyle.accentColor = isCompleted ? COLORS.SUCCESS : COLORS.TEACHER_A;
    } else if (teacher === 'B') {
      baseStyle.accentColor = isCompleted ? COLORS.SUCCESS : COLORS.TEACHER_B;
    }

    return baseStyle;
  };

  const handleChange = () => {
    if (!disabled && onToggle) {
      const wasCompleted = isCompleted;
      onToggle(lessonId);
      
      // Show toast notification based on action
      if (!wasCompleted) {
        // Item was just completed
        const lessonTypeText = lessonType === 'test' ? 'Test' : 
                             lessonType === 'revision' ? 'Revision' : 'Lesson';
        const teacherText = teacher ? ` (Teacher ${teacher})` : '';
        
        toast.success(`${lessonTypeText} completed! 🎉`, {
          description: `Great job! You've completed this ${lessonType.toLowerCase()}${teacherText}`,
          action: {
            label: "Undo",
            onClick: () => {
              onToggle(lessonId);
              toast.info("Completion undone", {
                description: "Task marked as incomplete"
              });
            },
          },
        });
      } else {
        // Item was unchecked
        toast.info("Task marked incomplete", {
          description: "You can always mark it complete again later",
        });
      }
    }
  };

  return (
    <label style={{ 
      display: 'flex', 
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1
    }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
        style={getCheckboxStyle()}
        disabled={disabled}
      />
      <span style={{ 
        fontSize: '12px', 
        color: isCompleted ? COLORS.SUCCESS_TEXT : COLORS.NEUTRAL,
        fontWeight: isCompleted ? 'bold' : 'normal'
      }}>
        {isCompleted ? '✅ Completed' : 
         lessonType === 'test' ? '📝 Mark Test Complete' :
         lessonType === 'revision' ? '📚 Mark Revision Complete' :
         '📖 Mark Lesson Complete'}
      </span>
    </label>
  );
};

export default LessonCheckbox;
