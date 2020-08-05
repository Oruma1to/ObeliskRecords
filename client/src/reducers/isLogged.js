const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return action.payload
    case 'SIGNOUT':
      localStorage.removeItem('token')
      return null
    default:
      return state
  }
}

export default loggedReducer