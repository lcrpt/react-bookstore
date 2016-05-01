import axios from 'axios';

const BookAPI = {

  getApiBooks(){
    return axios.get('https://api.glose.com/v1/booklists/free-books')
    .then((res) => {
      return res.data.modules[0][1].books;
    })
    .catch((res) => {
      console.error('catch', res);
    })
  }
}

export default BookAPI;
