import React from 'react';
import { COLORS } from './ColorTheme';

const ExamPreparationTracker = ({ completedLessons, weekData, currentDate = new Date() }) => {
  const examDate = new Date('2026-01-08');
  
  const analyzeExamReadiness = () => {
    const now = currentDate;
    const daysToExam = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
    const weeksToExam = Math.ceil(daysToExam / 7);
    
    // Calculate completion rates by teacher and chapter
    const teacherAChapters = {
      'Chapter 1': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 2': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 3': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 8': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 9': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
    };
    
    const teacherBChapters = {
      'Chapter 4': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 5': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 6': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
      'Chapter 7': { lessons: 0, completed: 0, tests: 0, testsCompleted: 0 },
    };
    
    let revisionLessons = 0, revisionCompleted = 0;
    
    weekData.forEach((week, weekIndex) => {
      // Analyze Teacher A
      week.teacherA?.forEach((lesson, lessonIndex) => {
        const lessonId = `${weekIndex}-A-${lessonIndex}`;
        const isCompleted = completedLessons[lessonId];
        
        if (lesson.type === 'revision') {
          revisionLessons++;
          if (isCompleted) revisionCompleted++;
        } else if (teacherAChapters[lesson.chapter]) {
          if (lesson.type === 'test') {
            teacherAChapters[lesson.chapter].tests++;
            if (isCompleted) teacherAChapters[lesson.chapter].testsCompleted++;
          } else {
            teacherAChapters[lesson.chapter].lessons++;
            if (isCompleted) teacherAChapters[lesson.chapter].completed++;
          }
        }
      });
      
      // Analyze Teacher B
      week.teacherB?.forEach((lesson, lessonIndex) => {
        const lessonId = `${weekIndex}-B-${lessonIndex}`;
        const isCompleted = completedLessons[lessonId];
        
        if (lesson.type === 'revision') {
          revisionLessons++;
          if (isCompleted) revisionCompleted++;
        } else if (teacherBChapters[lesson.chapter]) {
          if (lesson.type === 'test') {
            teacherBChapters[lesson.chapter].tests++;
            if (isCompleted) teacherBChapters[lesson.chapter].testsCompleted++;
          } else {
            teacherBChapters[lesson.chapter].lessons++;
            if (isCompleted) teacherBChapters[lesson.chapter].completed++;
          }
        }
      });
    });
    
    return {
      daysToExam,
      weeksToExam,
      teacherAChapters,
      teacherBChapters,
      revision: { lessons: revisionLessons, completed: revisionCompleted }
    };
  };
  
  const getChapterStatus = (chapter) => {
    const lessonCompletion = chapter.lessons > 0 ? (chapter.completed / chapter.lessons) * 100 : 0;
    const testCompletion = chapter.tests > 0 ? (chapter.testsCompleted / chapter.tests) * 100 : 100;
    
    if (lessonCompletion >= 100 && testCompletion >= 100) return 'ready';
    if (lessonCompletion >= 80 && testCompletion >= 50) return 'nearly-ready';
    if (lessonCompletion >= 50) return 'in-progress';
    return 'at-risk';
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'ready': return COLORS.SUCCESS;
      case 'nearly-ready': return COLORS.INFO;
      case 'in-progress': return COLORS.WARNING; // Amber
      case 'at-risk': return COLORS.WARNING;
      default: return COLORS.NEUTRAL;
    }
  };
  
  const getStatusBackground = (status) => {
    switch (status) {
      case 'ready': return COLORS.SUCCESS_BG;
      case 'nearly-ready': return COLORS.INFO_BG;
      case 'in-progress': return COLORS.WARNING_BG;
      case 'at-risk': return COLORS.WARNING_BG;
      default: return COLORS.NEUTRAL_LIGHT;
    }
  };
  
  const analysis = analyzeExamReadiness();
  
  const containerStyle = {
    backgroundColor: COLORS.NEUTRAL_LIGHT,
    padding: '20px',
    borderRadius: '12px',
    margin: '20px 0',
    border: `2px solid ${COLORS.NEUTRAL}`,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };
  
  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: COLORS.NEUTRAL_DARK
  };
  
  const alertStyle = {
    backgroundColor: analysis.daysToExam <= 30 ? COLORS.WARNING_BG : COLORS.INFO_BG,
    color: analysis.daysToExam <= 30 ? COLORS.WARNING_TEXT : COLORS.INFO_TEXT,
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    border: `2px solid ${analysis.daysToExam <= 30 ? COLORS.WARNING : COLORS.INFO}`
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '20px'
  };
  
  const teacherSectionStyle = {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  };
  
  const chapterCardStyle = (status) => ({
    backgroundColor: 'white',
    border: `1px solid ${COLORS.BORDER}`,
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  });
  
  const renderChapter = (chapterName, chapterData) => {
    const status = getChapterStatus(chapterData);
    const lessonPercentage = chapterData.lessons > 0 ? Math.round((chapterData.completed / chapterData.lessons) * 100) : 0;
    const testPercentage = chapterData.tests > 0 ? Math.round((chapterData.testsCompleted / chapterData.tests) * 100) : 100;
    
    return (
      <div key={chapterName} style={chapterCardStyle(status)}>
        <div style={{ 
          fontWeight: 'bold', 
          color: getStatusColor(status),
          marginBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{chapterName}</span>
          <span style={{ fontSize: '12px' }}>
            {status === 'ready' ? '✅' : 
             status === 'nearly-ready' ? '🔄' : 
             status === 'in-progress' ? '⚠️' : '🚨'}
          </span>
        </div>
        <div style={{ fontSize: '12px', color: COLORS.NEUTRAL_DARK }}>
          📚 Lessons: {chapterData.completed}/{chapterData.lessons} ({lessonPercentage}%)
        </div>
        <div style={{ fontSize: '12px', color: COLORS.NEUTRAL_DARK }}>
          📝 Tests: {chapterData.testsCompleted}/{chapterData.tests} ({testPercentage}%)
        </div>
      </div>
    );
  };
  
  const calculateOverallReadiness = () => {
    const allChapters = {...analysis.teacherAChapters, ...analysis.teacherBChapters};
    const readyChapters = Object.values(allChapters).filter(chapter => getChapterStatus(chapter) === 'ready').length;
    const totalChapters = Object.keys(allChapters).length;
    return Math.round((readyChapters / totalChapters) * 100);
  };
  
  const overallReadiness = calculateOverallReadiness();
  const revisionPercentage = analysis.revision.lessons > 0 ? Math.round((analysis.revision.completed / analysis.revision.lessons) * 100) : 0;
  
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        🎯 Exam Preparation Readiness Assessment
      </div>
      
      <div style={alertStyle}>
        {analysis.daysToExam <= 30 ? '🚨 FINAL EXAM PREPARATION PHASE' : '📅 Regular Study Phase'} 
        <br />
        {analysis.daysToExam} days ({analysis.weeksToExam} weeks) until exam
      </div>
      
      {/* Overall Readiness */}
      <div style={{
        backgroundColor: overallReadiness >= 80 ? COLORS.SUCCESS_BG : 
                       overallReadiness >= 60 ? '#fef3c7' : COLORS.WARNING_BG,
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center',
        border: `2px solid ${overallReadiness >= 80 ? COLORS.SUCCESS : 
                              overallReadiness >= 60 ? '#f59e0b' : COLORS.WARNING}`
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
          Overall Exam Readiness: {overallReadiness}%
        </div>
        <div style={{ fontSize: '14px' }}>
          Revision Progress: {revisionPercentage}% ({analysis.revision.completed}/{analysis.revision.lessons} sessions)
        </div>
      </div>
      
      <div style={gridStyle}>
        {/* Teacher A Assessment */}
        <div style={teacherSectionStyle}>
          <div style={{ 
            backgroundColor: COLORS.TEACHER_A_BG,
            color: COLORS.TEACHER_A,
            padding: '10px',
            borderRadius: '6px',
            marginBottom: '15px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            👨‍🏫 Teacher A (MBY) - Self Assessment
            <div style={{ fontSize: '12px', fontWeight: 'normal', marginTop: '5px' }}>
              Algebra, Quadratics, Equations, Calculus
            </div>
          </div>
          {Object.entries(analysis.teacherAChapters).map(([name, data]) => renderChapter(name, data))}
        </div>
        
        {/* Teacher B Assessment */}
        <div style={teacherSectionStyle}>
          <div style={{ 
            backgroundColor: COLORS.TEACHER_B_BG,
            color: COLORS.TEACHER_B,
            padding: '10px',
            borderRadius: '6px',
            marginBottom: '15px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            👩‍🏫 Teacher B (KBO) - Self Assessment
            <div style={{ fontSize: '12px', fontWeight: 'normal', marginTop: '5px' }}>
              Graphs, Lines, Trigonometry, Radians
            </div>
          </div>
          {Object.entries(analysis.teacherBChapters).map(([name, data]) => renderChapter(name, data))}
        </div>
      </div>
      
      {/* Exam Preparation Recommendations */}
      <div style={{
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '10px', color: COLORS.INTERACTIVE }}>
          📋 Preparation Recommendations:
        </div>
        <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
          {overallReadiness >= 80 ? (
            <div style={{ color: COLORS.SUCCESS_TEXT }}>
              ✅ Excellent progress! Focus on revision and past paper practice.<br/>
              ✅ Both teachers should continue with comprehensive review sessions.
            </div>
          ) : overallReadiness >= 60 ? (
            <div style={{ color: '#d97706' }}>
              ⚠️ Good progress but needs attention. Priority areas:<br/>
              • Complete remaining chapter assessments<br/>
              • Increase revision session frequency<br/>
              • Focus on weaker chapters identified above
            </div>
          ) : (
            <div style={{ color: COLORS.WARNING_TEXT }}>
              🚨 Urgent action required:<br/>
              • Immediate focus on incomplete chapters<br/>
              • Additional support sessions recommended<br/>
              • Consider extending study hours<br/>
              • Both teachers need to prioritize completion
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamPreparationTracker;
