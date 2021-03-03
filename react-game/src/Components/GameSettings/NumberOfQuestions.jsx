import React from 'react'


export class NumberOfQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.amount};
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        await this.setState({value: Number(event.target.value)});
        this.props.setAmount(this.state.value)
        console.log(this.state.value)
        // event.preventDefault();
    }


    render() {
        return (
            <form>
                <label className="box">
                    Questions number:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="50">50</option>

                    </select>
                </label>
            </form>
        );
    }
}
