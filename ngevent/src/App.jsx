import { useState } from 'react'
import './App.css'

function App() {
  return ( 
    <>
    {/* login */}
        <section class="bg-gray-50" id="login-section">
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
             <section class="bg-gray-50" id="register-section">
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
                            >Your email</label
                        >
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
                            >Phone Number</label
                        >
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
                            >Password</label
                        >
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
                            >Login here</a
                        >
                        </p>
                    </form>
                    </div>
                </div>
                </div>
            </section> 


    <section>
      <div id="background-img"></div>
      <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-[2000px] gap-8 flex items-center">
          <h2 class="text-3xl font-bold sm:text-4xl text-[#176B87]">Products</h2>
          {/* <SearchBar /> */}
        </div>
        <p v-if="gadgets.length === 0" class="text-xl text-center mt-16">No matching product</p>
        <div
          class="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center"
        >
          {/* <GadgetCard v-for="gadget in gadgets" :key="gadget.id" :gadget="gadget" /> */}
        </div>
      </div>
    </section>
    </>
    )
}

export default App
