import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri"
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";



const SocialMedia = () => {
    return ( 
        <div className="mt-14 pt-4 flex justify-center items-center">
            <div className="">
                <Button className="rounded-full mr-2"><SiGithub/>Github</Button>
                <Button className="rounded-full mr-2"><SiLinkedin/>LinkedIn</Button>
                <Button className="rounded-full mr-2"><SiTelegram/>Telegram</Button>
                <Button className="rounded-full mr-2"><RiTwitterXLine/>Twitter</Button>
                <Button className="rounded-full"><SiInstagram/>Instagram</Button>
            </div>
        </div>
     );
}
 
export default SocialMedia;