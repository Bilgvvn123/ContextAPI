import React from "react";
import { useFilter } from "./context/filterContext";
import { filterActions } from "./reducers/filterReducer";

const Filter = ({ showFilterBar }) => {
	const { state, dispatch1 } = useFilter();

	return (
		<div
			style={{
				background: "#666",
				padding: "1rem 2rem",
				transition: "1s ease",
			}}
			className={`relative -left-[1500px] ${showFilterBar && "left-0"}`}
		>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="bestseller"
			>
				Best seller
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="bestseller"
				hidden={true}
				checked={state.bestSeller || false}
				onChange={() =>
					dispatch1({
						type: filterActions.BEST_SELLER,
						payload: { bestSeller: state.bestSeller },
					})
				}
			/>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="instock"
			>
				In stock
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="instock"
				checked={state.inStock || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.IN_STOCK,
						payload: { inStock: state.inStock },
					})
				}
			/>

			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="4"
			>
				4
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="4"
				checked={state.rating === "4STARABOVE" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.RATING,
						payload: { rating: "4STARABOVE" },
					})
				}
			/>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="3"
			>
				3
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="3"
				checked={state.rating === "3STARABOVE" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.RATING,
						payload: { rating: "3STARABOVE" },
					})
				}
			/>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="2"
			>
				2
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="2"
				checked={state.rating === "2STARABOVE" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.RATING,
						payload: { rating: "2STARABOVE" },
					})
				}
			/>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="1"
			>
				1
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="1"
				checked={state.rating === "1STARABOVE" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.RATING,
						payload: { rating: "1STARABOVE" },
					})
				}
			/>

			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="lowtohigh"
			>
				low to high
			</label>
			<input
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				type="checkbox"
				id="lowtohigh"
				checked={state.sortBy === "lowtohigh" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.SORT_BY,
						payload: { sortBy: "lowtohigh" },
					})
				}
			/>
			<label
				style={{ border: "1px solid #ccc", padding: "10px 15px" }}
				htmlFor="hightolow"
			>
				high to low
			</label>
			<input
				type="checkbox"
				id="hightolow"
				checked={state.sortBy === "hightolow" || false}
				hidden={true}
				onChange={() =>
					dispatch1({
						type: filterActions.SORT_BY,
						payload: { sortBy: "hightolow" },
					})
				}
			/>
		</div>
	);
};

export default Filter;
