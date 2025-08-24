// Clean and Professional Color Palette for IAL P1 Schema
export const COLORS = {
  // Status Colors - More subtle approach
  SUCCESS: '#22c55e',      // Green - Success/Completed
  WARNING: '#f59e0b',      // Amber instead of red - Warning/Attention needed
  INFO: '#3b82f6',         // Blue - Information/Neutral
  INTERACTIVE: '#8b5cf6',  // Purple - Interactive elements/Links
  
  // Background Colors - Much lighter and cleaner
  SUCCESS_BG: '#ffffff',   // White background for completed
  WARNING_BG: '#ffffff',   // White background instead of red
  INFO_BG: '#ffffff',      // White background
  INTERACTIVE_BG: '#ffffff', // White background
  
  // Text Colors - Softer tones
  SUCCESS_TEXT: '#059669',  // Darker green for text
  WARNING_TEXT: '#d97706',  // Amber text instead of red
  INFO_TEXT: '#1d4ed8',
  INTERACTIVE_TEXT: '#7c3aed',
  
  // Neutral Colors - Grays for borders and text
  NEUTRAL_LIGHT: '#f8fafc',
  NEUTRAL: '#94a3b8',       // Lighter gray
  NEUTRAL_DARK: '#475569',
  BORDER_LIGHT: '#e2e8f0',  // Very light gray for borders
  BORDER: '#cbd5e1',        // Light gray for borders
  
  // Teacher Colors - Keeping distinct but subtle
  TEACHER_A: '#8b5cf6',     // Purple for Teacher A (MBY)
  TEACHER_B: '#f59e0b',     // Orange for Teacher B (KBO)
  TEACHER_A_BG: '#faf9ff',  // Very light purple
  TEACHER_B_BG: '#fffbf0',  // Very light orange
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'completed': return COLORS.SUCCESS;
    case 'overdue': return COLORS.WARNING;
    case 'current': return COLORS.INFO;
    case 'interactive': return COLORS.INTERACTIVE;
    default: return COLORS.NEUTRAL;
  }
};

export const getStatusBackground = (status) => {
  switch (status) {
    case 'completed': return COLORS.SUCCESS_BG;
    case 'overdue': return COLORS.WARNING_BG;
    case 'current': return COLORS.INFO_BG;
    case 'interactive': return COLORS.INTERACTIVE_BG;
    default: return COLORS.NEUTRAL_LIGHT;
  }
};
