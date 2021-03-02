import React from 'react'


export class DifficultySet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'easy'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.setdif(this.state.value)
        console.log(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите ваш любимый вкус:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="easy">Легко</option>
                        <option value="medium">Средне</option>
                        <option value="hard">Тяжко</option>
                    </select>
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}
