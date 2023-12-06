import Image from 'next/image'


export default function Home() {
  return (
    <>
  {/* Hello world */}
  <section>
    {/* header */}
    <div>
      <div className="mt-7 flex justify-center">
        <img src="./image/logo.jpeg" alt="Logo" className="w-36 h-36" />
      </div>
      <p className="text-xl mt-4 text-center">
        Unlock Unforgettable Experience
      </p>
      <h2 className="text-3xl font-bold text-[#176B87] text-center">
        At This Moment We Are Infinity
      </h2>
      <br />
      <br />
    </div>
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-8 bg-black z-20" />
      <div className="absolute top-0 left-2 md:p-8 text-left z-30">
        <h2 className="text-2xl md:text-sm font-bold text-black sm:text-3xl bg-black ml-24">
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </h2>
      </div>
      <div className="flex justify-center">
        <iframe
          className="w-screen max-w-screen-2xl h-96 md:h-144 lg:h-96"
          src="https://www.youtube.com/embed/gxq95YTfrTE?si=OKYm_4r2ZIXa67FF&controls=0&start=172&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <br />
      <br />
      <div className="mt-7 mx-10 flex carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/12/1/402513f3-5b68-4c46-952d-650a066f91b2.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img src="./image/hindia.jpg" className="rounded-box common-image" />
        </div>
        <div className="carousel-item relative">
          <img
            src="https://www.javajazzfestival.com/images/logo-l.svg"
            className="rounded-box common-image relative z-10"
          />
          <img
            src="./image/javajazz.png"
            className="background-image absolute top-0 left-0 w-full h-full object-cover z-0"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://dwp2020.oss-ap-southeast-5.aliyuncs.com/app/uploads/2023/12/IMG_1160.jpeg"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://ultrabali.com/wp-content/uploads/2023/09/RESISTANCE-BALI-2023-BILLING-IG-POST.png"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img src="./image/gwkbali.jpg" className="rounded-box common-image" />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/29/1d0f14f0-26ac-45ba-bc73-b130c5b77fd5.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/52cb5a67-fbb7-4259-b0d7-e5d13b0659e5.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/13/e771838d-e68d-4966-93f7-456b7dc902d6.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/bf46a2b5-051b-4619-8a10-cc37a551f39c.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/17/2128aa93-e976-4850-b2cc-ecaf8f883805.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/14/ed2870fd-729d-4041-bf9a-29879f8b4783.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/a0942917-77c8-47a1-9d3f-489d703a1519.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/14/a9e5ab4a-b160-49a7-81c3-338a9a19e33a.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/16/62f805a7-3201-4b11-a50c-7309d9c426eb.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/8aeda76c-e148-4225-a6cb-aaaa8bd98827.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/1f665cb3-c55b-4d21-be3b-3cb66a63ba0e.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/e4253d84-9365-45a6-be43-eb04df150536.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/16/c0ebd4b9-d880-4e3a-a1a1-87c8d8add952.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/27/c47ab3b6-6860-4b3a-89dd-fdd2fffe334c.webp"
            className="rounded-box common-image"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/28/e101c7ef-2245-4f1b-82d6-9d0ae2864d3e.webp"
            className="rounded-box common-image"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="w-200 text-white bg-[#176B87] hover:bg-[#04364A] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          See More
        </button>
      </div>
    </section>
    {/* header */}
  

    {/* about us */}
    <br />
    <br />
    <section className="d-flex bg-[#d4cece] text-black py-16">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3">
        <img src="./image/logo.jpeg" alt="Logo" />
        <div>
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            justo vitae leo scelerisque lacinia. Aenean vel dolor non velit
            efficitur fringilla. Suspendisse potenti. Mauris vel scelerisque
            nunc, eu convallis mi. Proin quis ultricies augue. Aliquam in urna
            nulla. Integer ac tincidunt nisl. Nullam aliquam, dolor nec congue
            eleifend, libero nulla dictum dolor, in volutpat libero nunc ac
            elit. Duis nec felis vel elit feugiat sollicitudin. Nullam posuere,
            leo eu bibendum congue, nunc arcu aliquam sem, ac iaculis dui nisl
            at velit.
          </p>
        </div>
      </div>
    </section>
    <br />
    <br />
    {/* about us */}


    {/* footer */}
    <section>
      <footer className="bg-gray-800 text-white p-4">
        <div className="mx-auto text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className="text-sm">
            © 2023 Nama Perusahaan. Hak Cipta Dilindungi.
          </h2>
          <h4 className="text-sm mt-2">Alamat Perusahaan, Kota, Negara</h4>
        </div>
      </footer>
    </section>
    {/* footer */}
  </section>
</>
  )
}
