
const Login = () => {
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-start sm:items-center px-2 sm:justify-center">
    <div className="mt-10 mx-10 sm:w-80">
        <h1 className="text-3xl font-semibold mb-4 sm:text-left">Sign in to your <br /> PopX account</h1>
        <p className="text-gray-600 mb-4 sm:text-left">Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit,</p>
    </div>
    <div className="form-control mx-auto w-full max-w-xs relative">
        <div className="mt-4 relative">
            <input type="text" placeholder="Enter email address " className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
                <span className="label-text-alt text-blue-700">Email Address</span>
            </label>
        </div>
        <div className="mt-4 relative">
            <input type="password" placeholder="Enter password " className="input input-bordered w-full bg-gray-100" />
            <label className="label absolute left-4 top-0 -mt-4 bg-gray-100 px-1">
                <span className="label-text-alt text-blue-700">Password</span>
            </label>
        </div>
        <button className="btn mt-4 w-full bg-slate-300">Login</button>
    </div>
</div>


    

    );
};

export default Login;