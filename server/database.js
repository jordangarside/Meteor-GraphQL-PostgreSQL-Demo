import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const postgresConnection = new Sequelize(
	'World', // Database Name
	'animal', // Database Admin
	'postgres', {
		dialect: 'postgres',
		host: 'localhost' // Database Location
	}
);

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

postgresConnection.sync({force: true}).then(() =>{
	// Create some fake data
	_.times(10, ()=>{
		return Human.create({
			firstName: Faker.name.firstName(),
			lastName: Faker.name.lastName()
		});
	})
})

export default postgresConnection;
