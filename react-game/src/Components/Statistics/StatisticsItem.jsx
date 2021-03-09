import React from 'react';

const StatisticItem = ({ name, correct, incorrect }) => (
  <tr>
    <td>{name}</td>
    <td>{correct}</td>
    <td>{incorrect}</td>
  </tr>
);

export default StatisticItem;
