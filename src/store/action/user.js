export const addUser = (user) =>{
    return{
        type: "ADD_USER", //action
        user: user //payload: payload which contains the data we need to pass to the reducers

    }
} 

export const removeUsers = () => {
    return {
      type: "REMOVE_USERS",
    };
  };