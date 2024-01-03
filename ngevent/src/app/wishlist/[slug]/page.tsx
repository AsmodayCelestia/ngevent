import { Metadata, ResolvingMetadata } from "next"
import Head from "next/head"
import ProductCard, { Product } from '../../components/productCard'
    
async function getDetail (slug:string): Promise<Product> {
    console.log(slug, "<<<<");
    
    const response = await fetch(`https://vercel.com/herus-projects/ngevent-1vqn/api/api/products/${slug}`)
    const {data} = await response.json();
    console.log(data);
    
    return data
}
type Props = {
    params: { slug: string }
}

const handleBookmarkClick = async (productId: string) => {
    const response= await fetch( `https://vercel.com/herus-projects/ngevent-1vqn/api/api/wishlists/${productId}`,{
        method: "POST"
    })
};

function formatRupiah(number:any) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}
    

export default async function Detail({params: {slug}} : Props) {
    console.log(slug);
    
    const data = await getDetail(slug);
    console.log(data);
    

    // const {name, excerpt, thumbnail, images, description, price } = data 
    
    console.log(data?.name, 'name');
    console.log(data?.excerpt, 'exc ');
    return ( 
        <>
    <div>
        <title>
            {data?.name} 
        </title>
    </div>
        <section id="product-detail-section">
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="flex gap-4 items-center py-3 content-center border-b-2 border-[#64CCC5]">
                <h1 className="text-2xl font-bold lg:text-3xl" />
                <span className="bg-[#176B87] rounded-full p-2 text-sm font-semibold text-white" />
            </div>
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                <div className="lg:col-span-3">
                    <div className="carousel h-[70vh] ">
                        <div id="item1" className="carousel-item w-full">
                            <img src={data?.thumbnail} className="w-full" />
                        </div> 
                        <div id="item2" className="carousel-item w-full">
                            <img src={data?.images[0]} className="w-full" />
                        </div> 
                        <div id="item3" className="carousel-item w-full">
                            <img src={data?.images[1]} className="w-full" />
                        </div> 
                        <div id="item4" className="carousel-item w-full">
                            <img src={data?.images[2]} className="w-full" />
                        </div>
                    </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a> 
                        <a href="#item2" className="btn btn-xs">2</a> 
                        <a href="#item3" className="btn btn-xs">3</a> 
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
                <div>
                <form className="space-y-4">
                    <h2 className="text-xl my-5 font-bold">{data?.excerpt}</h2>
                        <p>{data?.description}</p> 
                    <div>
                    <p className="mt-10 pt-2 border-t-2">Start From</p>
                    <p className="text-xl font-bold">{formatRupiah(Number(data?.price))}</p>
                    <button
                        type="button"
                        id="pay-button"
                        className="w-full border mt-6 border-gray-300 bg-[#176B87] hover:bg-[#04364A] rounded-md hover-opacity-60 text-white px-6 py-3 text-sm font-bold tracking-wide"
                    >
                        Add To Wishlist
                    </button>
                    </div>
                </form>
                </div>
                <div className="lg:col-span-3">
                <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                    <h2 className="text-2xl my-5 font-bold">Specification</h2>
                    <ul>
                    <li key="index"></li>
                    </ul>
                </div>
                </div>
            </div>
            <h2 className="text-2xl my-5 font-bold">Video Review</h2>
            <div className="bg-slate-400" />
            </div>
            <section id="review-section">
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-xl border-b-2 pb-4">
                    Review customer tentang
                    </h2>
                </div>
                <p className="text-center text-md mt-16">
                    No reviews for this item yet.
                </p>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
                    {/* <reviewcard key="index" review="review"></reviewcard> */}
                </div>
                </div>
            </section>
            </section>
        </section>
        </section>
        
    </>
    )
}