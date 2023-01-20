import { useState } from 'react';

export default function ShoppingListItemForm({ onSubmit }) {

  const oldShoppingItem = {
    item: '',
    quantity: ''
  };

  const [shoppingItem, setShoppingItem] = useState(oldShoppingItem);
  console.log('shoppingItem', shoppingItem);

  return <>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(shoppingItem);
    }}>
      <input 
        data-testid={'shopping-list-item-input'}
        placeholder="Add Item" 
        value={shoppingItem.item} 
        onChange={(e) => setShoppingItem(
          { ...shoppingItem, item: e.target.value }
        )}></input>
      <input 
        placeholder="Quantity" 
        value={shoppingItem.quantity} 
        onChange={(e) => setShoppingItem(
          { ...shoppingItem, quantity: e.target.value }
        )}></input>
      <button type="submit">
    Add
      </button>
    </form>
  </>;
}
