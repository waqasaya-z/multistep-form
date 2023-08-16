import ThankYou from "../images/icon-thank-you.svg";

const Submission = () => {
  return (
    <div className="h-3/4 w-3/4 flex flex-col justify-center items-center mx-14 my-16 ">
      <div> <img src={ThankYou} alt="" /> </div>
      <div className="text-center">
        <h1 className="font-black mt-12 text-3xl my-1 text-[#02295a]"> Thank you! </h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Submission;
