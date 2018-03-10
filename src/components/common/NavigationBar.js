import React, { Component } from 'react'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <i className="material-icons md-light">dashboard</i><a className="navbar-brand ml-3 pt-2" href="#">d3 dashboard</a>
      </nav>
    )
  }
}

export default NavigationBar
