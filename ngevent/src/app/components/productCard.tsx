"use client";
import React from "react";
// import { useRouter } from 'next/router'; // Import from next/router, not next/navigation
import Link from "next/link";
import { useState } from "react";
import AddWish from "./addWish";

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

  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <div className="shadow-lg border border-[#DAFFFB] min-w-[50vh] bg-white rounded-lg relative overflow-hidden cursor-pointer mb-2">
          <img
            alt={product.name}
            src={product.thumbnail}
            className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[50vh]"
          />
        </div>
      </Link>
      <AddWish product={product} />
    </>
  );
}
