// ----------------react & hooks-------------------------------------
import React from 'react';
// ----------------style & css---------------------------------------
import styles from './category.module.css';
// ----------------components & data---------------------------------
// ----------------reducer---------------------------------

const category = ({ handleCategory }) => {
  const buttons = [
    {
      name: 'All',
      value: 'all',
    },
    {
      name: 'Skill Study',
      value: 'Skill Study',
    },
    {
      name: 'Interview & CS',
      value: 'Interview & CS',
    },
    {
      name: 'Coding Test',
      value: 'Coding Test',
    },
    {
      name: 'Project Log',
      value: 'Project Log',
    },
  ];
  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <button type="button" key={type.value} value={type.value} onClick={handleCategory} className={styles.tab}>
            {type.name}
          </button>
        ))}{' '}
    </>
  );
};

export default category;
