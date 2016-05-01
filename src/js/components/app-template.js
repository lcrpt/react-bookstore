import React from 'react';
import Header from './layout/app-header';

export default (props) => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}
