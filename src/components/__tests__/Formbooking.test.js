import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FormBooking from '../FormBooking';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});
const setup = () => shallow(
  <Provider store={store}>
    <FormBooking />
  </Provider>,
);
// add a test to check if the component renders from the store\
describe('FormBooking', () => {
  it('renders without crashing', () => {
    setup();
  });
});

describe('Formbooking Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test('renders the Consultancies List Component', () => {
    const page = component.find('.bookingList');
    expect(page).toMatchSnapshot();
  });
});
