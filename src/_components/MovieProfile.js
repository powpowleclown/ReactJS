import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieProfile = ({ profile }) =>
  <div id='character-profile' className='col-md-6'>
    <h1>Profile</h1>
    {profile.Title && <p>Title: {profile.Title}</p>}
    {profile.Year && <p>Year: {profile.Year}</p>}
    {profile.Plot && <p>Plot: {profile.Plot}</p>}
    {profile.Poster && <Link to="/movievideo" className="btn btn-link"><img src={profile.Poster} /></Link>}
  </div>;

const mapStateToProps = ({ movie: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(MovieProfile);
