import { redirect } from "next/navigation";
import Link from "next/link";
import ClientFlashComponent from "../components/ClientFlashComponent";
// import { MyResponse } from "../register/page";
import { cookies } from "next/headers";
import { access } from "fs";

export type MyResponse<T = {}> = {
  message?: string;
  data?: T;
};

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(email, password);

    const response = await fetch("https://vercel.com/herus-projects/ngevent-1vqn/api/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const result = (await response.json()) as MyResponse<{
      accessToken: string;
    }>;

    if (!response.ok) {
      return redirect("/login?error=" + result.message);
    }

    // console.log(result, "<<<<result");

    if (result.data)
      cookies().set("Authorization", `Bearer ${result.data.accessToken}`);

    return redirect("/");
  };
  return (
    <>
      <section className="bg-black" id="login-section">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <ClientFlashComponent />
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
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
                    name="password"
                    type="password"
                    id="password"
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
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?
                  <a className="font-medium text-primary-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
