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
    <div>
        {!courses ? (
            <div>
                <p>No Data Found</p>
            </div>
        ):(getCourses().map((course)=>{

               return <Card key={course.id}
                course={course}/>
            }))}
       
        
    </div>
  )
}

export default Cards