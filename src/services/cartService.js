export const getCartData = () => {
	if (!localStorage["cart"]) return null;

	const cartData = JSON.parse(localStorage["cart"]);
	return cartData;
};

export const setCartData = (cartData) => {
	if (!localStorage["cart"]) localStorage["cart"] = JSON.stringify(cartData);
	else localStorage["cart"] = JSON.stringify(cartData);
};
