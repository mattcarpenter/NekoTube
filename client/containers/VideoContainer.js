import React from 'react'
import { connect } from 'react-redux'
import { Video } from '../components'
import { fetchVideo, fetchVideoSuccess, fetchVideoFailure } from '../actions/videos'
import { setPlayerState } from '../actions/player'
import { VIDEO_STATE_LOADED } from '../actions/videos'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', state);
  return {
    videoId: ownProps.params.videoId,
    videoData: state.video.data,
    playerState: state.player.state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVideo: (videoId) => {
      dispatch(fetchVideo(videoId)).then((response) => {
        !response.error ? dispatch(fetchVideoSuccess(response.payload)) : dispatch(fetchVideoFailure(response.payload));
      });
    },

    onVideoStateChange: (state) => {
      dispatch(setPlayerState(state));
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
