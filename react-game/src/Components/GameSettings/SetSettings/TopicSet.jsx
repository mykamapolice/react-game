import React from 'react';

class TopicSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.topic };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { setTpc } = this.props;
    await this.setState({ value: event.target.value });
    setTpc(event.target.value);
  }

  render() {
    const { state } = this;
    return (
      <form>
        <label htmlFor="label" className="select">
          Category
          <select value={state.value} onChange={this.handleChange}>
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

export default TopicSet;
