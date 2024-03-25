import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/cartContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FilterProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</FilterProvider>
	</React.StrictMode>
);
