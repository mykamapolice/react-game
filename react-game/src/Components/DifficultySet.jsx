import React from 'react'


export class DifficultySet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.difficulty};

        this.handleChange = this.handleChange.bind(this);
    }


    async handleChange(event) {
        await this.setState({value: event.target.value});
        await this.props.setdif(this.state.value)
    }


    render() {
        return (
            <form>
                <label>
                    Choose difficulty:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="easy">izi</option>
                        <option value="medium">middle</option>
                        <option value="hard">hard</option>
                    </select>
                </label>
            </form>
        );
    }
}
