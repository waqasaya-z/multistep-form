const PersonalInfo = ({name,setName,email,setEmail,number,setNumber, error}) => {
 return (
    <div className="border-2 border-white  flex flex-col h-3/4">
      
        <div>
          <h1 className="font-black mt-12 text-3xl my-1 text-[#02295a]"> Personal info </h1>
          <p className="font font-notosans text-sm font-extralight mt-2">
            
            Please provide your name, email address and phone number.
          </p>
        </div>
        {/* form  */}
      <div className="mt-7 md:p-2 sm:p-2">
        <form>
          <div className="mb-4">
          <div className="flex flex-row justify-between w-3/4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            {error && <p className="text-xs font-semibold text-red-700"> This field is required </p>}
            </div>  
            <input
              className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="mb-4">
            <div className="flex flex-row justify-between w-3/4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            {error && <p className="text-xs font-semibold text-red-700"> This field is required </p>}
            </div>
            <input
              className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="mb-6">
            <div className="flex flex-row justify-between w-3/4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            {error && <p className="text-xs font-semibold text-red-700"> This field is required </p>}
            </div>
            <input
              className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              value={number}
              onChange={e => setNumber(e.target.value)}
              placeholder="e.g +1 234 567 890"
            />
            
          </div>
        
        </form>
        </div>
      
    </div>
  );
};

export default PersonalInfo;
