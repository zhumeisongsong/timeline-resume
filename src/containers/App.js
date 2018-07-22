import React, {Component} from 'react'
import Projects from '../components/Projects'
import '../assets/stylesheet/css/style.css'

class App extends Component {
  state = {
    projects: []
  }
  _fetchData = () => {

  }

  render() {
    const {
      projects
    } = this.state
    return (
      <Projects data={projects}/>
    )
  }
}

export default App
