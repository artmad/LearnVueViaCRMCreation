import firebase from 'firebase/app';
import { register } from 'register-service-worker';


export default {
    actions: {
        async login({ dispatch, commit }, { email, password }) {
            commit('setLoading', true);
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (ex) {
                commit('setError', ex);
                throw ex;
            } finally {
                commit('setLoading', false);
            }
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill: 1000,
                    name
                });
            } catch (ex) {
                commit('setError', ex);
                throw ex;
            }
        },
        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },
        async logout({ dispatch, commit }) {
            await firebase.auth().signOut();
        }
    }
}