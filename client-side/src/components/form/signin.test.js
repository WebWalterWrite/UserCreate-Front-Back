import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './SignIn';

it('renders Form', () => {
    const tree = renderer
      .create(<SignIn/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });