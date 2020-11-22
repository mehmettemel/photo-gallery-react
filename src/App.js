import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BlogProvider from './context/BlogProvider'
import Home from './pages/Home'
import Post from './pages/Post'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BlogProvider>
      <div className='App'>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/:postId' exact component={Post}></Route>
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  )
}

export default App
