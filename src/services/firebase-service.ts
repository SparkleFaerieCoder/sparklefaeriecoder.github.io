import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCgqj_1mWK0ZqKhqYKF_PbYiFGc2fI38aY',
  authDomain: 'spf-blog-service.firebaseapp.com',
  databaseURL: 'https://spf-blog-service.firebaseio.com',
  projectId: 'spf-blog-service',
  storageBucket: 'spf-blog-service.appspot.com',
  messagingSenderId: '503763428128',
  appId: '1:503763428128:web:4c9b491922499760162d45',
  measurementId: 'G-27E8CGG6XE',
};

firebase.initializeApp(config);

export const auth = firebase.auth;

export default firebase;
