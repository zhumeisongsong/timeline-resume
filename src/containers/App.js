import React, {Component} from 'react'
import Projects from '../components/Projects'
import '../assets/stylesheet/css/style.css'
import ImageItem from "../components/ImageItem";

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
  ' Asia known as motorcycles.',
  title: 'Motorcycle',
}
let dataArray = [
  {image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png'},
  {image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png'},
]

dataArray = dataArray.map(item => ({...item, ...textData}))

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
        {}
        {projects.map((val, index) => <ImageItem val={val} index={index}/>)}
      </section>
    )
  }
}

export default App
