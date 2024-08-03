import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  //console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
    <Navbar />
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center self-center pb-32 pt-32 dark:bg-slate-900 dark:text-white">
          <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
              <form onSubmit={handleSubmit(onSubmit)} method="">
                <h3 className="font-bold text-lg mb-10">Sign Up</h3>
                <div>
                  <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text dark:text-white">Email</span>
                      </div>
                      <input type="email" name="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered w-full" />
                      {errors.email && <span  className="text-sm mt-2 text-red-500">This field is required</span>}
                    </label>

                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text dark:text-white">Password</span>
                      </div>
                      <input type="password" name="password" {...register("password", { required: true })} placeholder="Enter you password" className="input input-bordered w-full" />
                      {errors.password && <span  className="text-sm mt-2 text-red-500">This field is required</span>}
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text dark:text-white">Confirm Password</span>
                      </div>
                      <input type="password" name="password_confirmation" {...register("password_confirmation", { required: true })} placeholder="Enter you password" className="input input-bordered w-full" />
                      {errors.password_confirmation && <span  className="text-sm mt-2 text-red-500">This field is required</span>}
                    </label>

                    <div className="flex justify-between items-center mt-8">
                      <button type="submit" className="bg-black text-white px-3 w-28 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-indigo-500 dark:text-white">Submit</button>
                      <span className="text-end underline" onClick={()=>document.getElementById("my_modal_3").showModal()}>Go to Login</span>
                      
                    </div>
                </div>
              </form>
              <Login/>
          </div>
        </div>
        <Footer />
    </>
  )
}
