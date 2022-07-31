import {Component} from 'react'
import './index.css'

class BrowserHistory extends Component {
  render() {
    return (
      <div className="bg">
        <div className="searchRow">
          <h1 className="heading">History</h1>
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="domain logo"
              className="searchImg"
            />
            <input type="search" placeholder="search" className="input" />
          </div>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
