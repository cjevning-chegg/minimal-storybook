import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from '..';
import CheckList from '../CheckList';
import { ListColor } from '../styles';

const linkComponents = {
  List,
  CheckList
};

for (let [name, ListComponent] of Object.entries(linkComponents)) {
  describe(`<${name} />`, () => {
    it('renders without blowing up', () => {
      const LiText = 'list item';
      const listLength = 5;
      const listItems = Array(listLength).fill(LiText);

      const { getAllByText } = render(<ListComponent items={listItems} />);
      expect(getAllByText(LiText).length).toBe(listLength);
    });
    it('can handle a large number of items', () => {
      const LiText = 'list item';
      const listLength = 1000;
      const listItems = Array(listLength).fill(LiText);

      const { getAllByText } = render(<ListComponent items={listItems} />);
      expect(getAllByText(LiText).length).toBe(listLength);
    });
    // TODO: it's difficult to actually check the style here, so this is basically just
    // a sanity check for now. Visual regression tests will cover this better.
    it.each(['dark', 'white', 'cheggOrange', undefined])(
      'renders appropriately with "%s" color prop',
      color => {
        const LiText = 'list item';
        const listLength = 5;
        const listItems = Array(listLength).fill(LiText);
        const { getAllByText } = render(
          <ListComponent color={color as ListColor} items={listItems} />
        );
        expect(getAllByText(LiText).length).toBe(listLength);
      }
    );
  });
}
