import React, { PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileFollow from './ProfileFollow'
import ProfileDetail from './ProfileDetail'

const Profile = (props) => (
  <div className="profile">
  <ProfileHeader
      name={props.name}
      username={props.username}
    />
  <ProfileDetail
      numTweets={props.numTweets}
      numFollowers={props.numFollowers}
      numFollowings={props.numFollowings}
    />
  { props.isOwnProfile
        ? null
   : <ProfileFollow
     isFollowing={props.isFollowing}
     handleToggleFollow={props.toggleFollow}
   /> }
</div>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numTweets: PropTypes.string.isRequired,
  numFollowers: PropTypes.string.isRequired,
  numFollowings: PropTypes.string.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  isFollowing: PropTypes.string.isRequired,
  //toggleFollow: PropTypes.func.isRequired,
}

export default Profile
