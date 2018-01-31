import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieVideo = ({ profile }) =>
   <Video 
        	autoPlay='true' 
        	loop 
        	muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={profile.Poster}
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4" type="video/mp4" />
            <track src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4" default />
    </Video>;

const mapStateToProps = ({ movie: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(MovieVideo);