const Statisctics = (props) => {
    return (
        <div>
            <div> stat </div>
            <button className='' onClick={() => props.setStatistic(!props.statistic)}>
                To Main Menu
            </button>
        </div>
    )
}

export default Statisctics
