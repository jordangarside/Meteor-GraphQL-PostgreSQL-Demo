
import { WorldSchema } from '../../GraphQL/schemas.js';

let Human = ({human}) => (
	<li>
		{human.firstName} {human.lastName}
	</li>
);

Human.fragment = WorldSchema.createFragment(`
	fragment on Human {
		id,
		firstName,
		lastName
	}
`);

export default Human;
