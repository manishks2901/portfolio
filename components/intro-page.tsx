import { Button } from "@/components/ui/button";
import IconButton from "./icon-button";
import { MoveRight } from "lucide-react";

const IntroPage = () => {
  return (
    <div className="flex flex-wrap py-5">
      <div className="flex md:order-1 order-1 md:w-2/3 font-extrabold justify-center font-mono items-center">
        <h2 className="md:text-9xl text-4xl ">Full-Stack</h2>
      </div>
      <div className="flex md:order-2 order-4 md:w-1/3 justify-start items-center md:mt-0 mt-10">
          <Button
           size="lg"
           className="font-thin text-xl  bg-white  text-black hover:bg-white ring-2 ring-blue-600"
          >
            <i>Projects</i>
          </Button>
          <IconButton
            icon={<MoveRight size={35}/>}
            className="ml-2 bg-white  text-black"
          />
      </div>
      <div className="flex md:order-3 order-3 md:w-1/3 justify-center items-center pl-2   md:mt-6 mt-10">
        <h2 className="md:text-xl text-lg font-sans"> 
          My goal is to write <i><b>maintainable,clean</b></i> <br />
          and <i><b>understandble code</b></i> to process <br />
          development was enjoyable.
        </h2>
      </div>
      <div className="flex w-full  md:order-4 order-2 md:w-2/3 font-semibold md:justify-center justify-end font-mono mt-6" >
        <h2 className="md:text-9xl text-4xl">Developer</h2>
      </div>
    </div>
  );
};

export default IntroPage;