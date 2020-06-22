import React from 'react'

export default class Demo5 extends React.Component {
  state = {
    count: 0,
    name: 'keith'
  }

  componentDidMount() {
    document.title = `you clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('触发')
      document.title = `you clicked ${this.state.count} times`
    }
  }

  clickCountHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  clickNameHandler = () => {
    this.setState({
      name: 'keith-i'
    })
  }

  render() {
    return(
      <div>
        <p>
          {
            document.title = `you clicked ${this.state.count} times`
          }
          {
            this.state.name
          }
        </p>
        <button onClick={this.clickCountHandler}>click me</button>
        <button onClick={this.clickNameHandler}>click me</button>
      </div>
    )
  }
}