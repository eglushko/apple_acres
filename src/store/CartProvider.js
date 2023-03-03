import { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
    cartItems: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    let updatedItems = state.cartItems;
    let updatedTotalAmount = state.totalAmount;
    if (action.type === 'ADD') {
        const itemInCartIndex = state.cartItems.findIndex(item => item.id === action.item.id);
        const itemInCart = state.cartItems[itemInCartIndex];
        updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
        if (itemInCart) {
            const updatedItem = {
                ...itemInCart,
                quantity: itemInCart.quantity + action.item.quantity
            }
            updatedItems[itemInCartIndex] = updatedItem;
        }
        else {
            updatedItems = state.cartItems.concat(action.item);
        }
    }
    else if (action.type === 'REMOVE') {
        // const removedAmount = action.item.price * action.item.quantity;
        // const actionItemId = action.item ? action.item.id : action.id;
        console.log(state);
        console.log(action.itemId);
        const itemInCartIndex = state.cartItems.findIndex(item => item.id === action.itemId);
        console.log(itemInCartIndex);
        const itemInCart = state.cartItems[itemInCartIndex];
        console.log(itemInCart);
        updatedTotalAmount = state.totalAmount - itemInCart.price * action.quantity;
        console.log(action);
        console.log(itemInCart);
        if (itemInCart.quantity === action.quantity) {
            updatedItems = state.cartItems.filter(item => item.id !== action.itemId);
        }
        else {
            const updatedItem = { ...itemInCart, quantity: itemInCart.quantity - 1}
            updatedItems[itemInCartIndex] = updatedItem;
        }

    }
    return {
        cartItems: updatedItems,
        totalAmount: updatedTotalAmount
    }
};

const CartProvider = (props) => {
    const [cartState, sendCartAction] = useReducer(cartReducer, initialCartState);
    const addItemToCartHandler = (item) => {
        sendCartAction({type: 'ADD', item: item});
    };
    const removeItemFromCartHandler = (itemId, itemQuantity) => {
        sendCartAction({type: 'REMOVE', itemId: itemId, quantity: itemQuantity});
    };

    const cartContext = {
        cartItems: cartState.cartItems,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler    
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
