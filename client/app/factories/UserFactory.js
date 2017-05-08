"use strict";

app.factory("UserFactory", function($sessionStorage) {

	const setCurrentCoach = (setupObj) => {
		$sessionStorage.coach_id = setupObj.id;
		$sessionStorage.first_name = setupObj.first_name;
		$sessionStorage.admin = setupObj.admin;
		console.log("setting $sessionStorage: ", $sessionStorage);
	};

	const getCurrentCoach = () => $sessionStorage;

	return { setCurrentCoach, getCurrentCoach };

});
