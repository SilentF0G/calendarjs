function createCalendar(elem, year, month) {
	elem = document.querySelector(elem);

	let mon = month - 1;
	let d = new Date(year, month);
}

function getDay(date) {
	let day = date.getDay();
	if (day == 0) day = 7;
	return day - 1;
}