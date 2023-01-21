import "./Styles/MainPage.css";
import { useEffect } from "react";

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
				<div class="container">
					<div class="image-container">
						<img
							class="image-before slider-image"
							src="https://ringstring.art/img/pic-main@2x.jpg"
							alt="colorPhoto"
						/>
						<img
							class="image-after slider-image"
							src="https://ringstring.art/img/pic-main-m@2x.jpg"
							alt="black and white"
						/>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						value="50"
						aria-label="Percentage of before photo shown"
						class="slider"
					/>
					<div class="slider-line" aria-hidden="true"></div>
					<div class="slider-button" aria-hidden="true">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<rect width="256" height="256" fill="none"></rect>
							<line
								x1="128"
								y1="40"
								x2="128"
								y2="216"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<line
								x1="96"
								y1="128"
								x2="16"
								y2="128"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<polyline
								points="48 160 16 128 48 96"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></polyline>
							<line
								x1="160"
								y1="128"
								x2="240"
								y2="128"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></line>
							<polyline
								points="208 96 240 128 208 160"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="16"
							></polyline>
						</svg>
					</div>
				</div>

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
