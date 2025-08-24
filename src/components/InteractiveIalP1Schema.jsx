import React, { useState, useEffect } from 'react';
import LessonCheckbox from './LessonCheckbox';
import CountdownTimer from './CountdownTimer';
import ProgressTracker from './ProgressTracker';
import ExamPreparationTracker from './ExamPreparationTracker';
import DataManagementPanel from './DataManagementPanel';
import { COLORS } from './ColorTheme';
import { lessonDataManager, userProfileManager, settingsManager } from '../utils/dataManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const InteractiveIalP1Schema = () => {
  const [completedLessons, setCompletedLessons] = useState({});
  const [userProfile, setUserProfile] = useState(null);
  const [appSettings, setAppSettings] = useState(null);

  // Sample week data structure that matches the original scheme
  const weekData = [
    {
      date: '01-Sep',
      teacherA: [
        { type: 'lesson', content: '• Multiply and divide integer powers\n• Expand a single term over brackets and collect like terms', ref: '1.1 Index laws (pages 2-4)\n1.2 Expanding brackets (pages 4-6)', chapter: 'Chapter 1' },
        { type: 'lesson', content: '• Expand the product of two or three expressions\n• Factorise linear, quadratic and simple cubic expressions', ref: '1.2 Expanding brackets (pages 4-6)\n1.3 Factorising (pages 6-9)', chapter: 'Chapter 1' },
        { type: 'lesson', content: '• Know and use the laws of indices\n• Simplify and use the rules of surds', ref: '1.4 Negative and fractional indices (pages 9-11)\n1.5 Surds (pages 12-13)', chapter: 'Chapter 1' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Calculate the gradient of a line joining a pair of points\n• Understand the link between equation of a line, gradient and intercept', ref: '5.1 y = mx + c (pages 86-89)', chapter: 'Chapter 5' },
        { type: 'lesson', content: '• Find equation of a line given gradient and one point or two points', ref: '5.2 Equations of straight lines (pages 89-92)', chapter: 'Chapter 5' }
      ]
    },
    {
      date: '08-Sep',
      teacherA: [
        { type: 'lesson', content: '• Rationalise denominators', ref: '1.6 Rationalising denominators (pages 13-15)', chapter: 'Chapter 1' },
        { type: 'test', content: 'Chapter 1 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 1' },
        { type: 'lesson', content: '• Solving quadratic equations', ref: '2.1 Solving quadratic equations (pages 18-21)', chapter: 'Chapter 2' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Know and use rules for parallel and perpendicular graphs', ref: '5.3 Parallel and perpendicular lines (pages 93-96)', chapter: 'Chapter 5' },
        { type: 'lesson', content: '• Find point of intersection for straight lines\n• Solve length and area problems on coordinate grids', ref: '5.4 Length and area (pages 96-99)', chapter: 'Chapter 5' }
      ]
    },
    {
      date: '15-Sep',
      teacherA: [
        { type: 'lesson', content: '• Completing the square', ref: '2.2 Completing the square (pages 22-24)', chapter: 'Chapter 2' },
        { type: 'lesson', content: '• Functions\n• Quadratic graphs', ref: '2.3 Functions (pages 25-26)\n2.4 Quadratic graphs (pages 27-29)', chapter: 'Chapter 2' },
        { type: 'lesson', content: '• The discriminant', ref: '2.5 The discriminant (pages 30-32)', chapter: 'Chapter 2' }
      ],
      teacherB: [
        { type: 'test', content: 'Chapter 5 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 5' },
        { type: 'lesson', content: '• Sketch cubic graphs', ref: '4.1 Cubic graphs (pages 58-61)', chapter: 'Chapter 4' }
      ]
    },
    {
      date: '22-Sep',
      teacherA: [
        { type: 'test', content: 'Chapter 2 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 2' },
        { type: 'lesson', content: '• Linear simultaneous equations', ref: '3.1 Linear simultaneous equations (pages 36-38)', chapter: 'Chapter 3' },
        { type: 'lesson', content: '• Quadratic simultaneous equations\n• Simultaneous equations on graphs', ref: '3.2 Quadratic simultaneous equations (pages 39-40)\n3.3 Simultaneous equations on graphs (pages 40-43)', chapter: 'Chapter 3' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Sketch reciprocal graphs of form y = k/x and y = k/x²', ref: '4.2 Reciprocal graphs (pages 62-63)', chapter: 'Chapter 4' },
        { type: 'lesson', content: '• Use intersection points of graphs to solve equations', ref: '4.3 Points of intersection (pages 63-66)', chapter: 'Chapter 4' }
      ]
    },
    {
      date: '29-Sep',
      teacherA: [
        { type: 'lesson', content: '• Linear inequalities', ref: '3.4 Linear inequalities (pages 44-45)', chapter: 'Chapter 3' },
        { type: 'lesson', content: '• Quadratic inequalities', ref: '3.5 Quadratic inequalities (pages 46-49)', chapter: 'Chapter 3' },
        { type: 'lesson', content: '• Inequalities on graphs\n• Regions', ref: '3.6 Inequalities on graphs (pages 49-50)\n3.7 Regions (pages 51-54)', chapter: 'Chapter 3' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Translate graphs', ref: '4.4 Translating graphs (pages 67-71)', chapter: 'Chapter 4' },
        { type: 'lesson', content: '• Stretch graphs', ref: '4.5 Stretching graphs (pages 71-74)', chapter: 'Chapter 4' }
      ]
    },
    {
      date: '06-Oct',
      teacherA: [
        { type: 'test', content: 'Chapter 3 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 3' },
        { type: 'lesson', content: '• Find derivative f\'(x) or dy/dx of simple function', ref: '8.2 Finding the derivative (page 154)\n8.3 Differentiating x^n (pages 157-158)', chapter: 'Chapter 8' },
        { type: 'lesson', content: '• Find derivative of quadratic functions', ref: '8.4 Differentiating quadratics (pages 159-160)', chapter: 'Chapter 8' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Transform graphs of unfamiliar functions', ref: '4.6 Transforming functions (pages 75-77)', chapter: 'Chapter 4' },
        { type: 'test', content: 'Chapter 4 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 4' }
      ]
    },
    {
      date: '03-Nov',
      teacherA: [
        { type: 'lesson', content: '• Find f(x), given f\'(x) and a point on curve', ref: '9.3 Finding functions (pages 176-178)', chapter: 'Chapter 9' },
        { type: 'test', content: 'Chapter 9 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 9' },
        { type: 'revision', content: 'Revision - Chapters 1 & 2\nFocus on algebraic manipulation, quadratic solving', ref: 'Past paper practice', chapter: 'Revision' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Sketch graphs of sine, cosine and tangent functions', ref: '6.5 Graphs of sine, cosine and tangent (pages 123-125)', chapter: 'Chapter 6' },
        { type: 'lesson', content: '• Sketch simple transformations of trigonometric graphs', ref: '6.6 Transforming trigonometric graphs (pages 125-129)', chapter: 'Chapter 6' }
      ]
    },
    {
      date: '10-Nov',
      teacherA: [
        { type: 'revision', content: 'Revision - Chapter 3\nFocus on simultaneous equations and inequalities', ref: 'Past paper practice', chapter: 'Revision' },
        { type: 'revision', content: 'Revision - Chapters 8 & 9\nFocus on differentiation and integration techniques', ref: 'Past paper practice', chapter: 'Revision' },
        { type: 'revision', content: 'Revision - Mixed Practice 1\nAlgebra and calculus combination problems', ref: 'Past paper practice', chapter: 'Revision' }
      ],
      teacherB: [
        { type: 'test', content: 'Chapter 6 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 6' },
        { type: 'lesson', content: '• Convert between degrees and radians\n• Know exact values of angles in radians', ref: '7.1 Radian measure (pages 134-135)', chapter: 'Chapter 7' }
      ]
    }
  ];

  // Load user profile and data on mount
  useEffect(() => {
    const profile = userProfileManager.getProfile();
    setUserProfile(profile);
    
    const settings = settingsManager.getSettings();
    setAppSettings(settings);
    
    const savedLessons = lessonDataManager.load();
    setCompletedLessons(savedLessons);
  }, []);

  // Save completed lessons whenever it changes (with enhanced error handling)
  useEffect(() => {
    if (appSettings?.autoSave && Object.keys(completedLessons).length > 0) {
      lessonDataManager.save(completedLessons);
    }
  }, [completedLessons, appSettings]);

  const toggleLessonCompletion = (lessonId) => {
    setCompletedLessons(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId]
    }));
  };

  const handleDataImported = (newCompletedLessons) => {
    setCompletedLessons(newCompletedLessons);
  };

  const handleDataReset = () => {
    setCompletedLessons({});
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      fontSize: '11px',
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333'
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginBottom: '20px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    th: {
      border: `1px solid ${COLORS.BORDER}`,
      padding: '8px',
      textAlign: 'center',
      verticalAlign: 'top',
      backgroundColor: COLORS.NEUTRAL_LIGHT,
      fontWeight: 'bold',
    },
    td: {
      border: `1px solid ${COLORS.BORDER_LIGHT}`,
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    weekCell: {
      writingMode: 'vertical-lr',
      textOrientation: 'mixed',
      backgroundColor: COLORS.NEUTRAL_LIGHT,
      fontWeight: 'bold',
      width: '80px',
      textAlign: 'center',
      border: `1px solid ${COLORS.BORDER}`,
      padding: '8px',
      verticalAlign: 'top',
    },
    teacherCell: {
      backgroundColor: COLORS.NEUTRAL_LIGHT,
      fontWeight: 'bold',
      width: '100px',
      textAlign: 'center',
      border: `1px solid ${COLORS.BORDER}`,
      padding: '8px',
      verticalAlign: 'top',
    },
    chapterHeader: {
      backgroundColor: COLORS.NEUTRAL_LIGHT,
      fontWeight: 'bold',
      textAlign: 'center',
      border: `1px solid ${COLORS.BORDER}`,
      padding: '8px',
      verticalAlign: 'top',
    },
    lessonHeader: {
      backgroundColor: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '10px',
      border: `1px solid ${COLORS.BORDER}`,
      padding: '8px',
      verticalAlign: 'top',
    },
    contentCell: {
      fontSize: '10px',
      lineHeight: '1.4',
      border: `1px solid ${COLORS.BORDER_LIGHT}`,
      padding: '12px',
      textAlign: 'left',
      verticalAlign: 'top',
      position: 'relative',
      backgroundColor: 'white'
    },
    testCell: {
      backgroundColor: 'white',
      fontSize: '10px',
      lineHeight: '1.4',
      border: `1px solid ${COLORS.BORDER_LIGHT}`,
      padding: '12px',
      textAlign: 'left',
      verticalAlign: 'top',
      position: 'relative'
    },
    revisionCell: {
      backgroundColor: 'white',
      fontSize: '10px',
      lineHeight: '1.4',
      border: `1px solid ${COLORS.BORDER_LIGHT}`,
      padding: '12px',
      textAlign: 'left',
      verticalAlign: 'top',
      position: 'relative'
    },
    breakCell: {
      backgroundColor: COLORS.NEUTRAL_LIGHT,
      textAlign: 'center',
      fontStyle: 'italic',
      border: `1px solid ${COLORS.BORDER}`,
      padding: '15px',
      verticalAlign: 'top',
      fontSize: '14px',
      fontWeight: 'bold'
    },
    checkboxContainer: {
      marginBottom: '8px',
      paddingBottom: '8px',
      borderBottom: '1px solid #eee'
    },
    lessonContent: {
      marginTop: '8px'
    },
    textbookRef: {
      fontStyle: 'italic',
      color: '#666',
      marginTop: '4px',
      fontSize: '9px'
    }
  };

  const renderLessonCell = (lesson, weekIndex, teacher, lessonIndex) => {
    const lessonId = `${weekIndex}-${teacher}-${lessonIndex}`;
    const isCompleted = completedLessons[lessonId] || false;
    
    let cellStyle = styles.contentCell;
    if (lesson.type === 'test') cellStyle = styles.testCell;
    if (lesson.type === 'revision') cellStyle = styles.revisionCell;

    // Add completion indicator styling with consistent colors
    if (isCompleted) {
      cellStyle = {
        ...cellStyle,
        backgroundColor: COLORS.SUCCESS_BG,
        border: `2px solid ${COLORS.SUCCESS}`
      };
    }

    return (
      <td key={lessonIndex} style={cellStyle}>
        <div style={styles.checkboxContainer}>
          <LessonCheckbox
            isCompleted={isCompleted}
            onToggle={toggleLessonCompletion}
            lessonId={lessonId}
            lessonType={lesson.type}
            teacher={teacher}
          />
        </div>
        <div style={styles.lessonContent}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px', fontSize: '11px' }}>
            {lesson.chapter} - {lesson.type === 'test' ? '📝' : lesson.type === 'revision' ? '📚' : '📖'}
          </div>
          <div style={{ whiteSpace: 'pre-line' }}>
            {lesson.content}
          </div>
          {lesson.ref && (
            <div style={styles.textbookRef}>
              📋 {lesson.ref}
            </div>
          )}
        </div>
      </td>
    );
  };

  const renderTextbookRefCell = (lesson, weekIndex, teacher, lessonIndex) => {
    let cellStyle = styles.contentCell;
    if (lesson.type === 'test') cellStyle = styles.testCell;
    if (lesson.type === 'revision') cellStyle = styles.revisionCell;

    return (
      <td key={`ref-${lessonIndex}`} style={cellStyle}>
        {lesson.ref || ''}
      </td>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-4 md:py-6 border-b px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            📚 Interactive IAL Pure Mathematics 1
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>September 2025 - January 2026</span>
            {userProfile && (
              <>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <span>Welcome, {userProfile.name}</span>
                  <Badge variant="secondary">{userProfile.role}</Badge>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tabbed Interface */}
        <Tabs defaultValue="schema" className="w-full">
          <div className="border-b">
            <div className="px-4 md:px-6">
              <TabsList className="grid w-full max-w-md grid-cols-3 text-xs sm:text-sm">
                <TabsTrigger value="schema" className="px-2 py-2">📅 Schema</TabsTrigger>
                <TabsTrigger value="progress" className="px-2 py-2">📊 Progress</TabsTrigger>
                <TabsTrigger value="manage" className="px-2 py-2">⚙️ Manage</TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* Schema Tab */}
          <TabsContent value="schema" className="mt-0">
            <div style={styles.container}>
              {/* Countdown Timer */}
              <CountdownTimer examDate={appSettings?.examDate || "2026-01-08"} />

              {/* Interactive Tables */}
              {weekData.map((week, weekIndex) => {
        const maxLessons = Math.max(week.teacherA?.length || 0, week.teacherB?.length || 0);
        
        return (
          <div key={weekIndex} style={{ marginBottom: '40px' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th rowSpan="3" style={styles.weekCell}>Week</th>
                  <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
                  <th colSpan={week.teacherA?.length || 0} style={styles.chapterHeader}>
                    Teacher A (MBY) - {week.teacherA?.[0]?.chapter || 'Chapter'}
                  </th>
                  <th colSpan={week.teacherB?.length || 0} style={styles.chapterHeader}>
                    Teacher B (KBO) - {week.teacherB?.[0]?.chapter || 'Chapter'}
                  </th>
                </tr>
                <tr>
                  {week.teacherA?.map((_, index) => (
                    <th key={`lesson-a-${index}`} style={styles.lessonHeader}>
                      Lesson {index + 1}<br/>MBY
                    </th>
                  ))}
                  {week.teacherB?.map((_, index) => (
                    <th key={`lesson-b-${index}`} style={styles.lessonHeader}>
                      Lesson {index + 1}<br/>KBO
                    </th>
                  ))}
                </tr>
                <tr>
                  {week.teacherA?.map((_, index) => (
                    <th key={`lo-a-${index}`} style={styles.lessonHeader}>LO</th>
                  ))}
                  {week.teacherB?.map((_, index) => (
                    <th key={`lo-b-${index}`} style={styles.lessonHeader}>LO</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.weekCell}>{week.date}</td>
                  <td style={styles.teacherCell}>A/B</td>
                  {week.teacherA?.map((lesson, lessonIndex) => 
                    renderLessonCell(lesson, weekIndex, 'A', lessonIndex)
                  )}
                  {week.teacherB?.map((lesson, lessonIndex) => 
                    renderLessonCell(lesson, weekIndex, 'B', lessonIndex)
                  )}
                </tr>
                <tr>
                  <td style={styles.weekCell}></td>
                  <td style={styles.teacherCell}>Textbook Ref</td>
                  {week.teacherA?.map((lesson, lessonIndex) => 
                    renderTextbookRefCell(lesson, weekIndex, 'A', lessonIndex)
                  )}
                  {week.teacherB?.map((lesson, lessonIndex) => 
                    renderTextbookRefCell(lesson, weekIndex, 'B', lessonIndex)
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

              {/* Holiday Break */}
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th colSpan="7" style={styles.breakCell}>
                      🏖️ HALF TERM BREAK: 13-17 October 2025
                    </th>
                  </tr>
                </thead>
              </table>

              {/* Summary */}
              <div style={{ 
                marginTop: '30px', 
                fontSize: '12px', 
                backgroundColor: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px',
                border: '2px solid #dee2e6'
              }}>
                <strong>📋 Course Summary:</strong><br/>
                • Teacher A (MBY): Covers Chapters 1, 2, 3, 8, 9 (Algebra & Calculus)<br/>
                • Teacher B (KBO): Covers Chapters 4, 5, 6, 7 (Graphs & Trigonometry)<br/>
                • Each teacher conducts tests for their chapters<br/>
                • Comprehensive revision sessions before exam<br/>
                • Interactive checkboxes to track lesson completion<br/>
                • Progress automatically saved to your browser
              </div>
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="mt-6">
            <div className="space-y-6 px-4 md:px-6 pb-6">
              {/* Progress Tracker */}
              <ProgressTracker completedLessons={completedLessons} weekData={weekData} />

              {/* Exam Preparation Tracker */}
              <ExamPreparationTracker 
                completedLessons={completedLessons} 
                weekData={weekData} 
                currentDate={new Date()} 
              />
            </div>
          </TabsContent>

          {/* Management Tab */}
          <TabsContent value="manage" className="mt-6">
            <div className="px-4 md:px-6 pb-6">
              <DataManagementPanel 
                userProfile={userProfile}
                completedLessons={completedLessons}
                weekData={weekData}
                onDataImported={handleDataImported}
                onReset={handleDataReset}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InteractiveIalP1Schema;
