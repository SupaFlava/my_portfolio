document
	.querySelector(".navigation__nav")
	.addEventListener("click", function (event) {
		if (event.target.classList.contains("navigation__link")) {
			document.getElementById("navi-toggle").checked = false;
		}
	});
const modal = document.getElementById("game-modal");
const modalFrame = modal.querySelector(".game-modal__frame");
const modalClose = modal.querySelector(".game-modal__close");

document.querySelectorAll("[data-game]").forEach((btn) => {
	btn.addEventListener("click", () => {
		modalFrame.src = btn.dataset.game;
		modal.hidden = false;
		document.body.style.overflow = "hidden"; // stop page scroll behind modal
	});
});

function closeGame() {
	modal.hidden = true;
	modalFrame.src = ""; // stops the game, frees WASM memory
	document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeGame);
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !modal.hidden) closeGame();
});
document.querySelectorAll(".project__play-overlay").forEach((el) => {
	const activate = () => {
		const box = el.closest(".project__img-box--game");
		if (box) box.classList.add("is-playing");
	};
	el.addEventListener("click", activate);
	el.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			activate();
		}
	});
});
