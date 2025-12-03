import React from 'react'

const Filter = ({filterData,category,setCategory}) => {

    function filterHandler(title){
        setCategory(title);

    }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center '>
        {
        filterData.map((data)=>{
         return <button 
       className={`text-lg px-3 py-1 rounded-md font-medium transition-all duration-200 border-2
            ${category === data.title ? "bg-green-500 text-black border-green-500" :
                "bg-black text-white border-transparent hover:bg-opacity-70 hover:scale-105"}
          `}
       key={data.id}
       onClick={()=>filterHandler(data.title)}
       >
                {data.title}
            </button>
        })}
    </div>
  )
}

export default Filter