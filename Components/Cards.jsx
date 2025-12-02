import React from 'react'
import Card from './Card'

const Cards = ({courses}) => {
    let allCourses =[];

    // returns you a list of all courses received from the api response
    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((courseData)=>{
                allCourses.push(courseData); 
            })
        })
        return allCourses;
    }
  return (
    <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-6 mb-10">
      {!courses ? (
            <div className="text-gray-300 text-lg">
                No Data Found
            </div>
        ):(getCourses().map((course)=>{

               return <Card key={course.id}
                course={course}/>
            }))}
       
        
    </div>
  )
}

export default Cards