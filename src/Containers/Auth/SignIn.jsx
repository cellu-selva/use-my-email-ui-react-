import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { urlProperties } from "../../Utils/constant";
import { post } from "../../Utils/rest-util";

const SignIn = () => {
  const { auth, setAuth } = useContext(AppContext);
  const history = useHistory();
  debugger
  if (auth && auth.token) {
    history.push('/dashboard');
  }
  const login = async () => {
    const { LOGIN, USER_API } = urlProperties;
    const response = await post(`${USER_API}/${LOGIN}`, credential);
    setAuth(response);
    debugger
    history.replace('/dashboard');
  }

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  })
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{ 'background-image': "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')" }}
          ></div>
          <div className="w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="email"
                  onChange={(e) => {
                    setCredential({
                      ...credential,
                      email: e.target.value,
                    })
                  }}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(e) => {
                    setCredential({
                      ...credential,
                      password: e.target.value,
                    })
                  }}
                />
                {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
              </div>
              <div className="mb-4">
                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id"
                  onChange={(e) => {
                    setCredential({
                      ...credential,
                      rememberMe: e.target.value,
                    })
                  }} />
                <label className="text-sm" for="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => {
                    login();
                  }}
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./register.html"
                >
                  Create an Account!
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./forgot-password.html"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
