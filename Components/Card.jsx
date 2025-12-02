import React from 'react'
import {FcLike} from 'react-icons/fc';

const Card = ({course}) => {
  return (
    <div className='w-[300px] bg-[#0b0b0b] rounded-lg overflow-hidden shadow-lg 
    transform hover:scale-105 transition-transform duration-200'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div>
                <button 
                className="absolute bottom-1 right-3 bg-white/90 p-1 rounded-full shadow-md 
                hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-400">
                    <FcLike fontSize ='1.75rem'/>
                </button>
            </div>

          </div>  
            
        
        <div className="px-4 py-3">
            <h3 className="text-white font-semibold text-lg leading-tight">{course.title}</h3>
            
            
        <p className="mt-2 text-gray-300 text-sm leading-snug max-h-14 overflow-hidden">{course.description}</p>
        
        
        </div>
         
    </div>
  )
}

export default Card