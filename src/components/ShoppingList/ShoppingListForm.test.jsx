import { screen, render, fireEvent } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {
  test('onSubmit, form will process data or return default', () => {
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

  //   test('onSubmit, form will process data', () => {
  //     const onSubmit = jest.fn();
  //     render (<ShoppingListForm onSubmit={onSubmit} id="test" />);

  //     const newShoppingList = {
  //       id: 1,
  //       name: 'My New Shopping List',
  //       shoppingItems: [],
  //     };

  //     const input = 
  //     screen.queryByTestId('shopping-list-form-name-test');
  //     const button = 
  //     screen.queryByTestId('shopping-list-form-submit-button-test');

//     fireEvent.change(input, { target: { newShoppingList: {
//       id: 1,
//       name: 'My New Shopping List',
//       shoppingItems: [],
//     } } });
//     fireEvent.click(button);
//     expect(onSubmit).toHaveBeenCalledWith(newShoppingList);
//   });
});
