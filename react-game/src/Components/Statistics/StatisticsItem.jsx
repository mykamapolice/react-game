const StatisticItem = (props) => {
    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.correct}</td>
        <td>{props.incorrect}</td>
    </tr>
    )
}

export default StatisticItem
