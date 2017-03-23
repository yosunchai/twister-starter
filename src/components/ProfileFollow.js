import React, { PropTypes } from 'react'

const ProfileFollow = ({ isFollowing }) => (
  <div className="last-section">
    <input
      type="button"
      className="btn btn-default"
      value={isFollowing ? 'Unfollow' : 'Follow'}
    />
  </div>
)

ProfileFollow.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
}


export default ProfileFollow
