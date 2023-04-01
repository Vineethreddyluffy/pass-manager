import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import GetItem from './index2'

import './getpassword.css'

class GetPassword extends Component {
  state = {
    listOf: [],
    website: '',
    name: '',
    pass: '',
    searchInput: '',
    showPassOf: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({pass: event.target.value})
  }

  addItem = event => {
    event.preventDefault()
    const {website, name, pass} = this.state
    const newItem = {
      id: uuid(),
      web: website,
      username: name,
      password: pass,
    }
    this.setState(prevState => ({
      listOf: [...prevState.listOf, newItem],
    }))
  }

  deleteTheItem = props => {
    const {listOf} = this.state
    const newList = listOf.filter(each => each.id !== props)
    this.setState({listOf: newList})
  }

  searchOf = event => {
    this.setState({searchInput: event.target.value})
  }

  showPass = event => {
    this.setState({showPassOf: event.target.checked})
  }

  render() {
    const {listOf, searchInput, showPassOf} = this.state
    const count = listOf.length
    const searchResults = listOf.filter(each =>
      each.web.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const result = count === 0
    return (
      <div className="cont">
        <div className="inner-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="main-img"
          />
          <div className="upper-box">
            <form className="form-item" onSubmit={this.addItem}>
              <h1 className="main-head">Add New Password</h1>
              <div className="img-cont">
                <div className="img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="image"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="img-cont">
                <div className="img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="image"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="img-cont">
                <div className="img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="image"
                  />
                </div>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image2"
            />
          </div>
          <div className="lower-box">
            <div className="first-cont">
              <div className="count-cont">
                <h1 className="main-head">Your Passwords</h1>
                <p className="count-para">{count}</p>
              </div>
              <div className="img-cont">
                <div className="img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="image"
                  />
                </div>
                <input
                  type="search"
                  className="input"
                  placeholder="search"
                  onChange={this.searchOf}
                />
              </div>
            </div>
            <hr className="line" />
            <div className="second-cont">
              <input id="input" type="checkbox" onChange={this.showPass} />
              <label htmlFor="input" className="main-head">
                Show Passwords
              </label>
            </div>
            <div className="third-cont">
              {result ? (
                <div className="fourth-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="image4"
                  />
                  <p className="main-head">No Passwords</p>
                </div>
              ) : (
                <ul className="unordered-list">
                  {searchResults.map(each => (
                    <GetItem
                      key={each.id}
                      item={each}
                      deleteTheItem={this.deleteTheItem}
                      showPass={showPassOf}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GetPassword
