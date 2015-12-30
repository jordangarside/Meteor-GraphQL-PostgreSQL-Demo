import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const postgresConnection = new Sequelize(
	'd6gq88faq8ql6d', // Database Name
	'hegkyhjibpyubg', // Database Admin
	'x-7f3dNVO5RWTStANQckeYD1tI', // Database Password
	{
		host: 'ec2-107-22-170-249.compute-1.amazonaws.com', // Database Location
		dialect: 'postgres',
		dialectOptions: {
			ssl: true
		}
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
