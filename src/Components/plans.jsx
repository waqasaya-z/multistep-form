const Plans = ({handleToggle, yearly, handlePlanSelection, css, selectedPlan, plans, error }) => {

  const planElements = Object.keys(plans).map((key) => {
    const plan = plans[key];
    const isSelected = selectedPlan && selectedPlan.id === plan.id;
    return (
      <div
        className={`border-2  ${ isSelected ? css.background : ''} ${ isSelected ? css.border : 'border-gray-500'}  hover:${css.border} hover:${css.background} rounded-lg mr-5 p-5 w-4/5 cursor-pointer`}
        key={key}
        onClick={() => handlePlanSelection(key)}
      >
        <img src={plans[key].imageUrl} alt="" />
        <div className="mt-8">
          <h2 className="font-black text-[#02295a]">{`${plans[key].name}`}</h2>
          <div className=" text-sm  font font-notosans">
         { !yearly && <p> {`$${plans[key].price}/mo`} </p> }
         { yearly && <p> {`$${plans[key].yrprice}/yr`} </p> }
         { yearly && <p> {`${plans[key].freeTrial}`} </p> }
         </div>
        </div>
      </div>
    );
  });


  return (
    <div className="border-2 border-white  flex flex-col h-3/4">
      <div>
        <h1 className="font-black mt-12 text-3xl my-1 text-[#02295a]">
          
          Select your plan
        </h1>
        <p className="mt-2 font font-notosans">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex flex-row mt-5 w-4/5">{planElements}</div>

   
        <div className="bg-alice-blue-500 p-2 mt-6 w-4/5 flex flex-row items-center justify-center">
        <span className="mr-3 text-sm font-black text-blue-950 dark:text-blue-950">
              Monthly
            </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="checkbox" className="sr-only peer" 
            
            onChange={handleToggle}
            checked={yearly}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-black text-blue-950 dark:text-blue-250">
              Yearly
            </span>
          </label>
        </div>
      
      <div className="mt-10 mr-8 flex justify-center items-center">
        {error && <p className="text-red-600 text-md font-semibold "> Please Select a Plan! </p>}
      </div>

    </div>
  );
};

export default Plans;
