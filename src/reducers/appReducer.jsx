export const initialState = {
  isLoggedIn: false,
  showLoginModal: false,
  username: "",
  token: "",
  error: "",
  students: [],
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.user.username,
        token: action.payload.user.token,
        showLoginModal: false,
        students: action.payload.students,
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload.newStudent],
      };
    case "SHOW_LOGIN_MODAL":
      return { ...state, showLoginModal: true };
    case "LOGOUT":
      return {
        initialState,
      };
    default:
      return state;
  }
};
