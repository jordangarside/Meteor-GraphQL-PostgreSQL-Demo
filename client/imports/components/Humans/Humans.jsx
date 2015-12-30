
import { WorldSchema } from '../../GraphQL/schemas.js';
import Human from '../Human/Human.jsx';

let Humans = ({humans}) => (
	<ul className="blog-titles">
		{humans.map(human => (
			<Human key={`human${human.id}`} human={human} />
		))}
	</ul>
);

export default Humans;
