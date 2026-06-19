import AllTilesCard from '@/components/AllTilesCard';
import React from 'react';
const getTiles=async()=>{
const res=await fetch('http://localhost:5000/products')
const data=await res.json()
return data
}



const AllTilesPage =async() => {
  const allTiles=await getTiles()
  
  return (
    <div className='container mx-auto max-w-7xl'>
      <div className='my-5 grid sm:grid-cols-2 pl-4 md:grid-cols-3 md:px-3 lg:grid-cols-4 lg:px-0 gap-5'>
        {
          allTiles.map(tile=>{
            return <AllTilesCard key={tile.id} tile={tile}></AllTilesCard>
          })
        }
      </div>
    </div>
  );
};

export default AllTilesPage ;