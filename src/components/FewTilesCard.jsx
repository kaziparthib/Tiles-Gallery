import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FewTilesCard = ({s}) => {
  return (
   <Card className=' flex flex-col justify-center items-center w-full'>
      <div>
 <Image src={s?.image} alt={s?.title} width={200} height={220} className='w-[200px] h-[220px] rounded-xl'/>

      </div>
      <p className='font-black font-bold text-2xl'>{s?.title}</p>
   <Link href={`/tiles/${s.id}`}> <Button variant="secondary" className='w-[200px]'>View Details</Button></Link>
    </Card>
  );
};

export default FewTilesCard;