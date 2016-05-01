import React from 'react';
import AppActions from '../../actions/app-actions.js';
import { Link } from 'react-router';

export default (props) => {
  console.log('props --- ', props);
  const subTitle = props.item.shortTitle.substring(0, 20);

  return (
    <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
      <div className="book-item">
        <Link to={`/book/${props.item.slug}`}>
          <img src={props.item.mediumImage} alt={props.item.title} />
          <div className="caption">
            <p>
              <strong>{subTitle}</strong>
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
