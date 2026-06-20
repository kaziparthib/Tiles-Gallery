import Marquee from "react-fast-marquee";
import FewTilesCard from './FewTilesCard';
import { Button } from "@heroui/react";
import Link from "next/link";
const Tiles = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return data
}
const Feature = async () => {
  const tiles = await Tiles()
  const some = tiles.slice(0, 4)
  
  return (
    <div className='container mx-auto max-w-7xl'>

      <div>
         <div className="flex justify-between gap-4 items-center bg-slate-50 py-4 px-2 container mx-auto">
     <Link href={"/all-tiles"}> <Button variant="secondary" className='w-[200px]'>See All Tiles</Button></Link>
      <Marquee pauseOnHover={true} speed={100}>
        <ul className="flex justify-center items-center gap-15">
{some.map((n) => (
          <li key={n.id} className=" font-bold text-xl">{n.title}</li>
        ))}

        </ul>
        
      </Marquee>
    </div>
      </div>
      <div>
        <div className='my-5 grid sm:grid-cols-2 pl-4 md:grid-cols-3 md:px-3 lg:grid-cols-4 lg:px-0 gap-5'>
          {
            some.map(s => {
              return <FewTilesCard key={s.id} s={s}></FewTilesCard>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Feature;