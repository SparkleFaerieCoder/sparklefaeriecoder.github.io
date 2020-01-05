import { auth } from './firebase-service'
import axios from 'axios'

export const getArticles = async () => {
const token = await auth.currentUser.getIdToken();
return axios.get('https://spf-blog-service.firebaseapp.com/articles', {headers:  
  { authorization: `Bearer ${token}` }})
  .then(res => res.data);

}