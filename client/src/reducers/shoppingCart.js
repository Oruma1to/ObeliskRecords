const shoppingCart = (state = [], action) => {
  switch (action.type) {
    case 'ADDITEM':
      state.push(action.payload)
      return state
    case 'REMOVEITEM':
      state.splice(action.payload, 1)
      return state 
    default:
      return state 
  }
}

export default shoppingCart