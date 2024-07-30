import { SiCisco } from "react-icons/si";
import { SiPaloaltonetworks } from "react-icons/si";
import Checkpoint from "../assets/checkpoint-fw.png"

const Technologies = () => {
  return(
  <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCisco className="text-7xl text-white-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPaloaltonetworks className="text-7xl text-orange-500" />
        </div>
        
    </div>
  </div>
  );
}

export default Technologies
