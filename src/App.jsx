import { cartActions } from "./reducers/cartReducer";
import { useCart } from "./context/cartContext";
import Cart from "./Cart";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { useFilter } from "./context/filterContext";
import { filterActions } from "./reducers/filterReducer";

function App() {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage["darkMode"]) || false
	);
	const [showFilterBar, setShowFilterBar] = useState(false);
	const { dispatch } = useCart();
	const { dispatch1, filteredProducts } = useFilter();

	const products = [
		{
			title: "P-1",
			price: 1000,
			id: Math.random(),
			inStock: false,
			bestSeller: true,
			rating: 5,
		},
		{
			title: "P-2",
			price: 1200,
			id: Math.random(),
			inStock: true,
			bestSeller: false,
			rating: 3,
		},
		{
			title: "P-3",
			price: 1500,
			id: Math.random(),
			inStock: false,
			bestSeller: false,
			rating: 0,
		},
		{
			title: "P-4",
			price: 2000,
			id: Math.random(),
			inStock: true,
			bestSeller: true,
			rating: 4,
		},
		{
			title: "P-5",
			price: 2500,
			id: Math.random(),
			bestSeller: false,
			inStock: true,
			rating: 5,
		},
	];

	useEffect(() => {
		dispatch1({
			type: filterActions.INITIAL_PRODUCT_LIST,
			payload: { products },
		});
	}, []);

	useEffect(() => {
		localStorage["darkMode"] = JSON.stringify(darkMode);

		if (darkMode) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	}, [darkMode]);

	return (
		<div className="bg-blue-800 text-white dark:bg-blue-400 dark:text-blacks">
			<Cart />

			{filteredProducts.map((el) => (
				<div key={el.id}>
					<h3>{JSON.stringify(el)}</h3>
					<button
						onClick={() =>
							dispatch({
								type: cartActions.ADD_TO_CART,
								payload: {
									product: el,
								},
							})
						}
					>
						add
					</button>
				</div>
			))}

			<Filter showFilterBar={showFilterBar} />
			<button
				onClick={() => setDarkMode(!darkMode)}
				className="border p-2 mx-2"
			>
				{darkMode ? "Normal Mode" : "Dark Mode"}
			</button>
			<button onClick={() => setShowFilterBar(!showFilterBar)}>
				show filter bar
			</button>
		</div>
	);
}

export default App;
