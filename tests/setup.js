// External Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme to use react 16 adapter
Enzyme.configure({
	adapter: new Adapter()
});