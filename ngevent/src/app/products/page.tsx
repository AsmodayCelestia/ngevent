'use client'
import ProductCard, { Product } from '../components/productCard'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Products(){
    const [products, setProducts] = useState<Product[]>([])
    useEffect(()=>{
        async function getProducts(){
            const response = await fetch ('http://localhost:3000/api/products',{
                method: "GET",
                cache: 'no-store'
            })
            const {data} = await response.json() as {
                statusCode: number;
                message: string;
                data: Product[];
            }
            setProducts(data)
        }
        getProducts()
        JSON.stringify(products)
    }, [])
    
    return (
        <>
            <div className="max-w-[2000px] gap-8 flex items-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-[#176B87]">Products</h2>
                {/* <SearchBar /> */}
                <form className=" mt-7 w-full border-2 rounded ">
                    <div className="flex">
                    <div className="relative h-[45px] w-full">
                        <input
                        className="w-full h-full p-4"
                        type="search"
                        id="search-dropdown"
                        placeholder="Search by name"
                        />
                        <button
                        type="submit"
                        className="absolute top-0 right-0 px-4 text-sm font-medium h-full text-white bg-[#176B87] hover:opacity-60 transition-opacity duration-100 rounded-r-lg hover:bg-[#04364A]"
                        >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <span className="sr-only">Search</span>
                        </button>
                    </div>
                    </div>
                </form>
                {/* search */} 
            </div>
            <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mt-3 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center">
                    {products.map(product =>{
                        return ( 
                        <Link href={`/products/${product.slug}`}>
                            <ProductCard key={product.slug} product={product}/>
                        </Link>
                        )
                    })}
                </div>
            </div>
            {/* <p className="text-xl text-center mt-16">No matching product</p> */}
        </>
    )
}