'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
export interface Wish {
    _id: string;
    userId: string;
    productId: string;
    createdAt: string;
    updatedAt: string;
}

export default function wishCard({ wish }: { wish: Wish }) {
    const navigate = useRouter()
    return (
      <>
            {/* <p className="text-xl text-center mt-16">No matching product</p> */}
                {/* <GadgetCard /> */}
                <div className="shadow-lg border border-[#DAFFFB] min-w-[50vh] bg-white rounded-lg flex flex-col items-start cursor-pointer mb-2">
                    <img
                        alt="Gadget"
                        src={wish.thumbnail}
                        className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[50vh]"
                    />
                </div>
                {/* GadgetCard */}

        </>
    )
}