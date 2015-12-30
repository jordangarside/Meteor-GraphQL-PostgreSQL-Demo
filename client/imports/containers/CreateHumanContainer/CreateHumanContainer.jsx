import Faker from 'faker';

import {WorldSchema} from '../../GraphQL/schemas.js';
import HumansContainer from '../HumansContainer/HumansContainer.jsx';

let CreateHumanContainer = class extends React.Component {
	constructor (props, context) {
		super(props, context);
	}

	render () {
		return (
			<div>
				<h2>Create a Person</h2>
				<button onClick={this.createHuman.bind(this)}>Do it!</button>
			</div>
		);
	}

	createHuman () {
		const firstName = Faker.name.firstName();
		const lastName = Faker.name.lastName();

		const human = {
			firstName,
			lastName
		};

		// update the cache with the new human
		/*
		WorldSchema.cache.setItemPayload(`
				{
					human {
						_id,
						firstName,
						lastName
					}
				}
			`, {
			postId: _id
		}, {post});
		*/

		// invoke the mutation
		WorldSchema.mutate(`
			{
				human: createHuman(
					firstName: "${firstName}",
					lastName: "${lastName}"
				) {
					firstName,
					lastName
				}
			}
		`).then((createdHuman) => {
			// if success, update the cache with the modified document
			/*
			BlogSchema.cache.setItemPayload(BlogPostContainer.query, {
				postId: _id
			}, payload);
			*/
			console.log(createdHuman);
		}, (error) => {
			// if there is an error, alert it
			alert(error.message);
		}).then(() => {
			// refetch the query for the humans list
			WorldSchema.refetchQuery(HumansContainer.query);
		});
	}
}

export default CreateHumanContainer;
