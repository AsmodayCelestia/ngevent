export default function Register() {
    return (
      <>
<section className="bg-black" id="register-section">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="register-username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Enter your username ..."
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="register-email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="register-password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              autoComplete="off"
              v-model="register.password"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#176B87] hover:bg-[#04364A] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500">
            Already have an account?
            <a href="#" className="font-medium hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
      </>
    )
}