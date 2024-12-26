export const totalItem=(cart) => {
    const total = cart.reduce((sum, product) => sum + product.quantity, 0);
    return total;
}

export const totalPrice=(cart) => {
    const total = cart.reduce((total, product) => total + product.quantity * product.price, 0);
    return total;
}

const cartReducer = (state, action) =>{
    switch (action.type) {
        case 'Add':
            return [...state, action.product];
          
        case 'Remove':
            return state.filter((item) => item.id !== action.id);

        case 'Increase':
            const IndexI = state.findIndex(p => p.id === action.id)
            state[IndexI].quantity += 1
            return[...state];

        case 'Decrease':
            const IndexD = state.findIndex((item) => item.id === action.id)
            state[IndexD].quantity -= 1;
            return[...state];

        default: return state;
    }
}

export default cartReducer;