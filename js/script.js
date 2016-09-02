function checkSupport() {
	if (typeof(Storage) !== "undefined") {
		var data = getData();
		console.log("LocalStorage avaliable");
		formatPage(data);
	} else {
		alert("Browser lacks support for localStorage. Please use another browser.")
		console.error("No browser support.")
	}
}

function getData() {
	var visited = sessionStorage.getItem("visited");
	// default settings
	var defaultData = {
		list: ["Lorem", "ipsum dolor sit amet."],
		tempPref: "celcius",
		clock: 12,
		style: "default"
	};
	if (visited == null) {
		sessionStorage.setItem("visited", true);
		console.log("New page");
		setItems(defaultData);
		// sessionStorage.setItem("list", defaultData.list);
		// sessionStorage.setItem("tempPref", defaultData.tempPref);
		// sessionStorage.setItem("clock", defaultData.clock);
		// sessionStorage.setItem("style", defaultData.style);
		return defaultData;
	} else {
		var data = getItems(defaultData);
		// var data = {};
		// data.list = sessionStorage.getItem("list").split(",");
		// data.tempPref = sessionStorage.getItem("tempPref");
		// data.clock = sessionStorage.getItem("clock");
		// data.style = sessionStorage.getItem("style");
		return data;
	}
}

function formatPage (obj) {
	console.log(obj);
	setTime(obj.clock);
}

function setTime(timePref) {
	var date = new Date(),
		day = date.getDate(),
		month = date.getMonth(),
		year = date.getFullYear(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		second = date.getSeconds(),
		time = document.getElementById("time"),
		date = document.getElementById("date"),
		monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	if (timePref == 12) {
		if (hour > 12) {
			hour = hour -= 12;
			time.innerHTML = hour + ":" + checkZero(minute) + ":" + checkZero(second) + " P.M.";
		} else {
			time.innerHTML = hour + ":" + checkZero(minute) + ":" + checkZero(second) + " A.M.";
		}
	} else {
		time.innerHTML = hour + ":" + checkZero(minute) + ":" + checkZero(second);
	}

	date.innerHTML = monthNames[month] + " " + day + ", " + year;

	setTimeout(function() {
		setTime(timePref);
	}, 200);
}

function checkZero (num) {
	if (num < 10) {
		num = "0" + num;
	}
	return num;
}

function setItems (obj) {
	for (var prop in obj) {
		sessionStorage.setItem(prop, obj[prop]);
	}
}

function getItems (obj) {
	var tObj = {};
	for (var prop in obj) {
		var objProperty = sessionStorage.getItem(prop);
		tObj[prop] = objProperty;
	}
	return tObj;
}