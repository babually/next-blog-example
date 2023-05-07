/* eslint-disable @next/next/no-img-element */
import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { RecentPost } from "./recentPost";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import aliona from '../public/blog/aliona.jpg'
import feyza from '../public/blog/feyza.jpg'
import kaju from '../public/blog/kaju.jpg'
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const recentPosts = [
   {
      image: "../public/blog/anh.jpg",
      title: "Your call has been confirmed",
      description: "22 hour ago"
   },
   {
      image: "",
      title: "You have a new message!",
      description: "10 hour ago"
   },
   {
      image: "",
      title: "Your subscription is expiring soon!",
      description: "9 hour ago"
   },
   {
      image: "",
      title: "Your Request have been accepted by me and All of us",
      description: "1 hour ago"
   },
]


export function Testimonial() {
    return (
        <div className="container flex flex-col items-center space-y-12 ">
           <p className="mt-10 text-4xl font-medium">
             Our Latest Blogs.
           </p>
           <div className="flex-1 space-y-2 pt-2 ">
             <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                   <TabsTrigger value="all">All</TabsTrigger>
                   <TabsTrigger value="travel">Travel</TabsTrigger>
                   {/* <TabsTrigger value="all">Fashion</TabsTrigger>
                   <TabsTrigger value="all">Art</TabsTrigger>
                   <TabsTrigger value="all">Life Style</TabsTrigger>
                   <TabsTrigger value="all">Architecture</TabsTrigger>
                   <TabsTrigger value="all">Technology</TabsTrigger> */}
                </TabsList>
                <TabsContent value="all">
                  <Card>
                     <div className="grid grid-cols-3 gap-6">
                        <div className="mx-auto p-4">
                           <div className="">
                              <Image
                                  src={aliona}
                                  className="w-50 h-40 rounded-md object-cover"
                                  alt={"Image of anh"}                 
                              />
                              
                              <p className="text-bold py-2 text-slate-900">
                                This is the most beautifully Post from our Editoor
                              </p>
                           </div>
                           
                           <RecentPost/>
                             
                        </div>
                        <div className="mx-auto p-4">
                           <div className="">
                              <Image
                                src={aliona}
                                className="w-50 h-40 rounded-md object-cover"
                                alt={"Image of anh"}                         
                             />
                             <p className="text-semibold py-2 text-slate-900">
                                This is the most beautifully Post from our Editoor
                             </p>
                           </div>
                           <RecentPost/>
                             
                        </div>
                        <div className="mx-auto p-4">
                           <div className="">
                              <Image
                                src={feyza}
                                className="w-50 h-40 rounded-md object-cover"
                                alt={"Image of anh"}                         
                             />
                             <p className="text-semibold py-2 text-slate-900">
                              This is the most beautifully Post from our Editoor
                             </p>
                           </div>
                           <RecentPost/>
                        </div>
                      </div>
                  </Card>
                  
                </TabsContent>
                <TabsContent value="travel">
                    <div className="grid grid-cols-3 gap-4">
                       <div className="bg-indigo-500"></div>
                       <div className="bg-indigo-500"></div>
                       <div className="bg-indigo-500"></div>
                    </div>
                </TabsContent>
             </Tabs>
           </div>
        </div>
    );
}