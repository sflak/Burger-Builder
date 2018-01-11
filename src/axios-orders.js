import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-637fd.firebaseio.com/'
});

export default instance;
