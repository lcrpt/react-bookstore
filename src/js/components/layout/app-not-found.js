import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div className="row">
      <div className="jumbotron">
        <h3>{props.txt}</h3>
      </div>
    </div>
  )
}
