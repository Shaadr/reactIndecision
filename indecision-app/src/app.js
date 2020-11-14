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
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    )
  }
}

//render new p tag for each option(set text and key)

class Options extends React.Component {
  render() {
    return (
      <div>
        <p key={this.props.options[0]}>{this.props.options[0]}</p>
        <p key={this.props.options[1]}>{this.props.options[1]}</p>
        <p key={this.props.options[2]}>{this.props.options[2]}</p>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component
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