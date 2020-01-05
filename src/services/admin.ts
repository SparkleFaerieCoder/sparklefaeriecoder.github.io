import axios from 'axios';
import {auth} from './firebase-service';

export const getArticles = async (email, password) => {
  const token = await auth.currentUser.getIdToken();
  // return auth().signInWithEmailAndPassword(email, password);
  return axios.post('https://spf-blog-service.firebaseapp.com/articles', {headers:
  {authorization: `Bearer ${token}`}})
      .then((res) => res.data);
};


// export const getArticles = () => {
// const token = await auth.currentUser.getIdToken();

// return axios.get('https://your-api-url/articles', {headers:
//   { authorization: `Bearer ${token}` }})
//   .then(res => res.data);
// }
