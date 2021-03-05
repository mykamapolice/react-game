import React from 'react'


export class TopicSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.topic};

        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({value: event.target.value});
        this.props.setTpc(this.state.value)
    }

    render() {
        return (
            <form>
                <label className="select">
                    Category
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="9">General</option>
                        <option value="10">Books</option>
                        <option value="11">Films</option>
                        <option value="12">Music</option>
                        <option value="15">Video Games</option>
                        <option value="21">Sports</option>
                        <option value="27">Animals</option>
                    </select>
                </label>
            </form>
        );
    }
}
