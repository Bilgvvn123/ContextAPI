import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {
	cartList: [],
	total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const value = { state, dispatch };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	return context;
};
