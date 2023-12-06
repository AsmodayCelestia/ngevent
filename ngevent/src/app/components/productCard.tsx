export interface Product {
    name: string
    price: number
    tags: string[]
    thumbnail: string
    images: string[]
    createdAt: string
    updatedAt: string
}

export default function productCard({ product }: { product: Product }) {
    return (
      <>
            <div className="max-w-[2000px] gap-8 flex items-center">
                <h2 className="text-3xl font-bold sm:text-4xl text-[#176B87]">Products</h2>
                {/* <SearchBar /> */}
                <form className="  w-full border-2 rounded ">
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
            <p className="text-xl text-center mt-16">No matching product</p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center">
                {/* <GadgetCard /> */}
                <div
                    className="shadow-lg border border-[#DAFFFB] bg-white rounded-lg flex items-start cursor-pointer mb-10"
                >
                    {/* <router-link
                    :to="`/gadget/${gadget.id}`"
                    id="gadget"
                    className="group block overflow-hidden rounded-xl"
                    > */}
                    <img
                        alt="Gadget"
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
                        className="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[300px]"
                    />

                    <div className="relative p-5">
                        <h3
                        className="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        {/* {{ gadget.name }} */}
                        </h3>
                        {/* <span
                        className="inline-block bg-[#176B87] rounded-full px-3 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2 mt-2"
                        >
                        #&nbsp;{{ gadget.type }}
                        </span> */}
                        <div id="description">
                        <p className="text-md my-4 text-justify">
                            {/* {{ gadget.description }} */}
                            </p>
                        </div>
                        {/* <p>
                        <span className="tracking-wider text-xl font-bold"> Start Fr. </span>
                        </p>
                        <p className="my-1">
                    
                        <span className="tracking-wider text-xl font-bold">
                        {{formattedPrice(gadget.price) }}
                        </span>
                        </p> */}
                    </div>
                    {/* </router-link> */}
                </div>
                {/* GadgetCard */}
            </div>
        </>
    )
}