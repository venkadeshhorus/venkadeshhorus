
const initialState = {
    users: [],
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user],
            };
        case "REMOVE_USERS":
            return {
                users: [], //empty array values passing for clear values 
            };
        default://default state mandatory for switch & retun initial state 
            return state;
    }


};

export default userReducer;

//...state.users initial state add into users via spread operator ... into array
//action.users after action sending the user object geting into users array 