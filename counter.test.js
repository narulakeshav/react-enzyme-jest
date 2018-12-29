import React from 'react';
import Counter from './counter';
import { shallow } from 'enzyme';

/**
 * Shallow Rendering 
 * This is when the component isn't fully rendered in the
 * dom. It is the JSON representation of what would have
 * been rendered.
 * 
 * Saves time + complexity
 */
describe('<Counter>', () => {
	it("starts with a counter of 0", () => {
		const wrapper = shallow(<Counter />);
		const counterState = wrapper.state.counter;
		expect(counterState).toEqual(0);
	})
});