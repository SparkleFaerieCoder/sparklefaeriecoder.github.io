import {auth} from './firebase-service';

export const loginUser = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
  // return axios.post('https://spf-blog-service.firebaseapp.com/articles', {email, password})
  //     .then((res) => res.data);
};

