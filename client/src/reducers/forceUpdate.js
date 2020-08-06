const updateReducer = (state = false, action) => {
  switch (action.type) {
    case 'FORCEUPDATE':
      return !state
    default:
      return state;
  }
}

export default updateReducer