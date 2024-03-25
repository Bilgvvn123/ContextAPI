export const filterActions = {
	INITIAL_PRODUCT_LIST: "INITIAL_PRODUCT_LIST",
	SORT_BY: "SORT_BY",
	RATING: "RATING",
	IN_STOCK: "IN_STOCK",
	BEST_SELLER: "BEST_SELLER",
};

export const filterReducer = (state, action) => {
	const { type, payload } = action;

	console.log(action);

	switch (type) {
		case filterActions.INITIAL_PRODUCT_LIST:
			return { ...state, products: payload.products };

		case filterActions.BEST_SELLER:
			return { ...state, bestSeller: !payload.bestSeller };

		case filterActions.IN_STOCK:
			return { ...state, inStock: !payload.inStock };

		case filterActions.SORT_BY:
			return { ...state, sortBy: payload.sortBy };

		case filterActions.RATING:
			return { ...state, rating: payload.rating };
	}
};
