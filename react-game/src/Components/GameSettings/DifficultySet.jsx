import React from 'react';

class DifficultySet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.difficulty };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { setdif } = this.props;
    const { state } = this;
    await this.setState({ value: event.target.value });
    await setdif(state.value);
  }

  render() {
    const { state } = this;
    return (
      <form>
        <label htmlFor="label" className="select">
          Difficulty:
          <select value={state.value} onChange={this.handleChange}>
            <option value="easy">izi</option>
            <option value="medium">middle</option>
            <option value="hard">hard</option>
          </select>
        </label>
      </form>
    );
  }
}

export default DifficultySet;
