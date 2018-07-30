import React, {Component} from 'react'
import keyIndex from 'react-key-index'
import '../assets/stylesheet/css/style.css'
import ImageItem from '../components/ImageItem'

let dataArray = [
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

dataArray = keyIndex(dataArray, 1)


class App extends Component {
  state = {
    lang: 'en-US',
    projects: dataArray
  }

  _fetchData = () => {

  }


  render() {
    const {
      projects
    } = this.state

    return (
      <div>
        <div style={{ margin: 10 }}>
          <p><a href="index.html">中文</a></p>
          <p><a href="index-en.html">english</a></p>
        </div>
        <section className="image-list">
          {projects.map(val => <ImageItem val={val} key={val.id}/>)}
        </section>
      </div>
    )
  }
}

export default App
