import IconButton from "./icon-button";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";


const ReadMoreButtons = () => {
    return ( 
        <>
        <Button className="h-12 w-40 rounded-full mr-2 bg-white text-black hover:bg-white">
            Read More 
        </Button>
        <IconButton icon={<MoveRight/>} className="h-12 w-12 bg-white text-black"/>
        </>
     );
}
 
export default ReadMoreButtons;