const WISHLIST_ADD_ITEM = 'wishlist/addItem'
const WISHLIST_REMOVE_ITEM = 'wishlist/removeItem'

export function wishlistAddItem(productId){
    return {type: WISHLIST_ADD_ITEM, payload: {productId}}
}
export function wishlistRemoveItem(productId){
    return {type: WISHLIST_REMOVE_ITEM, payload: {productId}}
}

export default function(state = [], action){
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            return  [...state, action.payload]

        case WISHLIST_REMOVE_ITEM:
            return  state.filter( wishlistItem => wishlistItem.productId !== action.payload.productId);
            
       default:
        return state;
    }    
        
}