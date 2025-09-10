import ChatView from "@/components/custom/ChatView";
import React from "react";
import CodeView from "@/components/custom/CodeView";

const page = () => {
  return (
    <div className="p-3 pr-5 mt-3">
      <div className=" ml-80 grid grid-cols-1 md:grid-cols-3 gap-5">
       
        <ChatView />
        <div className="col-span-2">
          <CodeView />
        </div>
      </div>
    </div>
  );
};

export default page;


// import ChatView from "@/components/custom/ChatView";
// import React from "react";
// import CodeView from "@/components/custom/CodeView";
// import { Sidebar } from "@/components/ui/sidebar";

// const page = () => {
//   return (
//     <div className="p-3 pr-5 mt-3 relative">
//       <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
//         <div className="col-span-1 hidden md:block">
//           <Sidebar/>
//         </div >
//         <div className="col-span-2 md:col-span-2 lg:col-span-2">
//               <ChatView />
//         </div>
        
//         <div className="col-span-4">
//           <CodeView />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;