import React, { Component } from 'react'
import Navbar from './Modules/Navbar'
import News from './Modules/News'
import Footer from './Modules/Footer'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News title="Explore thrilling news!"/>
        <Footer name="Mohammed Puthawala"/>
      </>
    )
  }
}

export default App