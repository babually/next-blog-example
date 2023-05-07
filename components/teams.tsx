import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from 'next/image'
import juan from '../public/pics/juan.jpg'
import bro from '../public/pics/bro.jpg'
import bay from '../public/pics/bay.jpg'
import nilov from '../public/pics/nilov.jpg'
import chloe from '../public/pics/chloe.jpg'
import cottonbro from '../public/pics/cottonbro.jpg'


export function OurTeam() {
    return (
        <div className="container mt-10 py-12">
           <div className="flex justify-between">
                <p className="text-2xl">Meet Our Team</p>
                <Button>See All</Button>
            </div>
           <div className="mt-4 grid grid-cols-6 gap-4">
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30 pb-2">
                <Image 
                   src={juan}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Juan Peter</p>
              <p className="text-1xl pt-1 font-light">CEO</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30 pb-2">
                <Image 
                   src={bay}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Bayan Michael</p>
              <p className="text-1xl pt-1 font-light">Founder</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30 pb-2">
                <Image 
                   src={bro}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Andrea Peter</p>
              <p className="text-1xl pt-1 font-light">Founder</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30 pb-2">
                <Image 
                   src={cottonbro}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Cotton Bro</p>
              <p className="text-1xl pt-1 font-light">Co-Foundr</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30 pb-2">
                <Image 
                   src={chloe}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Griffin Pocket</p>
              <p className="text-1xl pt-1 font-light">Developer</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <div className="h-30 w-30  pb-2">
                <Image 
                   src={nilov}
                   alt="image"
                   className="rounded-full"
                />
              </div>
              <p className="text-1xl pt-4 font-bold">Nilov Mikhlovich</p>
              <p className="text-1xl pt-1 font-light">Designer</p>
            </div>
              
           </div>
        </div>
    );
}