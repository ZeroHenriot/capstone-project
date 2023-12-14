const initialState = {
  isAuthenticated: false,
  role: null,
  username: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { role, username, ...restUserData } = action.payload
      return {
        ...state,
        isAuthenticated: true,
        role: role,
        username: username,
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false,
        role: null,
        username: null,
      }
    default:
      return state
  }
}

export default authReducer
