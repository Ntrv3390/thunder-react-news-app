import React from 'react'
import Navbar from './Modules/Navbar'
import News from './Modules/News'
import Footer from './Modules/Footer'
import { BrowserRouter as Router, 
        Routes,
        Route
        } from 'react-router-dom'

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
    return (
      <>
        <Navbar/>
        <Router>
          <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key="home" title="Top Thrilling News!" country="in" category="general" pageSize={pageSize}/>} />
          <Route exact path="/business"  element={<News apiKey={apiKey} key="business" title="Thrilling Business News!" country="in" category="business" pageSize={pageSize}/>}/>
          <Route exact path="/entertainment"  element={<News apiKey={apiKey} key="entertainment" title="Thrilling Entertainment News!" country="in" category="entertainment" pageSize={pageSize}/>}/>
          <Route exact path="/general"  element={<News apiKey={apiKey} key="general" title="Thrilling News!" country="in" category="general" pageSize={pageSize}/>} />
          <Route exact path="/health"  element={<News apiKey={apiKey} key="health" title="Thrilling Health News!" country="in" category="health" pageSize={pageSize}/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} key="science" title="Thrilling Science News!" country="in" category="science" pageSize={pageSize}/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" title="Thrilling Sports News!" country="in" category="sports" pageSize={pageSize}/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" title="Thrilling Technology News!" country="in" category="technology" pageSize={pageSize}/>}/>
        </Routes>
        </Router>
        <Footer name="Mohammed Puthawala"/>
      </>
    )
  }

export default App