import Image from "next/image";
import kaju from '../public/blog/kaju.jpg'
import ian from '../public/blog/ian.jpg'
import eljusuf from '../public/blog/el-jusuf.jpg'
import pau from '../public/blog/pau.jpg'

export function RecentPost() {
    return (
        <div className="my-4">
            <div className="mb-2 grid grid-cols-[90px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                <div className="">
                    <Image
                        src={kaju} 
                        alt="Image" 
                        className="w-30 h-20 rounded-md bg-cover object-cover"
                    />
                </div>
                                    
                <div className="mt-3 space-x-4 space-y-1 pl-4">
                    <p className="text-semibold leading-none text-slate-900">
                        Your call has been confirmed by teller form our call.. 
                    </p>
                     <p className="text-sm ">
                        2 hours ago
                     </p>
                </div>
            </div>

            <div className="mb-2 grid grid-cols-[90px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                <div className="">
                    <Image
                        src={ian} 
                        alt="Image" 
                        className="w-30 h-20 rounded-md bg-cover object-cover"
                    />
                </div>
                                    
                <div className="mt-3 space-x-4 space-y-1 pl-4">
                    <p className="text-semibold leading-none text-slate-900">
                        You have a new message about the latest products from our...
                    </p>
                     <p className="text-sm text-muted-foreground">
                        10 hours ago
                     </p>
                </div>
            </div>

            <div className="mb-2 grid grid-cols-[90px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                <div className="">
                    <Image
                        src={kaju} 
                        alt="Image" 
                        className="w-30 h-20 rounded-md bg-cover object-cover"
                    />
                </div>
                                    
                <div className="mt-3 space-x-4 space-y-1 pl-4">
                    <p className="text-semibold leading-none text-slate-900">
                         Your subscription is expiring soon, you need to renewe your...
                    </p>
                     <p className="text-sm text-muted-foreground">
                        9 hours ago
                     </p>
                </div>
            </div>

            <div className="mb-2 grid grid-cols-[90px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                <div className="">
                    <Image
                        src={kaju} 
                        alt="Image" 
                        className="w-30 h-20 rounded-md bg-cover object-cover"
                    />
                </div>
                                    
                <div className="mt-3 space-x-4 space-y-1 pl-4">
                    <p className="text-semibold leading-none text-slate-900">
                        Your Request have been accepted by the user you follow and be...                     </p>
                     <p className="text-sm text-muted-foreground">
                        1 hour ago
                     </p>
                </div>
            </div>

        </div>
    );
}