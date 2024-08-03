import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  //console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
            <div className="modal-box dark:bg-slate-800 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                
                <h3 className="font-bold text-lg mb-10 dark:text-white">Login</h3>
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
                      {errors.password && <span className="text-sm mt-2 text-red-500">This field is required</span>}
                    </label>

                    <div className="flex justify-between items-center mt-8">
                      <button type="submit" className="bg-black text-white px-3 w-28 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-indigo-500 dark:text-white">Login</button>
                      <span className="text-end">Not Registered? <Link to="/signup" className="underline text-indigo-500 cursor-pointer">Sign Up</Link></span>
                      {/* <span><a>Forgot Password</a></span> */}
                    </div>
                </div>
                </form>
            </div>
            </dialog>
        </div>
    </>
  )
}
