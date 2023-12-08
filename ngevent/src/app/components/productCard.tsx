'use client'
import React from 'react';
// import { useRouter } from 'next/router'; // Import from next/router, not next/navigation
import { BsBookmarkStarFill } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export default function ProductCard({ product }: { product: Product }) {
    const [wishlist, setWishlist] = useState<string[]>([]);

    const handleBookmarkClick = (e: React.MouseEvent<SVGElement>) => {
      e.preventDefault();
      
      // Check if the product is already in the wishlist
      if (!wishlist.includes(product._id)) {
          // If not, add it to the wishlist
          setWishlist([...wishlist, product._id]);
        }
        console.log(wishlist);
    };

  return (
    <>
      <Link href={`/products/${product.slug}`}>
          <div className="shadow-lg border border-[#DAFFFB] min-w-[50vh] bg-white rounded-lg relative overflow-hidden group cursor-pointer mb-2">
            <img
              alt={product.name}
              src={product.thumbnail}
              className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[50vh]"
            />
            {/* Icon in the top-right corner */}
            <div className="absolute top-2 right-2" style={{ cursor: 'pointer' }}>
                <BsBookmarkStarFill className="w-8 h-8" color="#176B87" />
            </div>

          </div>
      </Link>
    </>
  );
}
