import React, { Component } from 'react'
import '../assets/stylesheet/css/style.css'

import ImageItem from '../components/ImageItem'

const dataArray = [
  {
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png',
    image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
    title: 'Motorcycle',
    time: '',
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,'
    + ' the motorcycle referred to in the mainland, Hong Kong and Southeast'
    + ' Asia known as motorcycles.',
    link: '',
    skill: '',
    team: '',
    selfTask: ''
  }
]


class App extends Component {
  state = {
    projects: dataArray
  }

  _fetchData = () => {

  }

  render() {
    const {
      projects
    } = this.state
    return (
      <section className="image-list">
        {projects.map(val => <ImageItem val={val} key={val.name} />)}
      </section>
    )
  }
}

export default App
