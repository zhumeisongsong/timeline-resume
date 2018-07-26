import React, {Component} from 'react'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      largeImageLoaded: false
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //remove any timers or listeners created in lifespan of the component
  }

  onLargeImageLoad = (el) => {
    this.setState({
      largeImageLoaded: true
    })
  }

  onSmallImageLoad = (el) => {
    // elel.classList.add('loaded');
  }

  render() {
    const {
      val,
      index
    } = this.props
    return (
      <div className="item" key={index}>
        <div className="placeholder">
          <img src="https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png" className="img-small"
               onLoad={(el) => this.onSmallImageLoad(el)}
               alt={val.text}/>
          <div className="inner"/>
          {this.state.largeImageLoaded &&
          <img onLoad={this.onLargeImageLoad(this)}
               src={val.image} alt={val.text}/>
          }
        </div>
      </div>
    )
  }
}

export default  Projects