import React from 'react'
import Coursecards from './Coursecards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="pt-32 items-center justify-center text-center">
              <h1 className="text-2xl md:text-4xl">
                We are delighted to have <span className="text-indigo-500">you on our courses.</span>
                <p className="mt-12 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos maiores libero molestias pariatur perferendis neque? Ratione ad demo
                </p>
                <Link to="/">
                  <button className="mt-6 w-28 btn btn-neutral hover:bg-indigo-500 hover:border-indigo-500 hover:text-white py-0 dark:bg-indigo-500 dark:text-white">Back</button>
                </Link>
                
              </h1>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {
                list.map((item) =>(
                  <Coursecards item={item} key={item.id}/>
                ))
              }
            </div>
        </div>
    </>
  )
}

export default Course
