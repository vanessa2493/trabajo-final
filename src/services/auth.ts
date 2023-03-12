import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithCustomToken
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig ={
    apiKey: "AIzaSyAekPyTLVZ_sfmMG3Jwow7NLM3AsE0NRbY",
    databaseURL: "https://conectadas-app-default-rtdb.firebaseio.com",
    projectId: "conectadas-app",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// Export the authentication service functions
export const authService = {
    // Sign up with email and password
    signup: async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    // Log in with email and password
    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    // Log out the current user
    logout: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    },

    // Get the current user
    getCurrentUser: () => {
        return auth.currentUser;
    },

    // Set up a listener for auth state changes
    onAuthStateChanged: (callback: (user: User | null) => void) => {
        return onAuthStateChanged(auth, callback);
    },

    // Send a password reset email
    forgotPassword: async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw error;
        }
    },

    // Log in with a token
    loginWithToken: async (token: string) => {
        try {
            const userCredential = await signInWithCustomToken(auth, token);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    }
};
