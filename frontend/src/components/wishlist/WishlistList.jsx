import WishlistItem from "./WishlistItem";

function WishlistList({ wishlistItems }) {
  return (
    <div className="space-y-6">
      {wishlistItems.map((item) => (
        <WishlistItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default WishlistList;