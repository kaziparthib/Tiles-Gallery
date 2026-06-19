import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTilesCard = ({tile}) => {
  
  return (
    <Card className='border-2 flex flex-col justify-center items-center w-full'>
      <div>
 <Image src={tile?.image} alt={tile?.title} width={300} height={320} className='object-cover w-[300px] h-[320px] rounded-xl'/>

      </div>
      <p className='font-black font-bold text-2xl'>{tile?.title}</p>
   <Link href={'/'}> <Button variant="secondary" className='w-[200px]'>View Details</Button></Link>
    </Card>
      
    
  );
};

export default AllTilesCard;