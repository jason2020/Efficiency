function checkSupport() {
	if (typeof(Storage) !== "undefined") {
		var data = getData();
		console.log("localStorage avaliable");
		formatPage(data);
	} else {
		alert("Browser lacks support for localStorage. Please use another browser.");
	}
}

function getData() {
	var visited = sessionStorage.getItem("visited");
	if (visited == null) {
		sessionStorage.setItem("visited", true);
		console.log("New page");
		// default settings
		var data = {
			"list": ["test", "test"],
			"tempPref": "celcius",
			"style": ["default", "normal"]
		};
		sessionStorage.setItem("list", data.list);
		sessionStorage.setItem("tempPref", data.tempPref);
		sessionStorage.setItem("style", data.style);
		return data;
	} else {
		var data = {};
		data.list = sessionStorage.getItem("list").split(",");
		data.tempPref = sessionStorage.getItem("tempPref");
		data.style = sessionStorage.getItem("style").split(",");
		return data;
	}
}

checkSupport();

function formatPage (obj) {
	console.log(obj);
	
}