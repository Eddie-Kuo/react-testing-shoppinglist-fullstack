export default function ShoppingListItem({ shoppingItem }) {
  return(
    <>
      <div>
        <span>
          Item: {shoppingItem.item}, 
          Amount: {shoppingItem.quantity} 
          <button>delete</button>
        </span>
      </div>
    </>
  );
}
// properties: Name, quantity, 
// shopping list id to know which list it belongs to, done?
