import {Component, Children} from 'react'

class LocaleProvider extends Component {
  getChildContext() {
    return {
      locale: {
        ...this.props.locale
      }
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}

export default LocaleProvider