import React from 'react';
import StatisticItem from './StatisticsItem';

const Statisctics = (props) => {
  const useForceUpdate = () => {
    localStorage.clear();
  };

  const categories = {
    9: 'General',
    10: 'Books',
    11: 'Films',
    12: 'Music',
    15: 'Games',
    21: 'Sports',
    27: 'Animals',
  };

  const keys = Object.keys(localStorage);

  const allStatistics = keys.map((key) => {
    const abc = JSON.parse(localStorage.getItem(key));
    const categoryName = categories[key.toString()];
    const item = {
      ...abc, categoryName,
    };
    return item;
  });

  const tableBody = allStatistics.map((el) => (
    <StatisticItem
      name={el.categoryName}
      incorrect={el.incorrect}
      correct={el.correct}
      key={el.categoryName}
    />
  ));

  return (
    <div>
      <div> Statistics </div>
      {tableBody.length ? (
        <table>
          <tr>
            <th>Category</th>
            <th>Correct</th>
            <th>Incorrect</th>
          </tr>
          {tableBody}
        </table>
      ) : <h1>U have no statistics yet</h1>}

      <button type="button" className="" onClick={() => props.setStatistic(!props.statistic)}>
        To Main Menu
      </button>
      <button type="button" className="" onClick={useForceUpdate}>
        Clear all Statistics
      </button>
    </div>
  );
};

export default Statisctics;
