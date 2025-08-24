import React from 'react';

const IalP1Schema = () => {
  const styles = {
   
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      fontSize: '11px',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginBottom: '20px',
    },
    th: {
      border: '2px solid black',
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    td: {
      border: '2px solid black',
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    weekCell: {
      writingMode: 'vertical-lr',
      textOrientation: 'mixed',
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
      width: '80px',
      textAlign: 'center',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    teacherCell: {
      backgroundColor: '#e0e0e0',
      fontWeight: 'bold',
      width: '60px',
      textAlign: 'center',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    chapterHeader: {
      backgroundColor: '#d0d0d0',
      fontWeight: 'bold',
      textAlign: 'center',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    lessonHeader: {
      backgroundColor: '#f8f8f8',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: '10px',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    loCell: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
      width: '80px',
      textAlign: 'center',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    contentCell: {
      fontSize: '10px',
      lineHeight: '1.2',
      border: '2px solid black',
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    testCell: {
      backgroundColor: '#ffcccc',
      fontSize: '10px',
      lineHeight: '1.2',
      border: '2px solid black',
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    revisionCell: {
      backgroundColor: '#ccffcc',
      fontSize: '10px',
      lineHeight: '1.2',
      border: '2px solid black',
      padding: '8px',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    breakCell: {
      backgroundColor: '#cccccc',
      textAlign: 'center',
      fontStyle: 'italic',
      border: '2px solid black',
      padding: '8px',
      verticalAlign: 'top',
    },
    title: {
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    examCell: {
      backgroundColor: '#ff6666',
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '15px',
      border: '2px solid black',
      verticalAlign: 'top',
    },
    summary: {
      marginTop: '30px',
      fontSize: '12px',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.title}>IAL Pure Mathematics 1 - Scheme of Work (Sept 2025 - Jan 2026)</div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 1: Algebraic Expressions</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 5: Straight Line Graphs</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>01-Sep</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Multiply and divide integer powers<br/>• Expand a single term over brackets and collect like terms</td>
            <td style={styles.contentCell}>• Expand the product of two or three expressions<br/>• Factorise linear, quadratic and simple cubic expressions</td>
            <td style={styles.contentCell}>• Know and use the laws of indices<br/>• Simplify and use the rules of surds</td>
            <td style={styles.contentCell}>• Calculate the gradient of a line joining a pair of points<br/>• Understand the link between equation of a line, gradient and intercept</td>
            <td style={styles.contentCell}>• Find equation of a line given gradient and one point or two points</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>1.1 Index laws (pages 2-4)<br/>1.2 Expanding brackets (pages 4-6)</td>
            <td style={styles.contentCell}>1.2 Expanding brackets (pages 4-6)<br/>1.3 Factorising (pages 6-9)</td>
            <td style={styles.contentCell}>1.4 Negative and fractional indices (pages 9-11)<br/>1.5 Surds (pages 12-13)</td>
            <td style={styles.contentCell}>5.1 y = mx + c (pages 86-89)</td>
            <td style={styles.contentCell}>5.2 Equations of straight lines (pages 89-92)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 1: Algebraic Expressions / Chapter 2: Quadratics</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 5: Straight Line Graphs</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>08-Sep</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Rationalise denominators</td>
            <td style={styles.testCell}>Chapter 1 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Solving quadratic equations</td>
            <td style={styles.contentCell}>• Know and use rules for parallel and perpendicular graphs</td>
            <td style={styles.contentCell}>• Find point of intersection for straight lines<br/>• Solve length and area problems on coordinate grids</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>1.6 Rationalising denominators (pages 13-15)</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>2.1 Solving quadratic equations (pages 18-21)</td>
            <td style={styles.contentCell}>5.3 Parallel and perpendicular lines (pages 93-96)</td>
            <td style={styles.contentCell}>5.4 Length and area (pages 96-99)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 2: Quadratics</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 5: Test / Chapter 4: Graphs and Transformations</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>15-Sep</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Completing the square</td>
            <td style={styles.contentCell}>• Functions<br/>• Quadratic graphs</td>
            <td style={styles.contentCell}>• The discriminant</td>
            <td style={styles.testCell}>Chapter 5 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Sketch cubic graphs</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>2.2 Completing the square (pages 22-24)</td>
            <td style={styles.contentCell}>2.3 Functions (pages 25-26)<br/>2.4 Quadratic graphs (pages 27-29)</td>
            <td style={styles.contentCell}>2.5 The discriminant (pages 30-32)</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>4.1 Cubic graphs (pages 58-61)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 2: Quadratics / Chapter 3: Equations and Inequalities</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 4: Graphs and Transformations</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>22-Sep</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.testCell}>Chapter 2 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Linear simultaneous equations</td>
            <td style={styles.contentCell}>• Quadratic simultaneous equations<br/>• Simultaneous equations on graphs</td>
            <td style={styles.contentCell}>• Sketch reciprocal graphs of form y = k/x and y = k/x²</td>
            <td style={styles.contentCell}>• Use intersection points of graphs to solve equations</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>3.1 Linear simultaneous equations (pages 36-38)</td>
            <td style={styles.contentCell}>3.2 Quadratic simultaneous equations (pages 39-40)<br/>3.3 Simultaneous equations on graphs (pages 40-43)</td>
            <td style={styles.contentCell}>4.2 Reciprocal graphs (pages 62-63)</td>
            <td style={styles.contentCell}>4.3 Points of intersection (pages 63-66)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 3: Equations and Inequalities</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 4: Graphs and Transformations</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>29-Sep</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Linear inequalities</td>
            <td style={styles.contentCell}>• Quadratic inequalities</td>
            <td style={styles.contentCell}>• Inequalities on graphs<br/>• Regions</td>
            <td style={styles.contentCell}>• Translate graphs</td>
            <td style={styles.contentCell}>• Stretch graphs</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>3.4 Linear inequalities (pages 44-45)</td>
            <td style={styles.contentCell}>3.5 Quadratic inequalities (pages 46-49)</td>
            <td style={styles.contentCell}>3.6 Inequalities on graphs (pages 49-50)<br/>3.7 Regions (pages 51-54)</td>
            <td style={styles.contentCell}>4.4 Translating graphs (pages 67-71)</td>
            <td style={styles.contentCell}>4.5 Stretching graphs (pages 71-74)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 3: Equations and Inequalities / Chapter 8: Differentiation</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 4: Test / Chapter 6: Trigonometric Ratios</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>06-Oct</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.testCell}>Chapter 3 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Find derivative f'(x) or dy/dx of simple function</td>
            <td style={styles.contentCell}>• Find derivative of quadratic functions</td>
            <td style={styles.contentCell}>• Transform graphs of unfamiliar functions</td>
            <td style={styles.testCell}>Chapter 4 Test (30 mins) + Feedback (20 mins)</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>8.2 Finding the derivative (page 154)<br/>8.3 Differentiating x^n (pages 157-158)</td>
            <td style={styles.contentCell}>8.4 Differentiating quadratics (pages 159-160)</td>
            <td style={styles.contentCell}>4.6 Transforming functions (pages 75-77)</td>
            <td style={styles.testCell}></td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th colSpan="7" style={styles.breakCell}>HALF TERM BREAK: 13-17 October 2025</th>
          </tr>
        </thead>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 8: Differentiation</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 6: Trigonometric Ratios</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>20-Oct</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Find derivative of functions with two or more terms</td>
            <td style={styles.contentCell}>• Use derivative to solve problems involving gradients, tangents and normals</td>
            <td style={styles.contentCell}>• Find second derivative f''(x) or d²y/dx²</td>
            <td style={styles.contentCell}>• Use cosine rule to find missing side or angle</td>
            <td style={styles.contentCell}>• Use sine rule to find missing side or angle</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>8.5 Differentiating functions with two or more terms (pages 161-163)</td>
            <td style={styles.contentCell}>8.6 Gradients, tangents and normals (pages 163-165)</td>
            <td style={styles.contentCell}>8.7 Second order derivatives (pages 165-166)</td>
            <td style={styles.contentCell}>6.1 The cosine rule (pages 105-110)</td>
            <td style={styles.contentCell}>6.2 The sine rule (pages 110-116)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 8: Differentiation / Chapter 9: Integration</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 6: Trigonometric Ratios</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>27-Oct</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.testCell}>Chapter 8 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Find y given dy/dx for x^n</td>
            <td style={styles.contentCell}>• Integrate polynomials</td>
            <td style={styles.contentCell}>• Find area of triangle using appropriate formula</td>
            <td style={styles.contentCell}>• Solve problems involving triangles</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>9.1 Integrating x^n (pages 171-173)</td>
            <td style={styles.contentCell}>9.2 Indefinite integrals (pages 173-175)</td>
            <td style={styles.contentCell}>6.3 Areas of triangles (pages 116-118)</td>
            <td style={styles.contentCell}>6.4 Solving triangle problems (pages 118-122)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>Chapter 9: Integration</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 6: Trigonometric Ratios / Chapter 7: Radians</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>03-Nov</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.contentCell}>• Find f(x), given f'(x) and a point on curve</td>
            <td style={styles.testCell}>Chapter 9 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.revisionCell}>Revision - Chapters 1 & 2<br/>Focus on algebraic manipulation, quadratic solving</td>
            <td style={styles.contentCell}>• Sketch graphs of sine, cosine and tangent functions</td>
            <td style={styles.contentCell}>• Sketch simple transformations of trigonometric graphs</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.contentCell}>9.3 Finding functions (pages 176-178)</td>
            <td style={styles.testCell}></td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.contentCell}>6.5 Graphs of sine, cosine and tangent (pages 123-125)</td>
            <td style={styles.contentCell}>6.6 Transforming trigonometric graphs (pages 125-129)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>REVISION</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 7: Radians</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>10-Nov</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.revisionCell}>Revision - Chapter 3<br/>Focus on simultaneous equations and inequalities</td>
            <td style={styles.revisionCell}>Revision - Chapters 8 & 9<br/>Focus on differentiation and integration techniques</td>
            <td style={styles.revisionCell}>Revision - Mixed Practice 1<br/>Algebra and calculus combination problems</td>
            <td style={styles.testCell}>Chapter 6 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.contentCell}>• Convert between degrees and radians<br/>• Know exact values of angles in radians</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.testCell}></td>
            <td style={styles.contentCell}>7.1 Radian measure (pages 134-135)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>REVISION</th>
            <th colSpan="2" style={styles.chapterHeader}>Chapter 7: Radians / REVISION</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>17-Nov</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.revisionCell}>Revision - Mixed Practice 2<br/>Past paper questions focusing on Teacher A topics</td>
            <td style={styles.revisionCell}>Revision - Problem Solving<br/>Complex multi-step problems</td>
            <td style={styles.revisionCell}>Revision - Exam Technique<br/>Time management, question analysis, common errors</td>
            <td style={styles.contentCell}>• Find arc length using radians</td>
            <td style={styles.contentCell}>• Find areas of sectors and segments using radians</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.revisionCell}>Exam technique focus</td>
            <td style={styles.contentCell}>7.2 Arc length (pages 135-139)</td>
            <td style={styles.contentCell}>7.3 Areas of sectors and segments (pages 139-145)</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>REVISION</th>
            <th colSpan="2" style={styles.chapterHeader}>REVISION</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>24-Nov</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.revisionCell}>Mock Exam Practice - Part 1<br/>Full paper practice focusing on Teacher A topics</td>
            <td style={styles.revisionCell}>Mock Exam Feedback & Analysis<br/>Detailed performance breakdown</td>
            <td style={styles.revisionCell}>Revision - Key Formulas (Teacher A)<br/>Consolidation of differentiation and integration rules</td>
            <td style={styles.testCell}>Chapter 7 Test (30 mins) + Feedback (20 mins)</td>
            <td style={styles.revisionCell}>Revision - Chapters 5 & 4<br/>Focus on straight lines and graph transformations</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.revisionCell}>Full mock paper</td>
            <td style={styles.revisionCell}>Mock analysis</td>
            <td style={styles.revisionCell}>Formula booklet focus</td>
            <td style={styles.testCell}></td>
            <td style={styles.revisionCell}>Past paper practice</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th colSpan="7" style={styles.breakCell}>NATIONAL DAY HOLIDAY: 2-3 December 2025 / END OF TERM 1: 5 December 2025</th>
          </tr>
        </thead>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th rowSpan="3" style={styles.weekCell}>Week</th>
            <th rowSpan="3" style={styles.teacherCell}>Teacher</th>
            <th colSpan="3" style={styles.chapterHeader}>FINAL REVISION</th>
            <th colSpan="2" style={styles.chapterHeader}>FINAL REVISION</th>
          </tr>
          <tr>
            <th style={styles.lessonHeader}>Lesson 1<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 3<br/>MBY</th>
            <th style={styles.lessonHeader}>Lesson 1<br/>KBO</th>
            <th style={styles.lessonHeader}>Lesson 2<br/>KBO</th>
          </tr>
          <tr>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
            <th style={styles.loCell}>LO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.weekCell}>05-Jan</td>
            <td style={styles.teacherCell}>A/B</td>
            <td style={styles.revisionCell}>Final Revision - Last Minute Tips (Teacher A)<br/>Exam strategy, time allocation, calculator techniques</td>
            <td style={styles.revisionCell}>Pre-Exam Support (Teacher A)<br/>Q&A session, confidence building, final clarifications</td>
            <td style={styles.revisionCell}>Combined Final Review<br/>Both teachers - complete overview and final questions</td>
            <td style={styles.revisionCell}>Revision - Chapters 6 & 7<br/>Focus on trigonometry and radians</td>
            <td style={styles.revisionCell}>Final Revision - Complete Overview (Teacher B)<br/>Integration of all Teacher B topics, exam tips</td>
          </tr>
          <tr>
            <td style={styles.weekCell}></td>
            <td style={styles.teacherCell}>Textbook Ref</td>
            <td style={styles.revisionCell}>Exam strategy</td>
            <td style={styles.revisionCell}>Final Q&A</td>
            <td style={styles.revisionCell}>Complete overview</td>
            <td style={styles.revisionCell}>Past paper practice</td>
            <td style={styles.revisionCell}>Complete overview</td>
          </tr>
        </tbody>
      </table>

      <table style={styles.table}>
        <thead>
          <tr>
            <th colSpan="7" style={styles.examCell}>
              EXAM: Wednesday, 8th January 2026
            </th>
          </tr>
        </thead>
      </table>

      <div style={styles.summary}>
        <strong>Summary:</strong><br/>
        • Teacher A (MBY): 39 lessons total (30 teaching + 5 tests + 4 revision)<br/>
        • Teacher B (KBO): 26 lessons total (18 teaching + 4 tests + 4 revision)<br/>
        • All 9 chapters covered with comprehensive testing and revision<br/>
        • Each teacher tests the chapters they teach<br/>
        • 2+ weeks dedicated revision time before exam
      </div>
    </div>
  );
};

export default IalP1Schema;
