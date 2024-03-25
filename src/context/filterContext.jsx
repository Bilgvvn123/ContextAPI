import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const initialState = {
	products: [],
	sortBy: null,
	rating: null,
	bestSeller: false,
	inStock: false,
};

const FilterContext = createContext(initialState);

export const FilterProvider = ({ children }) => {
	const [state, dispatch1] = useReducer(filterReducer, initialState);
	console.log(state);

	const bestSeller = (products) => {
		return state.bestSeller
			? products.filter((el) => el.bestSeller === true)
			: products;
	};
	const inStock = (products) => {
		return state.inStock
			? products.filter((el) => el.inStock === true)
			: products;
	};

	const rating = (products) => {
		if (state.rating === "4STARABOVE")
			return products.filter((el) => el.rating >= 4);
		if (state.rating === "3STARABOVE")
			return products.filter((el) => el.rating >= 3);
		if (state.rating === "2STARABOVE")
			return products.filter((el) => el.rating >= 2);
		if (state.rating === "1STARABOVE")
			return products.filter((el) => el.rating >= 1);
		return products;
	};

	const sortBy = (products) => {
		if (state.sortBy === "lowtohigh")
			return products.sort((a, b) => a.price - b.price);
		if (state.sortBy === "hightolow")
			return products.sort((a, b) => b.price - a.price);
		return products;
	};

	const filteredProducts = sortBy(
		rating(bestSeller(inStock(state.products)))
	);

	const value = { state, dispatch1, filteredProducts };

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => useContext(FilterContext);
