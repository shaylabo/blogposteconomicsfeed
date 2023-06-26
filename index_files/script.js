let currentData = document.querySelector(".currentData");
let now = new Date();

now.setHours(now.getHours() - 2);



document.querySelector(".currentDate").innerHTML = now.toLocaleDateString(
	"en",
	{
		day: "numeric",
		month: "numeric",
		year: "numeric",

	}
);

