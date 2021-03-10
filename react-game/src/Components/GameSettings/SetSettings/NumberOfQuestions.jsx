import React from 'react';

class NumberOfQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.amount };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { setAmount } = this.props;
    await this.setState({ value: Number(event.target.value) });
    setAmount(event.target.value);
  }

  render() {
    const { state } = this;
    return (
      <form>
        <label htmlFor="label" className="select">
          Questions number:
          <select value={state.value} onChange={this.handleChange}>
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

export default NumberOfQuestions;
