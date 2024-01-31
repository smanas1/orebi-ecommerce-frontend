import Breadcrumb from "../components/layout/Breadcrumb";
import Input from "../components/layout/Input";
import InputHeader from "../components/layout/InputHeader";

const Register = () => {
  return (
    <div className="container font-DM">
      <Breadcrumb
        title="Sign Up"
        path={window.location.pathname.split("/")[1].toUpperCase()}
      />
      <p className="text-[#767676] mb-7 md:w-1/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry&apos;s standard dummy text ever since
        the.
      </p>
      <hr />
      <div className="w-1/2">
        <InputHeader title="Sign up" />
        <div className="grid grid-cols-2 gap-4">
          <Input title="First Name" type="text" />
          <Input title="Last Name" type="text" />
          <Input title="Email Address" type="email" />
          <Input title="Telephone" type="text" />
        </div>
      </div>
      <hr className="my-14" />
      <div className="w-1/2">
        <InputHeader title="Your Personal Details" />
        <div className="grid grid-cols-2 gap-4">
          <Input title="Address 1" type="text" />
          <Input title="Address 2" type="text" />
          <Input title="City" type="text" />
          <Input title="Post Code" type="number" />
          <Input title="Division" type="text" />
          <Input title="District" type="text" />
        </div>
      </div>
      <hr className="my-14" />
      <div className="w-1/2">
        <InputHeader title="Your Password" />
        <div className="grid grid-cols-2 gap-4">
          <Input title="Password" type="password" />
          <Input title="Repeat Password" type="password" />
        </div>
      </div>
      <hr className="my-14" />

      <div className="flex items-center">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 "
        />
        <label
          htmlFor="link-checkbox"
          className="ms-2 text-sm font-medium text-gray-400 "
        >
          I agree with the
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>
      <div className="flex items-center">
        <p className="text-gray-400">Subscribe Newsletter</p>
        <div className="flex items-center ps-4   rounded ">
          <input
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-gray-700 "
          />
          <label
            htmlFor="bordered-checkbox-2"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center ps-4   rounded ">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-gray-700 "
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
