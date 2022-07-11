import './App.css'
import {Component} from 'react'
import BrowserList from './Components/BrowserList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class userBrowserList extends Component {
  state = {searchInput: '', userList: initialHistoryList}

  InputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  onclicking = id => {
    const result = initialHistoryList.filter(each => each.id !== id)
    this.setState({userList: result})
  }

  render() {
    const {searchInput} = this.state
    const {userList} = this.state
    const filterResult = userList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )
    return (
      <div>
        <div className="headerSection">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>

          <div className="arrange">
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchImg"
              />
            </div>
            <input
              type="search"
              value={searchInput}
              placeholder="Search history"
              onChange={this.InputValue}
            />
          </div>
        </div>
        <div className="bottomHeader">
          <div className="shadowBorder">
            {filterResult.length > 0 ? (
              <ul>
                {filterResult.map(each => (
                  <BrowserList
                    initialHistoryList={each}
                    key={each.id}
                    onclicking={this.onclicking}
                  />
                ))}
              </ul>
            ) : (
              <p className="textPara">There is no history to show</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default userBrowserList
