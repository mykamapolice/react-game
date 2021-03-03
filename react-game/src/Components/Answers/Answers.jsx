// import Hotkeys from 'react-hot-keys';
// import React from "react";
//
// export default class Answers extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             output: 'Hello, I am a component that listens to keydown and keyup of a',
//         }
//     }
//     onKeyUp(keyName, e, handle) {
//         console.log("test:onKeyUp", e, handle)
//         this.setState({
//             output: `onKeyUp ${keyName}`,
//         });
//     }
//     render() {
//         return (
//             <Hotkeys
//                 keyName="a,b,c,d"
//                 onKeyDown={this.onKeyDown.bind(this)}
//                 onKeyUp={this.onKeyUp.bind(this)}
//             >
//                 <div>
//                     {answers.map(answer => (
//                         <div key = {answer.question}>
//                             <button className="card" disabled={userAnswer ? true: false} value={answer.question} onClick={callback}>
//                                 <span dangerouslySetInnerHTML={{__html: `${answer.hotkey} ${answer.question}`}}/>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </Hotkeys>
//         )
//     }
// }
