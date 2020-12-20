const create_note = (state, note) => {
  return note !== "" ? state.notes.push(note) : null;
};
const delete_note = (state, id) => {
  state.notes = state.notes.filter(note => note.id !== id);
};
const editorModal = (state, note) => {
  state.dialog = true;
  return (state.singleNote = note);
};
const hideModal = state => {
  state.dialog = false;
  return (state.singleNote = null);
};
const showError = state => {
  state.alertNoteError = true;
};
const hideError = state => {
  state.alertNoteError = false;
};
const hideGreetingAlert = state => {
  if (state.notes.length === null) state.greetingAlert = false;
};

export default {
  create_note,
  delete_note,
  hideModal,
  showError,
  hideError,
  hideGreetingAlert,
  editorModal
};
