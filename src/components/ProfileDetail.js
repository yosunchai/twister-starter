import React, { PropTypes } from 'react'

const ProfileDetail = ({ numTweets, numFollowers, numFollowings }) => (
  <div className="detail">
    <div className="name">Tweet { numTweets }</div>
    <div className="screen-name">Followers { numFollowers }</div>
    <div className="tweet-text">Followings { numFollowings }</div>
  </div>
)

ProfileDetail.propTypes = {
  numTweets: PropTypes.string.isRequired,
  numFollowers: PropTypes.string.isRequired,
  numFollowings: PropTypes.string.isRequired,
}

export default ProfileDetail
