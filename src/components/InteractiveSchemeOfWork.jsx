import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Calendar, Clock, BookOpen, Target } from 'lucide-react';

const InteractiveSchemeOfWork = () => {
  const [completedLessons, setCompletedLessons] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());

  const examDate = new Date('2026-01-08');
  const startDate = new Date('2025-09-01');

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
      date: '20-Oct',
      teacherA: [
        { type: 'lesson', content: '• Find derivative of functions with two or more terms', ref: '8.5 Differentiating functions with two or more terms (pages 161-163)', chapter: 'Chapter 8' },
        { type: 'lesson', content: '• Use derivative to solve problems involving gradients, tangents and normals', ref: '8.6 Gradients, tangents and normals (pages 163-165)', chapter: 'Chapter 8' },
        { type: 'lesson', content: '• Find second derivative f\'\'(x) or d²y/dx²', ref: '8.7 Second order derivatives (pages 165-166)', chapter: 'Chapter 8' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Use cosine rule to find missing side or angle', ref: '6.1 The cosine rule (pages 105-110)', chapter: 'Chapter 6' },
        { type: 'lesson', content: '• Use sine rule to find missing side or angle', ref: '6.2 The sine rule (pages 110-116)', chapter: 'Chapter 6' }
      ]
    },
    {
      date: '27-Oct',
      teacherA: [
        { type: 'test', content: 'Chapter 8 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 8' },
        { type: 'lesson', content: '• Find y given dy/dx for x^n', ref: '9.1 Integrating x^n (pages 171-173)', chapter: 'Chapter 9' },
        { type: 'lesson', content: '• Integrate polynomials', ref: '9.2 Indefinite integrals (pages 173-175)', chapter: 'Chapter 9' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Find area of triangle using appropriate formula', ref: '6.3 Areas of triangles (pages 116-118)', chapter: 'Chapter 6' },
        { type: 'lesson', content: '• Solve problems involving triangles', ref: '6.4 Solving triangle problems (pages 118-122)', chapter: 'Chapter 6' }
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
    },
    {
      date: '17-Nov',
      teacherA: [
        { type: 'revision', content: 'Revision - Mixed Practice 2\nPast paper questions focusing on Teacher A topics', ref: 'Past paper practice', chapter: 'Revision' },
        { type: 'revision', content: 'Revision - Problem Solving\nComplex multi-step problems', ref: 'Past paper practice', chapter: 'Revision' },
        { type: 'revision', content: 'Revision - Exam Technique\nTime management, question analysis, common errors', ref: 'Exam technique focus', chapter: 'Revision' }
      ],
      teacherB: [
        { type: 'lesson', content: '• Find arc length using radians', ref: '7.2 Arc length (pages 135-139)', chapter: 'Chapter 7' },
        { type: 'lesson', content: '• Find areas of sectors and segments using radians', ref: '7.3 Areas of sectors and segments (pages 139-145)', chapter: 'Chapter 7' }
      ]
    },
    {
      date: '24-Nov',
      teacherA: [
        { type: 'revision', content: 'Mock Exam Practice - Part 1\nFull paper practice focusing on Teacher A topics', ref: 'Full mock paper', chapter: 'Revision' },
        { type: 'revision', content: 'Mock Exam Feedback & Analysis\nDetailed performance breakdown', ref: 'Mock analysis', chapter: 'Revision' },
        { type: 'revision', content: 'Revision - Key Formulas (Teacher A)\nConsolidation of differentiation and integration rules', ref: 'Formula booklet focus', chapter: 'Revision' }
      ],
      teacherB: [
        { type: 'test', content: 'Chapter 7 Test (30 mins) + Feedback (20 mins)', ref: '', chapter: 'Chapter 7' },
        { type: 'revision', content: 'Revision - Chapters 5 & 4\nFocus on straight lines and graph transformations', ref: 'Past paper practice', chapter: 'Revision' }
      ]
    },
    {
      date: '05-Jan',
      teacherA: [
        { type: 'revision', content: 'Final Revision - Last Minute Tips (Teacher A)\nExam strategy, time allocation, calculator techniques', ref: 'Exam strategy', chapter: 'Revision' },
        { type: 'revision', content: 'Pre-Exam Support (Teacher A)\nQ&A session, confidence building, final clarifications', ref: 'Final Q&A', chapter: 'Revision' },
        { type: 'revision', content: 'Combined Final Review\nBoth teachers - complete overview and final questions', ref: 'Complete overview', chapter: 'Revision' }
      ],
      teacherB: [
        { type: 'revision', content: 'Revision - Chapters 6 & 7\nFocus on trigonometry and radians', ref: 'Past paper practice', chapter: 'Revision' },
        { type: 'revision', content: 'Final Revision - Complete Overview (Teacher B)\nIntegration of all Teacher B topics, exam tips', ref: 'Complete overview', chapter: 'Revision' }
      ]
    }
  ];

  const holidays = [
    { name: 'Half Term Break', start: '13-Oct', end: '17-Oct' },
    { name: 'National Day Holiday', start: '02-Dec', end: '03-Dec' },
    { name: 'End of Term 1', start: '05-Dec', end: '04-Jan' }
  ];

  const toggleLesson = (weekIndex, teacher, lessonIndex) => {
    const key = `${weekIndex}-${teacher}-${lessonIndex}`;
    setCompletedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const calculateProgress = () => {
    const totalLessonsA = weekData.reduce((sum, week) => sum + week.teacherA.length, 0);
    const totalLessonsB = weekData.reduce((sum, week) => sum + week.teacherB.length, 0);
    const completedA = Object.keys(completedLessons).filter(key => 
      key.includes('-A-') && completedLessons[key]
    ).length;
    const completedB = Object.keys(completedLessons).filter(key => 
      key.includes('-B-') && completedLessons[key]
    ).length;
    
    return {
      teacherA: { completed: completedA, total: totalLessonsA, remaining: totalLessonsA - completedA },
      teacherB: { completed: completedB, total: totalLessonsB, remaining: totalLessonsB - completedB },
      overall: { 
        completed: completedA + completedB, 
        total: totalLessonsA + totalLessonsB,
        remaining: (totalLessonsA + totalLessonsB) - (completedA + completedB)
      }
    };
  };

  const getDaysUntilExam = () => {
    const today = new Date();
    const timeDiff = examDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const getWeekStatus = (weekDate) => {
    const week = new Date('2025-' + weekDate.split('-').reverse().join('-'));
    const today = new Date();
    const oneWeekLater = new Date(week);
    oneWeekLater.setDate(oneWeekLater.getDate() + 7);
    
    if (today < week) return 'upcoming';
    if (today >= week && today < oneWeekLater) return 'current';
    return 'past';
  };

  const progress = calculateProgress();
  const daysUntilExam = getDaysUntilExam();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Interactive IAL Pure Mathematics 1 - Scheme of Work
        </h1>
        <p className="text-gray-600">September 2025 - January 2026 | Exam: Wednesday, 8th January 2026</p>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-semibold text-blue-800">Days to Exam</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{daysUntilExam}</div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <div className="flex items-center mb-2">
            <Target className="w-5 h-5 text-green-600 mr-2" />
            <span className="font-semibold text-green-800">Overall Progress</span>
          </div>
          <div className="text-2xl font-bold text-green-600">
            {progress.overall.completed}/{progress.overall.total}
          </div>
          <div className="text-sm text-green-700">{progress.overall.remaining} lessons remaining</div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
          <div className="flex items-center mb-2">
            <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
            <span className="font-semibold text-purple-800">Teacher A (MBY)</span>
          </div>
          <div className="text-2xl font-bold text-purple-600">
            {progress.teacherA.completed}/{progress.teacherA.total}
          </div>
          <div className="text-sm text-purple-700">{progress.teacherA.remaining} lessons remaining</div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-orange-600 mr-2" />
            <span className="font-semibold text-orange-800">Teacher B (KBO)</span>
          </div>
          <div className="text-2xl font-bold text-orange-600">
            {progress.teacherB.completed}/{progress.teacherB.total}
          </div>
          <div className="text-sm text-orange-700">{progress.teacherB.remaining} lessons remaining</div>
        </div>
      </div>

      {/* Scheme of Work Table */}
      <div className="space-y-6">
        {weekData.map((week, weekIndex) => {
          const weekStatus = getWeekStatus(week.date);
          const maxLessons = Math.max(week.teacherA.length, week.teacherB.length);
          
          return (
            <div key={weekIndex} className={`border-2 rounded-lg overflow-hidden ${
              weekStatus === 'current' ? 'border-blue-500 bg-blue-50' : 
              weekStatus === 'past' ? 'border-gray-300 bg-gray-50' : 
              'border-gray-200 bg-white'
            }`}>
              <div className="bg-gray-100 p-3 font-bold text-center">
                Week of {week.date} 2025
                {weekStatus === 'current' && <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded">CURRENT WEEK</span>}
              </div>
              
              <div className="grid grid-cols-2 gap-0">
                {/* Teacher A Column */}
                <div className="border-r border-gray-300">
                  <div className="bg-purple-100 p-2 font-semibold text-center border-b border-gray-300">
                    Teacher A (MBY) - Chapters 1, 2, 3, 8, 9
                  </div>
                  {week.teacherA.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className={`p-3 border-b border-gray-200 ${
                      lesson.type === 'test' ? 'bg-red-50' : 
                      lesson.type === 'revision' ? 'bg-green-50' : 'bg-white'
                    }`}>
                      <div className="flex items-start mb-2">
                        <button
                          onClick={() => toggleLesson(weekIndex, 'A', lessonIndex)}
                          className="mr-3 mt-1 flex-shrink-0"
                        >
                          {completedLessons[`${weekIndex}-A-${lessonIndex}`] ? 
                            <CheckCircle2 className="w-5 h-5 text-green-600" /> : 
                            <Circle className="w-5 h-5 text-gray-400" />
                          }
                        </button>
                        <div className="flex-grow">
                          <div className="font-medium text-sm mb-1">
                            Lesson {lessonIndex + 1} - {lesson.chapter}
                          </div>
                          <div className="text-xs text-gray-700 whitespace-pre-line mb-1">
                            {lesson.content}
                          </div>
                          {lesson.ref && (
                            <div className="text-xs text-gray-500 italic">
                              {lesson.ref}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Teacher B Column */}
                <div>
                  <div className="bg-orange-100 p-2 font-semibold text-center border-b border-gray-300">
                    Teacher B (KBO) - Chapters 5, 4, 6, 7
                  </div>
                  {week.teacherB.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className={`p-3 border-b border-gray-200 ${
                      lesson.type === 'test' ? 'bg-red-50' : 
                      lesson.type === 'revision' ? 'bg-green-50' : 'bg-white'
                    }`}>
                      <div className="flex items-start mb-2">
                        <button
                          onClick={() => toggleLesson(weekIndex, 'B', lessonIndex)}
                          className="mr-3 mt-1 flex-shrink-0"
                        >
                          {completedLessons[`${weekIndex}-B-${lessonIndex}`] ? 
                            <CheckCircle2 className="w-5 h-5 text-green-600" /> : 
                            <Circle className="w-5 h-5 text-gray-400" />
                          }
                        </button>
                        <div className="flex-grow">
                          <div className="font-medium text-sm mb-1">
                            Lesson {lessonIndex + 1} - {lesson.chapter}
                          </div>
                          <div className="text-xs text-gray-700 whitespace-pre-line mb-1">
                            {lesson.content}
                          </div>
                          {lesson.ref && (
                            <div className="text-xs text-gray-500 italic">
                              {lesson.ref}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Fill empty slots if Teacher B has fewer lessons */}
                  {Array.from({ length: maxLessons - week.teacherB.length }).map((_, emptyIndex) => (
                    <div key={`empty-${emptyIndex}`} className="p-3 border-b border-gray-200 bg-gray-50">
                      <div className="text-center text-gray-400 text-sm">No lesson scheduled</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Holiday Breaks */}
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <div className="font-bold text-gray-700 mb-2">🏖️ School Holidays</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {holidays.map((holiday, index) => (
              <div key={index} className="bg-white p-2 rounded">
                <div className="font-semibold">{holiday.name}</div>
                <div className="text-gray-600">{holiday.start} to {holiday.end}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Day */}
        <div className="bg-red-100 border-2 border-red-500 p-6 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-700 mb-2">
            🎯 EXAM DAY: Wednesday, 8th January 2026
          </div>
          <div className="text-red-600">
            {daysUntilExam > 0 ? `${daysUntilExam} days remaining` : 'EXAM DAY!'}
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-8 space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Teacher A Progress</span>
            <span className="text-sm text-gray-600">
              {progress.teacherA.completed}/{progress.teacherA.total} lessons completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(progress.teacherA.completed / progress.teacherA.total) * 100}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Teacher B Progress</span>
            <span className="text-sm text-gray-600">
              {progress.teacherB.completed}/{progress.teacherB.total} lessons completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-orange-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(progress.teacherB.completed / progress.teacherB.total) * 100}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Overall Course Progress</span>
            <span className="text-sm text-gray-600">
              {progress.overall.completed}/{progress.overall.total} lessons completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${(progress.overall.completed / progress.overall.total) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Legend:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white border border-gray-300 mr-2"></div>
            <span>Regular Lesson</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-50 border border-red-300 mr-2"></div>
            <span>Chapter Test</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-50 border border-green-300 mr-2"></div>
            <span>Revision Lesson</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Course Summary:</h3>
        <div className="text-sm text-blue-700 space-y-1">
          <div>• Teacher A (MBY): 39 lessons total (30 teaching + 5 tests + 4 revision)</div>
          <div>• Teacher B (KBO): 26 lessons total (18 teaching + 4 tests + 4 revision)</div>
          <div>• All 9 chapters covered with comprehensive testing and revision</div>
          <div>• Each teacher tests the chapters they teach</div>
          <div>• 2+ weeks dedicated revision time before exam</div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSchemeOfWork;
