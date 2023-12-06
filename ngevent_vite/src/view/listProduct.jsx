import { useState } from 'react'
import './App.css'

function list(){
    return (
        <>
            <div id="background-img"></div>
            <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
            <div class="max-w-[2000px] gap-8 flex items-center">
                <h2 class="text-3xl font-bold sm:text-4xl text-[#176B87]">Products</h2>


                {/* <SearchBar /> */}
                <form class="  w-full border-2 rounded ">
                    <div class="flex">
                    <div class="relative h-[45px] w-full">
                        <input
                        class="w-full h-full p-4"
                        type="search"
                        id="search-dropdown"
                        placeholder="Search by name"
                        />
                        <button
                        type="submit"
                        class="absolute top-0 right-0 px-4 text-sm font-medium h-full text-white bg-[#176B87] hover:opacity-60 transition-opacity duration-100 rounded-r-lg hover:bg-[#04364A]"
                        >
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span class="sr-only">Search</span>
                        </button>
                    </div>
                    </div>
                </form>
                {/* search */}
                
            </div>
            <p class="text-xl text-center mt-16">No matching product</p>
            <div
                class="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center"
            >
                {/* <GadgetCard /> */}
                <div
                    class="shadow-lg border border-[#DAFFFB] bg-white rounded-lg flex items-start cursor-pointer mb-10"
                >
                    {/* <router-link
                    :to="`/gadget/${gadget.id}`"
                    id="gadget"
                    class="group block overflow-hidden rounded-xl"
                    > */}
                    <img
                        alt="Gadget"
                        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
                        class="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[300px]"
                    />

                    <div class="relative p-5">
                        <h3
                        class="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                        {/* {{ gadget.name }} */}
                        </h3>
                        {/* <span
                        class="inline-block bg-[#176B87] rounded-full px-3 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2 mt-2"
                        >
                        #&nbsp;{{ gadget.type }}
                        </span> */}
                        <div id="description">
                        <p class="text-md my-4 text-justify">
                            {/* {{ gadget.description }} */}
                            </p>
                        </div>
                        {/* <p>
                        <span class="tracking-wider text-xl font-bold"> Start Fr. </span>
                        </p>
                        <p class="my-1">
                    
                        <span class="tracking-wider text-xl font-bold">
                        {{formattedPrice(gadget.price) }}
                        </span>
                        </p> */}
                    </div>
                    {/* </router-link> */}
                </div>
                {/* GadgetCard */}

                {/* <GadgetCard /> */}
                <div
            class="shadow-lg border border-[#DAFFFB] bg-white rounded-lg flex items-start cursor-pointer mb-10"
            >
            {/* <router-link
            :to="`/gadget/${gadget.id}`"
            id="gadget"
            class="group block overflow-hidden rounded-xl"
            > */}
            <img
            alt="Gadget"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
            class="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[300px]"
            />

            <div class="relative p-5">
            <h3
                class="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
                {/* {{ gadget.name }} */}
            </h3>
            {/* <span
                class="inline-block bg-[#176B87] rounded-full px-3 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2 mt-2"
            >
                #&nbsp;{{ gadget.type }}
                </span> */}
            <div id="description">
                <p class="text-md my-4 text-justify">
                {/* {{ gadget.description }} */}
                </p>
            </div>
            {/* <p>
                <span class="tracking-wider text-xl font-bold"> Start Fr. </span>
            </p>
            <p class="my-1">

                <span class="tracking-wider text-xl font-bold">
            {{formattedPrice(gadget.price) }}
                </span>
            </p> */}
            </div>
            {/* </router-link> */}
            </div>
            {/* GadgetCard */}

            {/* <GadgetCard /> */}
                <div
                class="shadow-lg border border-[#DAFFFB] bg-white rounded-lg flex items-start cursor-pointer mb-10"
                >
                {/* <router-link
                    :to="`/gadget/${gadget.id}`"
                    id="gadget"
                    class="group block overflow-hidden rounded-xl"
                > */}
                    <img
                    alt="Gadget"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378"
                    class="h-[200px] w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[300px]"
                    />

                    <div class="relative p-5">
                    <h3
                        class="font-bold text-2xl text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                        {/* {{ gadget.name }} */}
                    </h3>
                    {/* <span
                        class="inline-block bg-[#176B87] rounded-full px-3 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2 mt-2"
                    >
                        #&nbsp;{{ gadget.type }}
                        </span> */}
                    <div id="description">
                        <p class="text-md my-4 text-justify">
                        {/* {{ gadget.description }} */}
                        </p>
                    </div>
                    {/* <p>
                        <span class="tracking-wider text-xl font-bold"> Start Fr. </span>
                    </p>
                    <p class="my-1">
                    
                        <span class="tracking-wider text-xl font-bold">
                    {{formattedPrice(gadget.price) }}
                        </span>
                    </p> */}
                    </div>
                {/* </router-link> */}
                </div>
            {/* GadgetCard */}
            </div>
            </div>
        </>
    )
}

export default list