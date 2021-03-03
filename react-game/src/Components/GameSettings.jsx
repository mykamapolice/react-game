import {menu} from "../styles";
import {DifficultySet} from "./DifficultySet";
import {TopicSet} from "./TopicSet";
import {NumberOfQuestions} from "./NumberOfQuestions";

const GameSettings = (props) => {
    return(
        <div style={menu}>
            <DifficultySet difficulty={props.difficulty} setdif={props.setDifficulty} classname="difficulty"/>
            <TopicSet setTpc={props.setCategory} topic={props.category}/>
            <NumberOfQuestions amount={props.amount} setAmount={props.setAmount}/>
            <button className='' onClick={() => props.setSettings(!props.settings)}>
                To Main Menu
            </button>
        </div>
    )
}

export default GameSettings
