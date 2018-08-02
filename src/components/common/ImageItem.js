import React, {Component} from 'react'

class ImageItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smallImageLoaded: false,
      largeImageLoaded: false
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    // remove any timers or listeners created in lifespan of the component
  }

  onSmallImageLoad = () => {
    this.setState({
      smallImageLoaded: true
    })
  }

  onLargeImageLoad = () => {
    this.setState({
      largeImageLoaded: true
    })
  }

  render() {
    const {
      val
    } = this.props

    const {
      smallImageLoaded,
      largeImageLoaded
    } = this.state

    return (
      <div className="item" key={val.id} onClick={this.props.onClick}>
        <div className="placeholder">
          <img
            src={val.thumbnail}
            className={'img-small' + (smallImageLoaded ? ' loaded' : '')}
            onLoad={this.onSmallImageLoad}
            alt={val.text}
          />
          <div className="inner"/>
          <img
            src={val.image}
            className={(largeImageLoaded ? ' loaded' : '')}
            onLoad={this.onLargeImageLoad}
            alt={val.text}
          />
        </div>
      </div>)
  }
}

export default ImageItem
