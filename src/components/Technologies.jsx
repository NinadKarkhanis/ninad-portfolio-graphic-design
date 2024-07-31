import { SiCisco,SiPaloaltonetworks,SiKalilinux,SiWireshark } from "react-icons/si";
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
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <img className="h-20" src={Checkpoint}  />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKalilinux  className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiWireshark  className="text-7xl text-cyan-500" />
        </div>
        
    </div>
  </div>
  );
}

export default Technologies
