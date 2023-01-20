import { screen, render } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem';

describe('Shopping List Item', () => {
  test('item', () => {
    const shoppingItem = {
      item: 'pineapple',
      quantity: 5
    };
    render(<ShoppingListItem shoppingItem={shoppingItem}/>);
    screen.queryByTestId('shopping-item');
    expect(shoppingItem.item).toBe('pineapple');
    expect(shoppingItem.quantity).toBe(5);
  });
});
