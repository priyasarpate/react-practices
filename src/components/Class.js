import React, { Component } from 'react'

export class Class extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count+5
        })
    }


  render() {
    return (
      <div>
        <button onClick={this.increamentCount}>count: {this.state.count}</button>
      </div>
    )
  }
}

export default Class