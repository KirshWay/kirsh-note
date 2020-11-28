import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    dialog: false,
    alertNoteError: false,
    greetingAlert: true,
  },
  getters: {
    allNotes: (state) => state.notes,
  },
  actions: {
    createNewNote({ commit }, note) {
      commit('create_note', note);
    },
    deleteNote({ commit }, id) {
      commit('delete_note', id);
    },
  },
  mutations: {
    create_note(state, note) {
      return note !== '' ? state.notes.push(note) : null;
    },
    delete_note(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
    showModal(state) {
      state.dialog = true;
    },
    hideModal(state) {
      state.dialog = false;
    },
    showError(state) {
      state.alertNoteError = true;
    },
    hideError(state) {
      state.alertNoteError = false;
    },
    hideGreetingAlert(state) {
      if (state.notes.length === null) {
        state.greetingAlert = false;
      }
    },
  },
});
