let sleep = (millis) => {
	return new Promise((resolve) => setTimeout(resolve, millis));
};

export default sleep;
