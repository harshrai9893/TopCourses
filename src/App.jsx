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

  useEffect(()=>{
    async function fetchData (){
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output= await response.json();
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
       filterData={filterData}/>
        </div>
       
        <div className='w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center 
        items-center min-h-[50vh]'>
         {
          loading?(<Spinner/>):(<Cards
       courses={Courses}/>)
         }
        </div>
       </div>
        
       
    </div>
  )
}

export default App