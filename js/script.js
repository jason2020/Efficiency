function checkSupport() {
	if (typeof(Storage) !== "undefined") {
		var data = getData();
		console.log("localStorage avaliable");
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
		list1: "test",
		tempPref: "celcius",
		clock: "12",
		style: "default"
	};
	if (visited == null) {
		sessionStorage.setItem("visited", true);
		console.log("New page");
		setItems(defaultData);
		// sessionStorage.setItem("list", data.list);
		// sessionStorage.setItem("tempPref", data.tempPref);
		// sessionStorage.setItem("clock", data.clock);
		// sessionStorage.setItem("style", data.style);
		return defaultData;
	} else {
		// var data = getItems(defaultData);
		// var data = {};
		// data.list = sessionStorage.getItem("list1");
		// data.tempPref = sessionStorage.getItem("tempPref");
		// data.clock = sessionStorage.getItem("clock");
		// data.style = sessionStorage.getItem("style");
		return data;
	}
}

checkSupport();

function formatPage (obj) {
	console.log(obj);
	setTime(obj.clock)
}

function setTime(timePref) {
	var date = new Date(),
		day = date.getDate();

}

function setItems(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			sessionStorage.setItem(prop, obj.prop);
		}
	}
}

function getItems(obj) {
	var tObj = {};
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			var objProperty = sessionStorage.getItem("list1");
			console.log(objProperty);
			tObj[prop] = objProperty;
		}
	}
	return tObj;
}