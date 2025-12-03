import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course,likedCourses,setLikedCourses}) => {

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // pehle se like hua pada hai toh hum ise unlike krne wale hai
            setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("liked removed");
        }
        else{
            // pehle se like nahi h ye course
            // insert karna h ye course liked courses me
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                // non-empty pehle se
                setLikedCourses((prev)=>[...prev,course.id]);
            };
            toast.success("liked successfully");
        };

    }
  return (
    <div className='w-[300px] bg-[#0b0b0b] rounded-lg overflow-hidden shadow-lg 
    transform hover:scale-105 transition-transform duration-200'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div>
                <button onClick={clickHandler}
                className="absolute bottom-[-12px] right-3 bg-white/90 p-1 rounded-full shadow-md 
                hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-400">
                   {
                    likedCourses.includes(course.id)?
                    (<FcLike fontSize ='1.75rem'/>) :
                    (<FcLikePlaceholder fontSize ='1.75rem'/>)
                   }
                    
                </button>
            </div>

          </div>  
            
        
        <div className="px-4 py-3">
            <h3 className="text-white font-semibold text-lg leading-tight">{course.title}</h3>
            
            
        <p className="mt-2 text-gray-300 text-sm leading-snug max-h-14 overflow-hidden">
            {
            course.description.length>100?
            (course.description.substr(0,100))+"...":
            (course.description)
            }
            </p>
        
        
        </div>
         
    </div>
  )
}

export default Card