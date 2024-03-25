export const cartActions = {
	INITIAL_CARTLIST: "INITIAL_CARTLIST",
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	CLEAR_CART: "CLEAR_CART",
};

export const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case cartActions.INITIAL_CARTLIST:
			return payload.cart;

		case cartActions.ADD_TO_CART:
			const updatedCartList = [...state.cartList, payload.product];
			const newTotal = updatedCartList.reduce((a, b) => {
				return a + b.price;
			}, 0);
			return { ...state, cartList: updatedCartList, total: newTotal };

		case cartActions.REMOVE_FROM_CART:
			const reducedCarList = state.cartList.filter(
				(el) => el.id !== payload.product.id
			);
			const reducedTotal = reducedCarList.reduce((a, b) => {
				return a + b.price;
			}, 0);
			return { ...state, cartList: reducedCarList, total: reducedTotal };

		case cartActions.CLEAR_CART:
			return { cartList: [], total: 0 };

		default:
			return state;
	}
};
