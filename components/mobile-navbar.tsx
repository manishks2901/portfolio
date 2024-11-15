"use client"
import { useState } from "react";
import {Button} from "@/components/ui/button";
import { AlignCenter, X } from "lucide-react"
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "./icon-button";

const MobileNavbar:React.FC = () => {
    const [open,setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return ( 
        <>
        <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
            <AlignCenter size={20} />
        </Button>
        <Dialog
            open={open}
            as="div"
            className="relative z-40 lg:hidden"
            onClose={onClose}
        >
            {/* Background */}
            <div className="fixed inset-0 bg-black bg-opacity-25">
                {/* Dialog Position */}
                <DialogPanel className="relative ml-auto flex flex-col h-full w-full max-w-xs  overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                    {/* Close Button */}
                    <div className="">
                        <IconButton icon={<X size={20}/>} onClick={onClose} />
                    </div>
                    <div className="h-20 bg-blue-400 p-4">
                            <h1>hello</h1>
                        </div>
                </DialogPanel>
            </div>
        </Dialog>
        </>
     );
}



export default MobileNavbar;