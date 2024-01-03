import { useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { Product } from "./productCard";

export default function AddWish({ product }: { product: Product }) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleBookmarkClick = async (productId: string) => {
    const response = await fetch(
      `https://vercel.com/herus-projects/ngevent-1vqn/api/api/wishlists/${productId}`,
      {
        method: "POST",
      }
    );
    //   // Check if the product is already in the wishlist
    //   if (!wishlist.includes(productId)) {
    //       // If not, add it to the wishlist
    //       setWishlist([...wishlist, product._id.toString()]);
    //     }
    //     console.log(wishlist);
  };

  return (
    <>
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior (navigation)
          handleBookmarkClick(product._id);
        }}
      >
        add wish
      </button>
    </>
  );
}
