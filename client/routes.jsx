
import DefaultLayout from './imports/layouts/DefaultLayout/DefaultLayout.jsx';
import HumansContainer from './imports/containers/HumansContainer/HumansContainer.jsx';

FlowRouter.route('/', {
	action() {
		ReactLayout.render(DefaultLayout, {content: <HumansContainer/>});
	}
});
