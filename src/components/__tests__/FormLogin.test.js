import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import FormLogin from '../FormLogin';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});
const setup = () => shallow(
  <Provider store={store}>
    <FormLogin />
  </Provider>,
);

describe('Formbooking Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  test('renders the booking form', () => {
    const page = component.find('.Formbooking');
    expect(page).toMatchSnapshot();
  });
});
