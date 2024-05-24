import React from 'react'

function Coursecards({item}) {
    //console.log(item);
  return (
    <>
        <div className="my-4 p-3">
            <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt={item.name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">{item.price}</div> 
                    <div className="btn btn-outline dark:bg-indigo-500 dark:text-white dark:border-none">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Coursecards
