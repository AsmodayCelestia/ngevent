export default function Wishlist() {
    return (
      <>
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

