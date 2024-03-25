import React, { useEffect } from "react";
import { getCartData, setCartData } from "./services/cartService";
import { cartActions } from "./reducers/cartReducer";
import { useCart } from "./context/cartContext";

const Cart = () => {
	const { state, dispatch } = useCart();

	useEffect(() => {
		if (getCartData())
			dispatch({
				type: cartActions.INITIAL_CARTLIST,
				payload: {
					cart: getCartData(),
				},
			});
	}, []);

	useEffect(() => {
		setCartData(state);
	}, [state]);

	return (
		<div style={{ background: "grey" }}>
			{state.cartList?.map((el) => (
				<div key={el.id}>
					<h4>{JSON.stringify(el)}</h4>
					<button
						onClick={() =>
							dispatch({
								type: cartActions.REMOVE_FROM_CART,
								payload: {
									product: el,
								},
							})
						}
					>
						remove from cart
					</button>
				</div>
			))}{" "}
			<h1>{state.total}</h1>
			<button onClick={() => dispatch({ type: cartActions.CLEAR_CART })}>
				Clear cart
			</button>
		</div>
	);
};

export default Cart;
