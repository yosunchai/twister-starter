import React, { Component } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'
import config from '../config'
import Profile from './Profile'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Sunchai Pitakchonlasup',
      username: 'yo_appsynth',
      tweets: [],
      //   { id: 0, name: 'Supasate Choochaisri', username: 'kaizerwing', tweetText: 'Lorem Ipsum ...' },
      //   { id: 1, name: 'Arnupharp Viratanapanu', username: 'topscores', tweetText: 'Lorem Ipsum ...' },],
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }

  addToTweetList(tweet) {
    const tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length

    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ],
    })
  }

  componentDidMount() {
    const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
    const filter = `{ "where": { "username": "${this.state.username}" }}`

    fetch(`${uri}?filter=${filter}`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then((tweets) => {
        this.setState({
          tweets,
        })
      })
  }

  render() {
    const { name, username, tweets } = this.state

    return (
      <div className="container body">
        <div className="left-panel">
          <Profile
            name={name}
            username={username}
            numTweets={15}
            numFollowers={15}
            numFollowings={15}
            isOwnProfile
          />
        </div>
        <div className="main-panel">
          {this.props.enableTweet
          ? <NewTweet
            name={name}
            username={username}
            addToTweetList={this.addToTweetList}
          />
          : null}
          <TweetList tweets={this.state.tweets} />
        </div>
      </div>
    )
  }
}

export default MainPanel

