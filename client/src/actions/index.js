// actions for forcing update on redux 

export const reduxForceUpdate = () => {
  return {
    type:'FORCEUPDATE'
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
