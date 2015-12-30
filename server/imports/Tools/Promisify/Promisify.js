let Promisify = (context, fnName) => {
	return (...args) => {
		return new Promise((resolve, reject) => {
			args.push((error, result) => {
				if (error) {
					return reject(error);
				}

				return resolve(result);
			});

			context[fnName].apply(context, args);
		});
	}
};

export default Promisify;
