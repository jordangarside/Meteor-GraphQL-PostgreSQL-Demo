import Sequelize from 'sequelize';

import postgresConnection from '../connection.js';

const Human = postgresConnection.define('human', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

export default Human;
