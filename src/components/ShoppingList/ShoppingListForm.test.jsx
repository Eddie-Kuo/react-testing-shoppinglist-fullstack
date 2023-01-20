import { screen, render, fireEvent } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {
  test('onSubmit with an empty field, default will be submitted', () => {

    const onSubmit = jest.fn();
    render (<ShoppingListForm onSubmit={onSubmit} id="test" />);

    const defaultShoppingList = {
      id: null,
      name: '',
      shoppingItems: [],
    };

    const input = 
    screen.queryByTestId('shopping-list-form-name-test');
    const button = 
    screen.queryByTestId('shopping-list-form-submit-button-test');

    fireEvent.change(input, { target: { value: null } });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledWith(defaultShoppingList);
  });

  test('typing in the input + values match', () => {
    const onSubmit = jest.fn();
    render (<ShoppingListForm onSubmit={onSubmit} id="test" />);

    const input = screen.queryByTestId('shopping-list-form-name-test');
    fireEvent.change(input, { target: { value: 'My New List' } });
    expect(input.value).toBe('My New List');
  });
});
