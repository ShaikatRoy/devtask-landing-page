import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="bg-gray-100 h-screen flex flex-col justify-start sm:items-center px-2 sm:justify-center">
        <div className="mt-10 mx-10 sm:w-80">
          <h1 className="text-3xl font-semibold mb-4 sm:text-left">Create your <br /> PopX account</h1>
        </div>
        <div className="form-control mx-auto w-full max-w-xs relative">
          <div className="mt-4 relative">
            <input type="text" placeholder="Enter your name " className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
              <span className="label-text-alt text-blue-700">Full Name</span>
            </label>
          </div>
          <div className="mt-4 relative">
            <input type="text" placeholder="Enter your number" className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
              <span className="label-text-alt text-blue-700">Phone Number</span>
            </label>
          </div>
          <div className="mt-4 relative">
            <input type="text" placeholder="Enter your email" className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
              <span className="label-text-alt text-blue-700">Email</span>
            </label>
          </div>
          <div className="mt-4 relative">
            <input type="password" placeholder="Enter password " className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
              <span className="label-text-alt text-blue-700">Password</span>
            </label>
          </div>
          <div className="mt-4 relative">
            <input type="password" placeholder="Marry Doe" className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
              <span className="label-text-alt text-blue-700">Company name</span>
            </label>
          </div>
          <div className="mt-4">
            <label className="label">Are you an Agency?</label>
            <div className="flex items-center space-x-4">
              <label>
                <input type="radio" name="loyalty" value="yes" className="mr-1" />
                Yes
              </label>
              <label>
                <input type="radio" name="loyalty" value="no" className="mr-1" />
                No
              </label>
            </div>
          </div>
        </div>
        <Link to="/profile" className="btn btn-active btn-primary mb-2 w-full sm:w-5/12 mt-10">Create Account</Link>
      </div>
    );
  };
  
  export default Register;
  