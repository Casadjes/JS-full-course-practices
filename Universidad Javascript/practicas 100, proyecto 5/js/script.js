const btnPrimary = document.getElementById("btn-primario");
const btnSecondary = document.getElementById("btn-secundario");

const colors = [
	"blue",
	"red",
	"yellow",
	"orange",
	"purple",
	"pink",
	"gray",
	"darkblue",
	"crimsom",
	"black",
	"violet",
	"cornblue",
	"steelblue",
	"darkred",
	"brown",
	"lightred",
	"lightgreen",
	"lightyellow"
];
btnPrimary.addEventListener("click", () => {
	setInterval(() => {
		const random = getRandom();
		document.body.style.backgroundColor = colors[random];
	}, 5);
});

function getRandom() {
	return Math.floor(Math.random() * colors.length);
}
