import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../form/SignIn';

it('renders Form', () => {
    const tree = renderer
      .create(<SignIn/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });