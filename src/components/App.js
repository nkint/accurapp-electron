import React from 'react'
import { observable } from 'mobx'

export default class App extends React.Component {
  @observable title = ''

  render() {
    return (
      <div>
        <h2 style={{ fontFamily: 'Berthold' }}>
          Accurapp on electron
        </h2>
        <p>
          To get started, edit <code>components/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
