const shoppingCart = (state = [], action) => { 
  // shopping cart holds objects in the form of:
  // { album, amount }
  // so the amount can be used to add, remove, or change price 
  switch (action.type) {
    case 'ADDITEM':
      // try to find if item is already in cart 
      // if not, create new object and add it 

      console.log('reducer - shoppingCart - payload: ', action.payload)

      let foundAlbum = false 

      // i used a for loop so i can break the loop if i find a match 
      for (let i = 0; i < state.length; i++) {
        const item = state[i]
        if (item.album._id === action.payload._id) {
          // if _id matches it must be the same database item 
          foundAlbum = true 
          item.amount += 1
          break
        }
      }

      if (!foundAlbum) {
        state.push({
          album: action.payload,
          amount: 1
        })
      } 

      console.log(state)

      return state
    case 'REMOVEITEM':
      // try to find if item is already in cart 
      // if amount is 1, remove it 
      // if amount is greater than 1, decrement it 

      console.log('reducer - shoppingCart - payload: ', action.payload)

      const item = state[action.payload]

      if (item.amount > 1) {
        item.amount -= 1
      } else {
        state.splice(action.payload, 1)
      }
      
      return state 
    default:
      return state 
  }
}

export default shoppingCart