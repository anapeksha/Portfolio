import { GlobalStyles } from "@mui/material";
import "animate.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyles
			styles={{
				html: {
					scrollBehavior: "smooth",
				},
				body: {
					background: "hsl(213deg 72% 12%)",
					color: "#cccccc",
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
				},
			}}
		/>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
