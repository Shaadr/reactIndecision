class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  };

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
       options: prevState.options.filter((option) => optionToRemove !== option)
      }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const selectedOption = this.state.options[randomNum]
    alert(selectedOption)
  };

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add option'
    } else if (this.state.options.indexOf(option) >-1) {
      return 'This option already exists'
    } 

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))

  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions} 
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}  
        />
        {
        /*
        <User 
          name="Mike"
          age={30}
        />
        */
        }
        
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision"
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What Should I Do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div> 
      <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.optionText) //must run function in order to get access to access props and event 
        }}
      >
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  //because we use "this" inside handleAddOption function below, we must bind it
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }))
    e.target.elements.option.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    )
  }
}

//stateless functional component (no access to "this")
//props gets passed in as first argument.  
//advantages: Faster than class based (no overhead, logic, etc),  Easier to read/write, easier to test
// const User = (props) => {
//     return (
//       <div>
//         <h3>Stateless Functional Component example</h3>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//       </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))