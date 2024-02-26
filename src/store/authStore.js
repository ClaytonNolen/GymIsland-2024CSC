import {writable} from "svelte/store";
import {auth} from "../lib/firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth";

export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    login: async (email,password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    signup: async (email,password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    resetPassword: async (email) => {
        if (!email) {
            return
        }
        await sendPasswordResetEmail(auth, email)
    },
    changePassword: async (password) => {
        await updatePassword(auth.currentUser, password)
    }
}


