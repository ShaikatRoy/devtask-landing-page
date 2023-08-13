
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  return (
    <div>
      <div>
        <h1 className='ms-2'>Account Settings</h1>
      </div>
      <div className="bg-slate-100 h-screen px-2 mt-2 pt-3">
        <div className='flex'>
        <div>
          <div className="relative">
            <img className="w-24 rounded-full" src="/src/assets/user3.jpg" alt="" />
            <div className="absolute top-14 right-4 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 p-1 rounded-full">
              <FaCamera className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <div className="mt-6 ms-5">
          <h3>Marry Doe</h3>
          <p>marry@gmail.com</p>
        </div>
        </div>
        <p className='mt-2 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem asperiores quod fugit, sed rem dolor veritatis, quasi vero deleniti, maiores nulla doloremque perferendis eum quisquam alias sequi odio fugiat ipsam. Provident sunt fugiat debitis adipisci officiis non beatae molestiae ab aliquam maiores dolorem, suscipit, nisi expedita tenetur aut fuga ratione?</p>
      <hr className='mt-5 border-dashed'/>
      </div>
      
    </div>
  );
};

export default Profile;
