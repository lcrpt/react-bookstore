import {dispatch, register} from '../dispatchers/app-dispatcher';
import {EventEmitter} from 'events';
import AppConstants from '../constants/app-constants';
import BookAPI from '../api/BookAPI';
import axios from 'axios';

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getBooks(){
    return BookAPI.getApiBooks()
    .then((res) => {
      return res;
    })
    .catch((res) => {
      console.error('AppStore Error getBooks', res);
    });
  },

  dispatcherIndex: register(function(action){
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        BookAPI.addItem(action.item);
        break;
      case AppConstants.REMOVE_ITEM:
        BookAPI.removeItem(action.item);
        break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
