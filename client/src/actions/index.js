// actions for counter

export const increment = (num = 1) => {
  return {
    type:'INCREMENT',
    payload: num
  }
}

export const decrement = (num = 1) => {
  return {
    type: 'DECREMENT',
    payload: num
  }
}

// actions for isLogged

export const logIn = (user) => {
  return {
    type: 'SIGNIN',
    payload: user
  }
}

export const logOut = () => {
  return {
    type: 'SIGNOUT'
  }
}

// actions for shoppingCart 

export const addItem = (item) => {
  return {
    type: 'ADDITEM',
    payload: item 
  }
}

export const removeItem = (removalIndex) => {
  return {
    type: 'REMOVEITEM',
    payload: removalIndex
  }
}

export const incrementItem = (incrementIndex) => {
  return {
    type: 'INCREMENTITEM',
    payload: incrementIndex
  }
}

export const removeItemCompletely = (removalIndex) => {
  return {
    type: 'REMOVEITEMCOMPLETELY',
    payload: removalIndex
  }
}
