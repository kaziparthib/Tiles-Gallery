import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTilesCard = ({tile}) => {
  
  return (
    <Card className=' flex flex-col justify-center items-center w-full'>
      <div>
 <Image src={tile?.image} alt={tile?.title} width={200} height={220} className='w-[200px] h-[220px] rounded-xl'/>

      </div>
      <p className='font-black font-bold text-2xl'>{tile?.title}</p>
   <Link href={`/tiles/${tile.id}`}> <Button variant="secondary" className='w-[200px]'>View Details</Button></Link>
    </Card>
      
    
  );
};

export default AllTilesCard;