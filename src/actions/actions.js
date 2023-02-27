export const getUsers = () => {
  return (dispatch) => {
    return dispatch({
      type: "GET_USERS",
      payload: null
    });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    return dispatch({
      type: "ADD_USER",
      payload: data
    });
  };
};

export const editUser = (updatedData) => {
  return (dispatch) => {
    return dispatch({
      type: "EDIT_USER",
      payload: updatedData
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "DELETE_USER",
      payload: id
    });
  };
};

export const sortUser = (sortedData) => {
  return (dispatch) => {
    return dispatch({
      type: "SORT_USER",
      payload: sortedData
    });
  };
};
