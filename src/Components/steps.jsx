const Steps = ({key,step,number,desc, currentStep}) => {
    return ( 
     <div className="flex flex-row mt-5 text-white text-md text-left " key={key}>
         <div className="border-2 border-white h-6 w-6 flex justify-center items-center rounded-full mt-2 text-xs" 
         style={{ backgroundColor: currentStep === number ? 'rgb(224, 236, 247, 0.984)' : '', color: currentStep === number ? 'black' : '', }  }
         >
             {number} </div>
         <div className="text-sm ml-5">
            <div className=" text-slate-400 "> {step} </div>
            <div className="text-white font-medium">{desc}</div>
         </div>
     </div>
     
     );
}
 
export default Steps;