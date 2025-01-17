import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className='mt-16 item-center justify-center text-center '>
                <h1 className=' text-2xl md:text-4xl'>We're delighted to have you 
                <span className='text-pink-500'> Here! :)</span> </h1>
                <p className='mt-12' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem placeat, numquam nostrum repellendus maxime aut, fugit maiores dolores eum magnam corrupti neque explicabo consequuntur nesciunt, quidem iure assumenda dolor fuga Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore amet saepe, est odit dolorem ducimus sit quo, soluta ea quisquam id dolores ut, ad fugit consequuntur animi ipsum? Cum, minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam earum, dicta adipisci odit blanditiis aut veritatis nisi sit modi! Quisquam obcaecati sint autem reiciendis tenetur qui perferendis sed possimus.</p>
              <Link to="/">
              <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
              </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {list.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))    
                }
        </div>

    </div>
    </>
    
  )
}

export default Course
