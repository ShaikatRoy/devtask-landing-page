import { Link } from "react-router-dom";

const Home = () => {
    return (
   <div className="bg-gray-100 h-screen flex flex-col sm:items-center justify-end px-2 sm:justify-center">
    <div className="text-left">
    <h2 className="text-3xl font-semibold mb-4 text-left ">Welcome to PopX</h2>
    <p className="text-gray-600 mb-4 text-left ">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Magni, dolor?</p>
    </div>
    <Link to='/login' className="btn btn-active btn-primary mb-2 w-full sm:w-4/12">Create Account</Link>
    <Link to='/register' className="btn btn-active mb-2 w-full sm:w-4/12">Already Registered? Login</Link>
</div>


    
    
    );
};

export default Home;