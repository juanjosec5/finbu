import { auth } from './app'
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth'
import { loginState, userEmail } from '../store';

class FirebaseAuth{
    constructor() {
        // this.loginCb = null;
        // this.logoutCb = null;

        onAuthStateChanged(auth, (creds) => {
            loginState.set(creds !== null);
            console.log('logged? ', creds);
            userEmail.set(creds?.email || '');
            // if (this.loginCb && creds) {
            //     this.loginCb(creds)
            // }

            // if (this.logoutCb &&!creds) {
            //     this.logoutCb()
            // }
        });
    }

    // onLogin(callback) {
    //     this.loginCb = callback;
    // }

    // onLogout(callback) {
    //     this.logoutCb = callback;
    // }

    onLoginError({code}) {
        switch (code) {
            case 'auth/invalid-email':
                console.log('invalid email');
                break;

            case 'auth/internal-error':
                console.log('missing password wtf');
                break;

            case 'auth/user-not-found':
                console.log('you dont exist in our db');
                break;

            case 'auth/wrong-password':
                console.log('try again, punk');
                break;

            case 'auth/too-many-requests':
                console.log('give me a second, geez');
                break;

            default:
                console.log('unknown error', code);
                break;
        }
    }

    async emailLogin(email, pass) {
        const user = await signInWithEmailAndPassword(auth, email, pass).catch(this.onLoginError);
    }

    async googleLogin() {
        const user = await signInWithPopup(auth, new GoogleAuthProvider()).catch(this.onLoginError);
    }

    signOut() {
        void signOut(auth);
    }
}

export default new FirebaseAuth();