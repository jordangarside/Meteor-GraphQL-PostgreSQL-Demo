
import CreateHumanContainer from '../../containers/CreateHumanContainer/CreateHumanContainer.jsx';

let DefaultLayout = ({content}) => (
	<div>
		<header>
			<h1>Blah Blah Blah</h1>
		</header>
		<div>
			{content}
			<CreateHumanContainer />
			<br />
		</div>
		<footer>
			This blog is powered by GraphQL, Lokka & Meteor
		</footer>
	</div>
);

export default DefaultLayout;
