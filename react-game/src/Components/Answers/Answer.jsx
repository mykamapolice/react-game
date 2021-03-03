import React from "react";
import Hotkeys from 'react-hot-keys';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.correctHotKey = null
        this.state = {
            output: 'Hello, I am a component that listens to keydown and keyup of a',
        }
    }
    onKeyUp(keyName, e, handle) {
        console.log("test:onKeyUp", e, handle)
        this.setState({
            output: `onKeyUp ${keyName}`,
        });
    }

    render() {
        return (
            <Hotkeys
                keyName="a, b, c, d"
                onKeyUp={this.onKeyUp.bind(this)}
            >
                <div key = {this.props.answer.question}>
                    <button className="card" disabled={this.props.userAnswer ? true: false} value={this.props.answer.question} onClick={this.props.callback}>
                        {/*{this.props.userAnswer ? this.correctHotKey = this.props.answer.hotkey : null}*/}
                        {this.props.userAnswer !== undefined && this.props.userAnswer.correct === true ?
                            this.correctHotKey = this.props.answer.hotkey :
                            null
                        }
                        {console.log('hi')}
                        <span dangerouslySetInnerHTML={{__html: `${this.props.answer.hotkey} ${this.props.answer.question}`}}/>
                    </button>
                </div>
            </Hotkeys>
        )
    }
}
