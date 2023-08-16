const AddsOn = ({ yearly, handleChange, added, addOn }) => {
  const addsOn = Object.keys(addOn).map((key) => {
    return (
      <div
        key={key}
        className="flex items-center p-4 border border-gray-200 rounded dark:border-gray-700 w-3/4 mt-2"
      >
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          onChange={() => handleChange(key)}
          checked={added[key]}
          name="bordered-checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className="flex flex-grow justify-between items-center">
          <div className="ml-2 text-sm">
            <label
              htmlFor="bordered-checkbox-1"
              className="w-full py-4 ml-2 text-sm font-bold text-[#02295a] dark:text-gray-300"
            >
              {" "}
              {addOn[key].title}{" "}
            </label>
            <p
              id="helper-checkbox-text"
              className="text-xs font-normal text-gray-500 dark:text-gray-300 ml-2"
            >
              {" "}
              {addOn[key].desc}{" "}
            </p>
          </div>
          <div className=" text-blue-700 text-sm font-medium">
            {!yearly && added[key] && <div>+${addOn[key].price}/mo</div>}
            {yearly && added[key] && <div>+${addOn[key].yrprice}/yr</div>}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="border-2 border-white h-3/4">
      <div>
        <h1 className="font-black mt-12 text-3xl my-1 text-[#02295a]">
          Pick adds-on
        </h1>
        <p className="mt-2 font font-notosans">Adds-ons help enhance your gaming experience.</p>
      </div>

      <div className="mt-10"  >{addsOn}</div>
    </div>
  );
};

export default AddsOn;
