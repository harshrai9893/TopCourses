import React, { useEffect ,useState } from 'react'
import Navbar from '../Components/Navbar'
import Filter from '../Components/Filter'
import Cards from '../Components/Cards'
import { apiUrl,filterData } from './data'
import { toast } from 'react-toastify'
import Spinner from '../Components/Spinner'
import './App.css';

const App = () => {

  const[Courses,setCourses]=useState([]);
  const[loading,setLoading]= useState(false);
  const[category,setCategory]= useState(filterData[0].title);

  useEffect(()=>{
    async function fetchData (){
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output= await response.json();
        console.log("API output:", output);
        console.log("output.data:", output.data);
        // save data into a variable
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return (
    <div className='min-h-screen flex flex-col bg-gray-900 text-white'>
      
      <div >
        <Navbar/>
      </div>
      

       <div className="">
        <div >
          <Filter
            filterData={filterData}
             category={category}
              setCategory={setCategory}/>
        </div>
       
        <div className='w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center 
        items-center min-h-[50vh]'>
         {
          loading?(<Spinner/>):(<Cards
       courses={Courses}
       category={category}/>)
         }
        </div>
       </div>
        
       
    </div>
  )
}

export default App