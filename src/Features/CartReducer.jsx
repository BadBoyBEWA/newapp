
const cartReducer = (state, action) =>{
    switch (action.type) {
        case 'Add':
            return [...state, action.item];
          
        case 'Remove':

        case 'Increase':
                   
        case 'Decrease':

        default:

        return state;
    }
}

export default cartReducer;