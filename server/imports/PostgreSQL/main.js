import _ from 'lodash';
import Faker from 'faker';

import postgresConnection from './connection.js';
import Human from './models/Human.js';

postgresConnection.sync({force: true}).then(() =>{
	// Create some fake data
	_.times(10, ()=>{
		return Human.create({
			firstName: Faker.name.firstName(),
			lastName: Faker.name.lastName()
		});
	});
	return
})

export default postgresConnection;
