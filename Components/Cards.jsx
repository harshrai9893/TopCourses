import React, { useState } from 'react'
import Card from './Card'

const Cards = ({courses,category}) => {
    
    const[likedCourses,setLikedCourses]=useState([]);

   
    function getCourses(){
        if (!courses) return []; 

         // returns you a list of all courses received from the api response
        if(category==="All"){
             let allCourses =[];
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((courseData)=>{
                allCourses.push(courseData); 
            })
        })
        return allCourses;
       }
       else{
        // main sirf specific category ka array pass karunga
        return courses[category];
       }
       
    }
  return (
    <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-6 mb-10">
      {!courses ? (
            <div className="text-gray-300 text-lg">
                No Data Found
            </div>
        ):(getCourses().map((course)=>(

                <Card key={course.id}
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                />
            )))}
     
       
        
    </div>
  )
}

export default Cards