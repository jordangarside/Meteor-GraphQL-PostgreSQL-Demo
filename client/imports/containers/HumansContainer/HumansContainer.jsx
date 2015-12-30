
import Human from '../../components/Human/Human.jsx';
import Humans from '../../components/Humans/Humans.jsx';
import { WorldSchema } from '../../GraphQL/schemas.js';

let HumansContainer = GraphQL.bindData((props, onData) => {
	return WorldSchema.watchQuery(HumansContainer.query, onData)
})(Humans);

HumansContainer.query = `
	{
		humans {
			...${Human.fragment}
		}
	}
`;

export default HumansContainer;
