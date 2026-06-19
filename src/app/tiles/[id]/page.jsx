import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';


const TilesDetailsPage =async ({params}) => {
  
  const {id}=await params
  const res=await fetch(`http://localhost:5000/products`)
  const tilesData=await res.json()
  const detail=tilesData.find(td=>parseInt(td.id)==parseInt(id))

  return (
    <div className='container mx-auto max-w-7xl my-5 pl-2 pr-3  md:px-6 '>
 <Card>

  <div className='flex flex-col gap-2.5 lg:flex-row justify-between items-center'>
    <div>
  <Image src={detail?.image} alt={detail?.title} width={200} height={220} className='w-auto h-auto'/>
 </div>
 
 <div className='space-y-4'>
<p className='font-bold text-black text-end text-xl lg:text-2xl'>{detail?.title}</p>
<p className='font-semibold text-gray-600  lg:text-xl'>{detail?.description}</p>
<div className='flex justify-end items-center gap-4'>
  <p className='font-semibold text-gray-600 '>{detail?.dimensions}</p>
  <p className='font-semibold text-gray-600 '>{detail?.material}</p>
</div>
<p className='font-semibold text-gray-600 text-2xl flex justify-end'>{detail?.price}$</p>
 <div className="flex justify-end"><Button  variant="secondary" className='w-[150px]'>Buy Now</Button></div>
 </div>
  </div>


    </Card>

    </div>
   
  );
};

export default TilesDetailsPage;