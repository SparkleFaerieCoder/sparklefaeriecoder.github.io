import * as firebase from 'firebase/app';
import 'firebase/auth';

const { env } = process;

const config = {
	apiKey: env.FIREBASE_API_KEY,
	authDomain: env.FB_AUTH,
	databaseURL: env.FB_DB,
	projectId: env.PID,
	storageBucket: env.FB_STORAGE,
	messagingSenderId: env.MSI,
	appId: env.APID,
	measurementId: env.MI,
};

firebase.initializeApp(config);

export const auth = firebase.auth;

export default firebase;
