import React from 'react';

const StatisticCell = ({ name, correct, incorrect }) => (
  <tr>
    <td>{name}</td>
    <td>{correct}</td>
    <td>{incorrect}</td>
  </tr>
);

export default StatisticCell;
