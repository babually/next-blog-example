import { Button } from "./ui/button";
import Image from "next/image";
import kitten from '../public/kitten.jpeg'
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";


export function Hero() {
    return (
        <div className="container flex flex-col items-center space-y-12">
            <div className="pb-22 flex w-full max-w-sm space-x-2 py-14">
                <input type="email" placeholder="Email address" />
                <Button className="rounded" type="submit">Subscribe</Button>
            </div>
            <div className="flex flex-row space-x-4">
                {/* <div className="relative h-48 w-48 max-w-xs">
                      <Image 
                         className="bg-cover"
                         src={kitten}
                        //  width={500}
                        //  height={500}
                         alt="Picture of the kitten"
                      />
                      <Button className="absolute left-1/2 top-1/2 -translate-x-1/2 items-center text-white opacity-25" type="button">
                         Beauty
                      </Button>
                </div> */}
                <Card className={cn("h-[180px] w-[200px]")}>
                   
                </Card>
                <Card className={cn("h-[180px] w-[200px]")}>
                  {/* <Image 
                       className="bg-cover"
                       src={kitten}
                       alt="Picture of the author"
                    /> */}
                  {/* <Button variant="secondary">
                     Lint
                  </Button> */}
                </Card>
                <Card className={cn("h-[180px] w-[200px]")}>
                   
                </Card>
                <Card className={cn("h-[180px] w-[200px]")}>
                   
                </Card>
                <Card className={cn("h-[180px] w-[200px]")}>
                   
                </Card>
            </div>
            
        </div>
    );
}