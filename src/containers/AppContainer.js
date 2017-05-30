import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header title="前端技术清单"/>
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

