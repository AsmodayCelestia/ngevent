import ProductCard, { Product } from '../components/productCard'

async function getProducts(): Promise<Product[]>{
    const response = await fetch ('http://localhost:3000/products')
    const data = await response.json()
    return data
}


export default async function Products(){
    const products = await getProducts()
    return (
        <>
            <div id="background-img"></div>
            <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
                {products.map(product =>{
                    return <ProductCard product={product}/>
                })}
            </div>
        </>
    )
}