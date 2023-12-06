import { useState } from 'react'
import './App.css'

function App() {
  return ( 
    <>
    {/* navbar */}
    <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
    {/* navbar */}

    {/* login */}
        <section class="bg-black" id="login-section">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6">
                            <button type="submit" class="w-full text-white bg-[#176B87] hover:bg-[#04364A] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Sign in
                            </button>
                            <p class="text-sm font-light text-gray-500">
                                Don’t have an account yet?
                                <a class="font-medium text-primary-600 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    {/* register */}
             <section class="bg-black" id="register-section">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
                    >
                        Create an account
                    </h1>
                    <form class="space-y-4 md:space-y-6">
                        <div>
                          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                          <input
                              type="text"
                              id="register-username"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="Enter your username ..."
                              autocomplete="off"
                          />
                        </div>
                        <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
                              >Your email</label>
                          <input
                              type="email"
                              id="register-email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="name@company.com"
                              autocomplete="off"
                          />
                        </div>
                        <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900"
                              >Phone Number</label>
                          <input
                              type="text"
                              id="register-phone"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="Enter your phone-number ..."
                              autocomplete="off"
                          />
                        </div>
                        <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
                              >Password</label>
                          <input
                              type="password"
                              id="register-password"
                              placeholder="••••••••"
                              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              autocomplete="off"
                              v-model="register.password"
                          />
                        </div>
                        <button
                        type="submit"
                        class="w-full text-white bg-[#176B87] hover:bg-[#04364A] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                        Create an account
                        </button>
                        <p class="text-sm font-light text-gray-500">
                        Already have an account?
                        <a href="#" class="font-medium hover:underline" 
                            >Login here</a>
                        </p>
                    </form>
                    </div>
                </div>
                </div>
            </section> 
    {/* register */}

    <section>
      {/* header */}
      <div>
          <div className='flex justify-center'>
            <img src="./image/logo.jpeg" alt="Logo" className='w-36 h-36'/>
          </div>
          <p class="text-xl mt-4 text-center">Unlock Unforgettable Experience</p>
          <h2 class="text-3xl font-bold text-[#176B87] text-center">At This Moment We Are Infinity</h2>
        <br /><br />
      </div>
      <section class="relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-8 bg-black z-20"></div>
        <div class="absolute top-0 left-2 md:p-8 text-left z-30">
            <h2 class="text-2xl md:text-sm font-bold text-black sm:text-3xl bg-black ml-24">
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </h2>
        </div>
        <div class="flex justify-center">
            <iframe
                class="w-screen max-w-screen-2xl h-96 md:h-144 lg:h-96"
                src="https://www.youtube.com/embed/gxq95YTfrTE?si=OKYm_4r2ZIXa67FF&amp;controls=0&amp;start=172&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
        <br /><br />
        <div class="mt-7 mx-10 flex carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/12/1/402513f3-5b68-4c46-952d-650a066f91b2.webp" class="rounded-box common-image" />
          </div> 
          <div class="carousel-item">
            <img src="./image/hindia.jpg" class="rounded-box common-image" />
          </div> 
          <div class="carousel-item relative">
            <img src="https://www.javajazzfestival.com/images/logo-l.svg" class="rounded-box common-image relative z-10" />
            <img src="./image/javajazz.png" class="background-image absolute top-0 left-0 w-full h-full object-cover z-0" />
          </div>
          <div class="carousel-item">
            <img src="https://dwp2020.oss-ap-southeast-5.aliyuncs.com/app/uploads/2023/12/IMG_1160.jpeg" class="rounded-box common-image" />
          </div> 
          <div class="carousel-item">
            <img src="https://ultrabali.com/wp-content/uploads/2023/09/RESISTANCE-BALI-2023-BILLING-IG-POST.png" class="rounded-box common-image" />
          </div> 
          <div class="carousel-item">
            <img src="./image/gwkbali.jpg" class="rounded-box common-image" />
          </div> 
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/29/1d0f14f0-26ac-45ba-bc73-b130c5b77fd5.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/52cb5a67-fbb7-4259-b0d7-e5d13b0659e5.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/13/e771838d-e68d-4966-93f7-456b7dc902d6.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/bf46a2b5-051b-4619-8a10-cc37a551f39c.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/17/2128aa93-e976-4850-b2cc-ecaf8f883805.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/14/ed2870fd-729d-4041-bf9a-29879f8b4783.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/a0942917-77c8-47a1-9d3f-489d703a1519.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/14/a9e5ab4a-b160-49a7-81c3-338a9a19e33a.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/16/62f805a7-3201-4b11-a50c-7309d9c426eb.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/8aeda76c-e148-4225-a6cb-aaaa8bd98827.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/22/1f665cb3-c55b-4d21-be3b-3cb66a63ba0e.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/21/e4253d84-9365-45a6-be43-eb04df150536.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/16/c0ebd4b9-d880-4e3a-a1a1-87c8d8add952.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/27/c47ab3b6-6860-4b3a-89dd-fdd2fffe334c.webp" class="rounded-box common-image" />
          </div>
          <div class="carousel-item">
            <img src="https://customer-api-files.s3.ap-southeast-3.amazonaws.com/production/events/2023/11/28/e101c7ef-2245-4f1b-82d6-9d0ae2864d3e.webp" class="rounded-box common-image" />
          </div>
        </div>
        <div class="mt-10">
          <button class="w-200 text-white bg-[#176B87] hover:bg-[#04364A] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              See More
          </button>
        </div>
    </section>
    {/* header */}

    <section>
    </section>
    {/* about us */}
    <br /><br />
    <section className="d-flex bg-[#d4cece] text-black py-16">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3">
        <img src="./image/logo.jpeg" alt="Logo"/>
        <div>
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            justo vitae leo scelerisque lacinia. Aenean vel dolor non velit
            efficitur fringilla. Suspendisse potenti. Mauris vel scelerisque
            nunc, eu convallis mi. Proin quis ultricies augue. Aliquam in urna
            nulla. Integer ac tincidunt nisl. Nullam aliquam, dolor nec congue
            eleifend, libero nulla dictum dolor, in volutpat libero nunc ac elit.
            Duis nec felis vel elit feugiat sollicitudin. Nullam posuere, leo eu
            bibendum congue, nunc arcu aliquam sem, ac iaculis dui nisl at velit.
          </p>
        </div>
      </div>
    </section>
    <br /><br />
    {/* about us */}

    {/* footer */}
    <section>
    <footer class="bg-gray-800 text-white p-4">
        <div class="mx-auto text-center">
          <br /><br /><br /><br /><br /><br />
            <h2 class="text-sm">&copy; 2023 Nama Perusahaan. Hak Cipta Dilindungi.</h2>
            <h4 class="text-sm mt-2">Alamat Perusahaan, Kota, Negara</h4>
        </div>
    </footer>
    </section>
    {/* footer */}

    </section>
    </>
  )
}

export default App
