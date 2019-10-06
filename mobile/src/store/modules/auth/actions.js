export function authSignInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function authSignInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function authSignUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function authSignUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function authSignOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
