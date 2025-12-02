import React, { useEffect ,useState } from 'react'
import Navbar from '../Components/Navbar'
import Filter from '../Components/Filter'
import Cards from '../Components/Cards'
import { apiUrl,filterData } from './data'
import { toast } from 'react-toastify'
import Spinner from '../Components/Spinner'

const App = () => {

  const[Courses,setCourses]=useState(null);
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
    <div>
      <div>
        <Navbar/>
      </div>
       
        <div>
         <Filter
       filterData={filterData}/>
        </div>
       
        <div>
         {
          loading?(<Spinner/>):(<Cards
       courses={Courses}/>)
         }
        </div>
       
    </div>
  )
}

export default App