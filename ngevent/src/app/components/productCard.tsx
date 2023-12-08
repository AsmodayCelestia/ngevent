import React from 'react';
// import { useRouter } from 'next/router'; // Import from next/router, not next/navigation
import { BsBookmarkStarFill } from 'react-icons/bs';
import Link from 'next/link';

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
//   const navigate = useRouter();

//   const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     navigate.push(`/products/${product.slug}`);
//   };

  return (
    <>
      <Link href={`/products/${product.slug}`}>
        {/* <a onClick={handleCardClick}> */}
          <div className="shadow-lg border border-[#DAFFFB] min-w-[50vh] bg-white rounded-lg relative overflow-hidden group cursor-pointer mb-2">
            <img
              alt={product.name}
              src={product.thumbnail}
              className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[50vh]"
            />
            {/* Icon in the top-right corner */}
            <div className="absolute top-2 right-2">
                <BsBookmarkStarFill className="w-8 h-8" color="#176B87" />
            </div>
          </div>
        {/* </a> */}
      </Link>
    </>
  );
}
