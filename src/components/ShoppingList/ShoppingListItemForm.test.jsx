import { screen, render, fireEvent } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

describe('Shopping List Item Form', () => {
  test('onSubmit will add an item to the shopping list', () => {
    const onSubmit = jest.fn();
    // const newItem = {
    //   item: 'pineapple',
    //   quantity: 5
    // };
      
    render(
      <ShoppingListItemForm onSubmit={onSubmit}/>
    );
    const input = screen.queryByTestId('shopping-list-item-input');
    fireEvent.change(input, { target: { value: 'pineapple' } });
    expect(input.value).toBe('pineapple');
  });
});
