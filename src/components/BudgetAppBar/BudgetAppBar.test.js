import React from 'react';
import renderer from 'react-test-renderer';

import BudgetAppBar from './BudgetAppBar';

describe('BudgetAppBar', () => {
  test('default props', () => {
    const tree = renderer.create(<BudgetAppBar />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('title prop specified', () => {
    const tree = renderer.create(<BudgetAppBar title="testing" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});