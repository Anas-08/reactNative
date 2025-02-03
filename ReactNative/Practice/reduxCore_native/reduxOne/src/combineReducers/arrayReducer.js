// action type
const CHANGE_SINGLE_DIGIT_TO_TWO = 'ChangeSingleDigitToTwo'
const GET_VALUES = 'getValues'

// action function creator
export function ChangeSingleDigitToTwo(array){
    // console.log(array)
    let flatArray = array.flat()
    const updatedArr = flatArray.map((item) => item >=0 && item <=9 ? 10 :item)
    return {
        type: CHANGE_SINGLE_DIGIT_TO_TWO, 
        payload: updatedArr
    }
}
export function getValues(){
    return {
        type: GET_VALUES, 
    }
}

// reducer function
export default function(state = [], action){
    switch (action.type) {
        case CHANGE_SINGLE_DIGIT_TO_TWO:
            return [...state, ...action.payload ];
        case GET_VALUES:
            return state

        default : 
            return state
    }    

}