class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['thing one', 'thing two', 'thing four']

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle Pick')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I Do?</button>
      </div>
    )
  }
}

//Add RemoveAll button
//setup handleRemoveAll method -> alert to screen
//set onClick to fire method

class Options extends React.Component {
  handleRemoveAll() {
    alert('remove all')
  }

  render() {
    return (
      <div> 
        <button onClick={this.handleRemoveAll}>Remove All Options</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component Here
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))