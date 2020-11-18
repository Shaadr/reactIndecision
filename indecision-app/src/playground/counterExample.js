// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// }

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

class Counter extends React.Component {
  handleAddOne() {
    alert('+1')
  }

  handleMinusOne() {
    alert('-1')
  }

  handleReset() {
    alert('reset')
  }

  render() {
    let count = 0
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))