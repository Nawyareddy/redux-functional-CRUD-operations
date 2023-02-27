const initialState = {
  personDetails: [
    { name: "Raju", id: 1, age: 25, gender: "male" },
    { name: "John", id: 2, age: 27, gender: "male" },
    { name: "Kevin", id: 3, age: 29, gender: "male" },
    { name: "Karishma", id: 4, age: 25, gender: "female" },
    { name: "Raveena", id: 5, age: 24, gender: "female" }
  ]
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state };

    case "ADD_USER":
      return {
        ...state,
        personDetails: [...state.personDetails, action.payload]
      };

    case "EDIT_USER":
      let user = state.personDetails.findIndex(
        (person) => person.id === action.payload.id
      );
      state.personDetails.splice(user, 1, action.payload);
      return state;

    case "DELETE_USER":
      return {
        ...state,
        personDetails: state.personDetails.filter(
          (person) => person.id !== action.payload
        )
      };

    case "SORT_USER":
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
