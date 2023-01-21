import "./Styles/MainPage.css";
import { useEffect } from "react";
import ImageSlider from "./Components/ImageSlider";

function MainPage() {
	useEffect(() => {
		const container = document.querySelector(".container");
		document.querySelector(".slider").addEventListener("input", (e) => {
			container.style.setProperty("--position", `${e.target.value}%`);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img
					class="home-button"
					src="https://ringstring.art/img/logo-top-full-b.svg"
					alt="Paris"
				></img>

				{/* image slider */}
				<ImageSlider />
				{/* <div class="navigation-wrap"> */}
				<div class="d-flex flex-column mb-3">
					<div class="p-2">
						<button class="regular-button">Gallery</button>
					</div>
					<div class="p-2">
						<button class="regular-button">Upload Photo</button>
					</div>
					<div class="p-2">
						<button class="regular-button">Buy</button>
					</div>
				</div>
				{/* </div> */}
			</header>
		</div>
	);
}

export default MainPage;
