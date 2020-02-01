import React, { Component } from 'react';
import { Routes } from './router';
import { updateFocus } from 'react-navigation-is-focused-hoc'

export default class Little_Sparta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes
        onNavigationStateChange={(prevState, currentState) => {
          updateFocus(currentState) // update HOC state
        }}
      />
    )
  }
}
