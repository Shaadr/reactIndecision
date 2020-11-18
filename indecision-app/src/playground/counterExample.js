//state example url: files.mead.io/2H3s0y3I222k

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    //state
    this.state = {
      count: 0
    }
  }

  handleAddOne() {
    //setState only requires the state values changing. if there are other values not changing, those do not need to be added
    //can pass in just an object if the previous state is not required i.e. see handleReset()
    //  however this may become depreciated soon and the setState function will be preferred method.
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne() {
    this.setState((prevCount) => {
      return {
        count: prevCount.count - 1
      }
    });
  }

  handleReset() {
    this.setState({count:0})
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))