
// interface ComponentNameProps {
//   propName: type;
// }

export default function Collection() {
  return (
     <main className="h-screen w-screen text-white grid place-content-center items-center">
       <div className="flex gap-3 items-center">
         <img
           className="rotation"
           src="/assets/icons/wheel_white.svg"
           alt="wheel icon"
           width={30}
           height={30}
         />
       <h1 className="text-5xl uppercase">Collection <span className="text-xs align-top">(01)</span></h1>
       </div>
       
     </main> 
  );
}