import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions'
import { Link } from 'react-router';
import NotFound from '../layout/app-not-found';
import SubHeader from '../layout/app-sub-header.js';

export class BookStoreDetail extends React.Component {
  constructor(props){
    super(props);
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

  render(props){
    if(this.state.items && this.props.params.item) {

      let book = this.state.items.find(item => {
        if (item.slug === this.props.params.item) {
          console.log(item);
          return item;
        }else{
          return false;
        }
      });

      return (
        <div>
          <SubHeader txt={book.title} />
          <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div className="book-detail">
                <img src={book.largeImage} alt={book.title} />
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <NotFound txt="Book Not Found"/>
      )
    }
  }
}

export default BookStoreDetail;
