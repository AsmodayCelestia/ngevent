import React from 'react';
export interface Product {
    _id: string
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price:string;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}


function formatRupiah(number:any) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

export default function productCard({ product }: { product: Product }) {
    return (
      <>
            {/* <p className="text-xl text-center mt-16">No matching product</p> */}
                {/* <GadgetCard /> */}
                <div className="shadow-lg border border-[#DAFFFB] min-w-[50vh] bg-white rounded-lg flex flex-col items-start cursor-pointer mb-2">
                    <img
                        alt="Gadget"
                        src={product.thumbnail}
                        className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[50vh]"
                    />
                    <div className="relative p-2">
                        <h3
                        className="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        { product.name }
                        </h3>
                        <div id="description">
                        <p className="text-md my-4 text-justify">
                            { product.excerpt }
                        </p>
                        <p className="text-md my-4 text-justify">
                            {formatRupiah(Number(product.price))}
                        </p>

                        </div>
                    </div>
                </div>
                {/* GadgetCard */}

        </>
    )
}