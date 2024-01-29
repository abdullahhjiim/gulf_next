import Image from 'next/image';
import banner from '../../public/abstract1.jpg';
import ProfilePass from '@/components/profile/ProfilePass';
import ChangeImage from '@/components/profile/ChangeImage';

const userData = [
  {
    key: 'First Name',
    value: 'John',
  },
  {
    key: 'Last Name',
    value: 'John',
  },
  {
    key: 'NID NO',
    value: '974323354',
  },
  {
    key: 'Passport NO',
    value: '34590734290',
  },
  {
    key: 'Expiry Date',
    value: '11 March 2023',
  },
  {
    key: 'Country',
    value: 'Bangladesh',
  },
  {
    key: 'Email',
    value: 'hello@gmail.com',
  },
  {
    key: 'Address',
    value: 'Bay Area, San Francisco, CA',
  },
];
const Profile = () => {
  return (
    <div className="">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-12">
          <div className="col-span-1 bg-white shadow-light p-4 xl:p-12 rounded-md text-center flex flex-col justify-center items-center">
            <ChangeImage />
            <h4 className="font-bold text-2xl mt-3">John Doe</h4>
            <p className="opacity-75">Bay Area, San Francisco, CA</p>
          </div>

          <div className="col-span-1 lg:col-span-2 bg-white shadow-light p-4 md:p-6 rounded-md">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              <h4 className="text-lg font-semibold text-primary bg-gray-200 py-2 px-4 rounded-md">
                Type: Seller
              </h4>
              <h4 className="text-lg font-semibold text-primary bg-gray-200 py-2 px-4 rounded-md">
                Country: UAE
              </h4>
              <h4 className="text-lg font-semibold text-primary bg-gray-200 py-2 px-4 rounded-md">
                Type: Seller
              </h4>
            </div>

            <h3 className="text-2xl font-bold mb-8">Personal Informations:</h3>

            {userData.map((item, i) => {
              return (
                <div className="flex items-start gap-x-2 my-3" key={i}>
                  <h4 className="font-semibold text-lg min-w-[150px] md:min-w-[250px]">
                    {item.key}:
                  </h4>
                  <h4 className="font-medium text-lg min-w-1/2 whitespace-normal">
                    {item.value}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className="col-span-1 bg-white shadow-light p-4 md:p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-8">Change Password:</h3>

            <ProfilePass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
