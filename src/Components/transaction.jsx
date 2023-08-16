import React, { useState } from 'react';

const Transaction = ({
  planName,
  planPriceRef,
  totalPrice,
  selectedAddOns,
  yearly,
  handleClick
}) => {
   const [planDuration, setPlanDuration] = useState( yearly ? 'yr' : 'mo' );
   const [planDurationName, setPlanDurationName] = useState(yearly ? 'Yearly' : 'Monthly');
  
  // const [grandTotal, setGrandTotal] = useState(() => planPriceRef.current + totalPrice);
  let grandTotal;
  if (planPriceRef.current !== 0) {
    grandTotal = planPriceRef.current + totalPrice;
  }

  const SelectedAdds = Object.keys(selectedAddOns).map((key) => {
    return (
      <div key={key} className="flex flex-row justify-between items-center">
        <div>{selectedAddOns[key].name}</div>
        <div className=' text-blue-900 font-semibold '>+${selectedAddOns[key].price}/{planDuration}</div>
      </div>
    );
  });

  return (
    <div className="border-2 border-white  h-3/4">
      <div>
        <h1 className="font-black mt-12 text-3xl my-1 text-[#02295a]">
          Finishing Up
        </h1>
        <p className="mt-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="flex flex-col items-center mt-8 w-5/5">
        <div className=" bg-alice-blue-300 w-3/5 justify-center items-center rounded-md">
          <div className='flex flex-col mb-4'>
          <div className="flex flex-row justify-between font-black text-sm text-[#02295a] mt-2 ml-2">
            <div> {planName} ({planDurationName}) </div>
            <div> ${planPriceRef.current}/{planDuration} </div>
          </div>
          <p onClick={handleClick} className='text-xs text-slate-400 underline cursor-pointer hover:text-blue-800 ml-2'> Change </p>
          </div>
          <hr />
          <div className='text-sm text-slate-400 p-2'>{SelectedAdds}</div>
        </div>

        <div className="flex flex-row justify-between w-3/5 mt-5">
          <div className='text-slate-400 text-sm ml-4'> Total (per {planDurationName.toLocaleLowerCase().substring(0, planDurationName.length - 2)}) </div>
          <div className=' text-blue-700 font-bold'> +${grandTotal}/{planDuration}</div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
