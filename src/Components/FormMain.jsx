import React, { useState, useRef, useEffect } from "react";
import BackgroundSideBar from "../images/bg-sidebar-desktop.svg";
import PersonalInfo from "./personalInfo";
import Plans from "./plans";
import AddsOn from "./addsOn";
import Transaction from "./transaction";
import Submission from "./submission";
import Steps from "./steps";
import IconPro from "../images/icon-pro.svg";
import IconAdv from "../images/icon-advanced.svg";
import IconArc from "../images/icon-arcade.svg";

function FormMain() {
  const [currentStep, setCurrentStep] = useState(1);
  const [yearly, setYearly] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [css, setCSS] = useState({
    border: "",
    background: "",
  });
  const [added, setAdded] = useState({
    services: false,
    storage: false,
    profile: false,
  });
  const [submit, setSubmit] = useState(true);
  const [invisibilty, setInvisibility] = useState('');
  const [error, setError] = useState(false);

  const plans = {
    arcade: {
      id: 1,
      name: "Arcade",
      price: 9,
      imageUrl: IconArc,
      yrprice: 90,
      freeTrial: "2 months free",
    },
    advanced: {
      id: 2,
      name: "Advanced",
      price: 12,
      imageUrl: IconAdv,
      yrprice: 120,
      freeTrial: "2 months free",
    },
    pro: {
      id: 3,
      name: "Pro",
      price: 15,
      imageUrl: IconPro,
      yrprice: 150,
      freeTrial: "2 months free",
    },
  };

  const addOn = {
    services: {
      id: 1,
      title: "Online Servies",
      desc: "Access to multiplayer games",
      price: 1,
      yrprice: 10,
    },
    storage: {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud",
      price: 2,
      yrprice: 20,
    },
    profile: {
      id: 3,
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: 2,
      yrprice: 20,
    },
  };

  const Step = [
    {
    id: 1,
    step: 'STEP 1',
    desc: 'YOUR INFO'
    },
    {
    id: 2,
    step: 'STEP 2',
    desc: 'SELECT PLAN'
   },
    {
    id: 3,
    step: 'STEP 3',
    desc: 'ADD-ONS'
   },
     {
    id: 4,
    step: 'STEP 4',
    desc: 'SUMMARY'
   }
  ]
  
  const handleToggle = () => {
    setYearly(!yearly);
  };


  const handleNext = () => {
   if(currentStep === 1 && (name === '' || email === '' || number === '')){
    setError(true)
   } else if(currentStep === 2 && selectedPlan.length === 0 ) {
    setError(true)
   } else {
    setError(false);
    setCurrentStep(currentStep + 1);
   }
  };

  const handlePlanSelection = (key) => {
    setSelectedPlan(plans[key]);
    setCSS({
      border: "border-black",
      background: "bg-alice-blue-500",
    });
  };


  const handleChange = (key) => {
    setAdded((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };
  
  const handleClick = () => {
   setCurrentStep(2);
  };
  
  const planName = selectedPlan.name;

  const planPriceRef = useRef(0);

  if (!yearly) {
    planPriceRef.current = selectedPlan.price;
  } else {
    planPriceRef.current = selectedPlan.yrprice;
  }

  let totalPrice = 0;

  Object.keys(added).forEach((key) => {
    if (yearly) {
      if (added[key]) {
        totalPrice += addOn[key].yrprice;
        return totalPrice;
      }
    } else if (!yearly) {
      if (added[key]) {
        totalPrice += addOn[key].price;
        return totalPrice;
      }
    }
  });

  const selectedAddOns = {};

  Object.keys(added).forEach((key) => {
    if (yearly) {
      if (added[key]) {
        const addOnData = addOn[key];
        selectedAddOns[addOnData.id] = {
          name: addOnData.title,
          price: addOnData.yrprice,
        };
      }
    } else if (!yearly) {
      if (added[key]) {
        const addOnData = addOn[key];
        selectedAddOns[addOnData.id] = {
          name: addOnData.title,
          price: addOnData.price,
        };
      }
    }
  });

  

  let currentChildComponent;

  if (currentStep === 1) {
    currentChildComponent = (
      <PersonalInfo
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
        error={error}
      />
    );
  } else if (currentStep === 2) {
    currentChildComponent = (
      <Plans
        handleToggle={handleToggle}
        yearly={yearly}
        handlePlanSelection={handlePlanSelection}
        selectedPlan={selectedPlan}
        css={css}
        plans={plans}
        error={error}
      />
    );
  } else if (currentStep === 3) {
    currentChildComponent = (
      <AddsOn
        yearly={yearly}
        handleChange={handleChange}
        added={added}
        addOn={addOn}
      />
    );
  } else if (currentStep === 4) {
    currentChildComponent = (
      <Transaction
        planName={planName}
        planPriceRef={planPriceRef}
        totalPrice={totalPrice}
        selectedAddOns={selectedAddOns}
        yearly={yearly}
        handleClick={handleClick}
      />
    );
   } 
   else if (currentStep === 5) {
   currentChildComponent = <Submission />;
   }

  useEffect(() => {
    if (currentStep === 4) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 5) {
      setInvisibility('invisible');
    } else {
      setInvisibility('visible');
    }
  }, [currentStep]);



  return (
    <div className="flex flex-row w-3/5 bg-white border-2">
      {/* Constant Background Design  */}
      <div className=" w-2/6 ml-1">
        <img className="" src={BackgroundSideBar} alt="" />
        <div className="absolute top-14 mt-14 mx-4 flex flex-col sm:flex-col justify-center">
          {
            Step.map((step) => (
              <Steps
              key={step.id}
              number={step.id}
              step={step.step}
              desc={step.desc}
              currentStep={currentStep}
              />
            ))
          }
            </div>
      </div>

      <div className=" w-4/6">
        {currentChildComponent}
        <div className="flex flex-row justify-between mt-20">
          <div>
            {currentStep > 1 && (
              <button
                className={`bg-white hover:text-blue-800 ${invisibilty} text-blue-950 font-bold py-2 px-4 ml-20`}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Go Back
              </button>
            )}
          </div>
        { submit === true ?
          <button
            className={`bg-blue-950 ${invisibilty} hover:bg-blue-900 text-white font-bold py-2 px-7 mr-20 border border-blue-700 rounded`}
            onClick={handleNext}
          >
            Next
          </button> 
          : 
          <button
            className={`bg-blue-950 ${invisibilty} hover:bg-blue-900 text-white font-bold py-2 px-7 mr-20 border border-blue-700 rounded`}
            onClick={handleNext}
          >
            Confirm
          </button> 
}
        </div>
      </div>
    </div>
  );
}

export default FormMain;
