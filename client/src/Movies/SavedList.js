import React from 'react';
import { Link, useHistory } from "react-router-dom";

const SavedList = props => {
  const history = useHistory();

  const goHome = () => history.push("/")
  

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    
    <div onClick={goHome} className="home-button">Home</div>
    
  </div>
  )
};

export default SavedList;
