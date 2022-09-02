// ----------------react & hooks-------------------------------------
import React from 'react';
// ----------------style & css---------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
// ----------------components & data---------------------------------
import QuestionData from 'data/questionData';
import styles from './question.module.css';

function Question() {
  const [questionData, setQuestionData] = [QuestionData];

  return (
    <div style={{ backgroundColor: '#C4DFAA' }}>
      <div className={styles.questionBg}>
        <div className={styles.questionHead}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.questionIcon} />Q & A
        </div>
        <div className={styles.questionInner}>
          {questionData.map((data, i) => {
            return (
              <div key={data.id}>
                <div className={styles.questionMargin}>
                  <div className={styles.question}>
                    <img
                      alt="질문(이미지없음)"
                      src={`${process.env.PUBLIC_URL}./static/images/question.png`}
                      className={styles.questionImg}
                    />

                    {QuestionData[i].question}
                  </div>
                  <div className={styles.moreInfoBg}>
                    <div className={styles.moreInfo}>
                      <div id="example-collapse-text">{QuestionData[i].answer}</div>
                    </div>
                  </div>
                </div>
                <div style={{ clear: 'both' }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
