import { screen, render } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists', () => {
  test('renders a list', () => {
    const shoppingLists = [
      {
        id: 1,
        name: 'MY LIST 1',
        shoppingItems: [
          {
            id: 1,
            name: 'apple',
          },
        ],
      },
      {
        id: 2,
        name: 'MY LIST 2',
        shoppingItems: [
          {
            id: 1,
            name: 'banana',
          },
        ],
      },
    ];
    render(<ShoppingLists shoppingLists={shoppingLists} />);

    const list = screen.queryByTestId('shopping-lists');
    expect(list).not.toBe(null);
    expect(list).toMatchInlineSnapshot(`
      <ol
        data-testid="shopping-lists"
      >
        <li>
          <div>
            <div
              data-testid="shopping-list-name-1"
            >
              MY LIST 1
            </div>
            <ol
              data-testid="shopping-list-1"
            >
              <li />
            </ol>
          </div>
        </li>
        <li>
          <div>
            <div
              data-testid="shopping-list-name-2"
            >
              MY LIST 2
            </div>
            <ol
              data-testid="shopping-list-2"
            >
              <li />
            </ol>
          </div>
        </li>
      </ol>
    `);
  });
});
