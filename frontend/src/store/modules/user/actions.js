export function userUpdateRequest(data) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: { data },
  };
}

export function userUpdateSuccess(profile) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { profile },
  };
}
