import Head from 'next/head';

export default function Detail() {
    return (
      <>
    <div>
      <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <h1>iPhones for Sale</h1>
      <p>insert a list of iPhones for sale.</p>
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
                <div className="relative mt-4">
                    <img
                    alt="Tee"
                    src="gadget.imgUrl"
                    className="h-72 w-full rounded-xl lg:h-[300px] object-contain"
                    />
                </div>
                </div>
                <div>
                <form className="space-y-4">
                    <h2 className="text-xl my-5 font-bold">About Product</h2>
                    <p />
                    <div>
                    <p className="mt-10 pt-2 border-t-2">Start From</p>
                    <p className="text-xl font-bold" />
                    <button
                        type="button"
                        id="pay-button"
                        className="w-full border mt-6 border-gray-300 bg-[#176B87] hover:bg-[#04364A] rounded-md hover-opacity-60 text-white px-6 py-3 text-sm font-bold tracking-wide"
                    >
                        Order Now
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
            <div className="h-[600px] w-full">
                <iframe
                src="videoUrl"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
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