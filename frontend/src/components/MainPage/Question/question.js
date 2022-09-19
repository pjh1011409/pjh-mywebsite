// ----------------react & hooks-------------------------------------
import React, { useState } from 'react';
// ----------------style & css---------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// ----------------components & data---------------------------------
import { QuestionData1, QuestionData2, QuestionData3 } from 'data/questionData';
import imformation from '../Information/information';
import styles from './question.module.css';

function Question() {
  const [questionData, setQuestionData] = useState(QuestionData1);
  return (
    <div style={{ backgroundColor: '#C4DFAA' }}>
      <div className={styles.questionBg}>
        <div className={styles.questionHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.questionIcon} />Q & A
        </div>
        <div className={styles.questionInner}>
          <QuestionData1 />
          <QuestionData2 />
          <QuestionData3 />
        </div>
      </div>
    </div>
  );
}

export default Question;
