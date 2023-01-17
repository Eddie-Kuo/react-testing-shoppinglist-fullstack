import { screen, render } from '@testing-library/react';
import ShoppingList from './ShoppingList';
// import ShoppingListForm from './ShoppingListForm';

describe('ShoppingList', () => {
  test('renders a list', () => {
    const shoppingList = {
      id: 1,
      name: 'My List',
      shoppingItems: [{
        id: 1,
        name: 'apple'
      }]
    };
    render(
      <ShoppingList shoppingList={shoppingList}/>
    );
    const list = screen.queryByTestId(`shopping-list-${shoppingList.id}`);
    expect(list).not.toBe(null);
  });
});


//  set on submit = jest.fn() - pass into real function as a prop
// render the component and pass in id, and on submit (render)
// set the body text
// and elements by getting with test id (screen)
// fire events and then expect what you expected
