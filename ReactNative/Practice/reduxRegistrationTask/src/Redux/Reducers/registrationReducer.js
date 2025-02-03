// reducer for registration

// actiontypes
const ADD_USER = "registration/addUser"
const DELETE_USER = "registration/deleteUser"
const EDIT_USER = "registration/editUser"
const DISPLAY_DATA = "registration/display"

const initialState = {
    userDataArray:[]
}


// action creators
export function addUser(data) {
    // console.log("from submit data function -------> ", data)
    return { type: ADD_USER, payload:  data  }
}

export function deleteUser(userIndex) {
    // console.log("from delete data function -------> ", userIndex)
    return { type: DELETE_USER, payload: userIndex }
}

export function editUser(data, id) {
    console.log("from edit data function -------> ", data, id)
    return { type: EDIT_USER, payload:  {data, id}  }
}

export function displayData() {
    return { type: DISPLAY_DATA }
}

// reducer function
function registrationFormReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER : 
            return { ...state, userDataArray: [...state.userDataArray, action.payload] }
        case DELETE_USER :
            // return {...state, userDataArray: state.userDataArray.splice(action.payload, 1)} // not delete the last remaining in the array
            return { ...state, userDataArray: state.userDataArray.filter((_, index) => index !== action.payload) }
        case EDIT_USER : 
            return { ...state, userDataArray: state.userDataArray.map((item, index) => index === action.payload.id ? action.payload.data : item )}
        case DISPLAY_DATA :
            return state
        default : 
            return state
    }
}

export default registrationFormReducer

// sample for edit(to populate the data)

// const initialState = {
//     userDataArray: [],
//     userToEdit: null, // Holds the user data to populate in the form
// };

// // Action creators

// // ✅ New action to populate a user’s data for editing
// export function populateUser(index) {
//     return { type: POPULATE_USER, payload: index };
// }

// serDataArray: state.userDataArray.filter((_, index) => index !== action.payload) 
//             };
        
//         case EDIT_USER:
//             return { 
//                 ...state, 
//                 userDataArray: state.userDataArray.map((item, index) => 
//                     index === action.payload.id ? action.payload.data : item
//                 ),
//                 userToEdit: null // Clear after editing
//             };

//                 // ✅ New case to populate user data for editing
//         case POPULATE_USER:
//             return { 
//                 ...state, 
//                 userToEdit: state.userDataArray[action.payload] 
//             };
        
