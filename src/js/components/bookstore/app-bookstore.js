import React from 'react';
import AppStore from '../../stores/app-store.js';
import BookStoreItem from './app-bookstore-item';
import AppActions from '../../actions/app-actions'
import { Link } from 'react-router';
import NotFound from '../layout/app-not-found';
import SubHeader from '../layout/app-sub-header.js';

export class BookStore extends React.Component {
  constructor(){
    super();
    this.state = {};

    AppStore.getBooks()
    .then((res) => {
      this.setState({
        items: res
      });
    })
    .catch((res) => {
      console.error('constructor', res);
    });

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    AppStore.addChangeListener(this._onChange)
  }

  componentWillUnmount(){
    AppStore.addChangeListener(this._onChange)
  }

  _onChange(){
    this.setState(stateCallback(this.props))
  }

  render(){

    if (this.state.items) {

      var books = this.state.items.map(item => {
        return <BookStoreItem key={item.id} item={item} />;
      });

      return (
        <div>
          <SubHeader txt="Free Book" />
          <div className="container">
            <div className="row">
              {books}
            </div>
          </div>
        </div>
      );

    }else{
      return (
        <NotFound txt="Books Not Found" />
      );
    }
  }
}

export default BookStore;
