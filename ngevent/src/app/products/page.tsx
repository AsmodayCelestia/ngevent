import ProductCard, { Product } from '../components/productCard';
import Link from 'next/link';

function Products({ products = [] }: { products: Product[] }) {
    // Check if products is undefined or not an array
    if (!products || !Array.isArray(products)) {
        return (
            <>
                <p className="text-xl text-center mt-16">No matching product</p>
            </>
        );
    }

    return (
        <>
            <div className="max-w-[2000px] gap-8 flex items-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-[#176B87]">Products</h2>
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
            </div>
            <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mt-3 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center">
                    {products.map(product => (
                        <div key={product.slug}>
                            <Link href={`/products/${product.slug}`}>
                                <ProductCard product={product} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getProducts() {
    try {
        const response = await fetch('https://ngevent.vercel.app/api/products', {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const { data } = await response.json() as {
            statusCode: number;
            message: string;
            data: Product[];
        };

        return {
            props: {
                products: data,
            },
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: {
                products: [],
            },
        };
    }
}

export default Products;
