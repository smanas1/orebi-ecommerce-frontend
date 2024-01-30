import Breadcrumb from "../components/layout/Breadcrumb";
import Input from "../components/layout/Input";
import InputHeader from "./../components/layout/InputHeader";
import InputButton from "./../components/layout/InputButton";

const Login = () => {
  return (
    <div className="container">
      <Breadcrumb
        title="login"
        path={window.location.pathname.split("/")[1].toUpperCase()}
      />
      <p className="text-[#767676] mb-7 md:w-1/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry&apos;s standard dummy text ever since
        the.
      </p>
      <hr />
      <InputHeader title="Returning Customer" />
      <div className="md:w-1/2 md:flex justify-between gap-10">
        <Input title="Email" type="email" />

        <Input title="Password" type="password" />
      </div>
      <InputHeader title="New Customer" />
      <p className="text-[#767676] mb-8 md:w-1/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry&apos;s standard dummy text ever since
        the.
      </p>
      <InputButton title="Continue" />
    </div>
  );
};

export default Login;
