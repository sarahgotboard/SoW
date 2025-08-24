import React from 'react';

const ProgressTracker = ({ completedLessons, weekData }) => {
  const calculateProgress = () => {
    if (!weekData || weekData.length === 0) {
      return {
        teacherA: { completed: 0, total: 0, percentage: 0, remaining: 0 },
        teacherB: { completed: 0, total: 0, percentage: 0, remaining: 0 },
        overall: { completed: 0, total: 0, percentage: 0, remaining: 0 },
        tests: { completed: 0, total: 0, percentage: 0 },
        revision: { completed: 0, total: 0, percentage: 0 }
      };
    }

    let teacherATotal = 0, teacherBTotal = 0;
    let teacherACompleted = 0, teacherBCompleted = 0;
    let testsTotal = 0, testsCompleted = 0;
    let revisionTotal = 0, revisionCompleted = 0;

    weekData.forEach((week, weekIndex) => {
      // Teacher A lessons
      week.teacherA?.forEach((lesson, lessonIndex) => {
        teacherATotal++;
        const lessonId = `${weekIndex}-A-${lessonIndex}`;
        if (completedLessons[lessonId]) {
          teacherACompleted++;
        }
        
        // Count tests and revision
        if (lesson.type === 'test') {
          testsTotal++;
          if (completedLessons[lessonId]) testsCompleted++;
        } else if (lesson.type === 'revision') {
          revisionTotal++;
          if (completedLessons[lessonId]) revisionCompleted++;
        }
      });

      // Teacher B lessons
      week.teacherB?.forEach((lesson, lessonIndex) => {
        teacherBTotal++;
        const lessonId = `${weekIndex}-B-${lessonIndex}`;
        if (completedLessons[lessonId]) {
          teacherBCompleted++;
        }
        
        // Count tests and revision for Teacher B
        if (lesson.type === 'test') {
          testsTotal++;
          if (completedLessons[lessonId]) testsCompleted++;
        } else if (lesson.type === 'revision') {
          revisionTotal++;
          if (completedLessons[lessonId]) revisionCompleted++;
        }
      });
    });

    const totalLessons = teacherATotal + teacherBTotal;
    const totalCompleted = teacherACompleted + teacherBCompleted;

    return {
      teacherA: {
        completed: teacherACompleted,
        total: teacherATotal,
        percentage: teacherATotal > 0 ? Math.round((teacherACompleted / teacherATotal) * 100) : 0,
        remaining: teacherATotal - teacherACompleted
      },
      teacherB: {
        completed: teacherBCompleted,
        total: teacherBTotal,
        percentage: teacherBTotal > 0 ? Math.round((teacherBCompleted / teacherBTotal) * 100) : 0,
        remaining: teacherBTotal - teacherBCompleted
      },
      overall: {
        completed: totalCompleted,
        total: totalLessons,
        percentage: totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0,
        remaining: totalLessons - totalCompleted
      },
      tests: {
        completed: testsCompleted,
        total: testsTotal,
        percentage: testsTotal > 0 ? Math.round((testsCompleted / testsTotal) * 100) : 0
      },
      revision: {
        completed: revisionCompleted,
        total: revisionTotal,
        percentage: revisionTotal > 0 ? Math.round((revisionCompleted / revisionTotal) * 100) : 0
      }
    };
  };

  const progress = calculateProgress();

  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px 0',
    border: '2px solid #e9ecef'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333'
  };

  const progressGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    marginBottom: '20px'
  };

  const progressCardStyle = {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '6px',
    border: '1px solid #dee2e6',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const progressBarContainerStyle = {
    width: '100%',
    height: '20px',
    backgroundColor: '#e9ecef',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '8px'
  };

  const getProgressBarStyle = (percentage, color) => ({
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: color,
    transition: 'width 0.3s ease-in-out',
    borderRadius: '10px'
  });

  const statStyle = {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px'
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>📊 Progress Tracking Dashboard</div>
      
      <div style={progressGridStyle}>
        {/* Overall Progress */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#28a745' }}>
            🎯 Overall Progress
          </div>
          <div style={progressBarContainerStyle}>
            <div style={getProgressBarStyle(progress.overall.percentage, '#28a745')} />
          </div>
          <div style={statStyle}>
            {progress.overall.completed}/{progress.overall.total} lessons completed ({progress.overall.percentage}%)
          </div>
          <div style={statStyle}>
            {progress.overall.remaining} lessons remaining
          </div>
        </div>

        {/* Teacher A Progress */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#6f42c1' }}>
            👨‍🏫 Teacher A (MBY)
          </div>
          <div style={progressBarContainerStyle}>
            <div style={getProgressBarStyle(progress.teacherA.percentage, '#6f42c1')} />
          </div>
          <div style={statStyle}>
            {progress.teacherA.completed}/{progress.teacherA.total} lessons completed ({progress.teacherA.percentage}%)
          </div>
          <div style={statStyle}>
            Chapters: 1, 2, 3, 8, 9 (Algebra & Calculus)
          </div>
        </div>

        {/* Teacher B Progress */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#fd7e14' }}>
            👩‍🏫 Teacher B (KBO)
          </div>
          <div style={progressBarContainerStyle}>
            <div style={getProgressBarStyle(progress.teacherB.percentage, '#fd7e14')} />
          </div>
          <div style={statStyle}>
            {progress.teacherB.completed}/{progress.teacherB.total} lessons completed ({progress.teacherB.percentage}%)
          </div>
          <div style={statStyle}>
            Chapters: 4, 5, 6, 7 (Graphs & Trigonometry)
          </div>
        </div>

        {/* Tests Progress */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#dc3545' }}>
            📝 Tests Completed
          </div>
          <div style={progressBarContainerStyle}>
            <div style={getProgressBarStyle(progress.tests.percentage, '#dc3545')} />
          </div>
          <div style={statStyle}>
            {progress.tests.completed}/{progress.tests.total} tests completed ({progress.tests.percentage}%)
          </div>
        </div>

        {/* Revision Progress */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#20c997' }}>
            📚 Revision Sessions
          </div>
          <div style={progressBarContainerStyle}>
            <div style={getProgressBarStyle(progress.revision.percentage, '#20c997')} />
          </div>
          <div style={statStyle}>
            {progress.revision.completed}/{progress.revision.total} revision sessions completed ({progress.revision.percentage}%)
          </div>
        </div>

        {/* Weekly Progress Estimate */}
        <div style={progressCardStyle}>
          <div style={{ fontWeight: 'bold', color: '#17a2b8' }}>
            📅 Weekly Estimate
          </div>
          <div style={statStyle}>
            Average: {progress.overall.total > 0 ? Math.round(progress.overall.total / 20) : 0} lessons/week
          </div>
          <div style={statStyle}>
            Completed: {progress.overall.completed > 0 ? Math.round(progress.overall.completed / Math.max(1, Math.ceil(progress.overall.completed / 3))) : 0} lessons/week
          </div>
          <div style={statStyle}>
            Remaining: {progress.overall.remaining} lessons
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>🏆 Achievements</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {progress.overall.percentage >= 25 && <span style={{ backgroundColor: '#ffc107', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>🌟 Quarter Way</span>}
          {progress.overall.percentage >= 50 && <span style={{ backgroundColor: '#fd7e14', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>🔥 Halfway Hero</span>}
          {progress.overall.percentage >= 75 && <span style={{ backgroundColor: '#6f42c1', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>⚡ Almost There</span>}
          {progress.overall.percentage >= 100 && <span style={{ backgroundColor: '#28a745', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>🎊 Complete!</span>}
          {progress.tests.percentage >= 100 && <span style={{ backgroundColor: '#dc3545', padding: '4px 8px', borderRadius: '12px', fontSize: '12px' }}>📝 Test Master</span>}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
