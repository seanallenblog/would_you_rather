export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function logoutUser (id) {
  return {
    type: LOGOUT_USER,
    id
  }
}

export function handleLogin (id) {
  return (dispatch) => {
    return dispatch(setAuthedUser(id));
  }
}

export function handleLogout (id) {
  return (dispatch) => {
    return dispatch(logoutUser(id));
  }
}
