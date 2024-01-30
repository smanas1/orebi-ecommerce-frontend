import Breadcrumb from "../components/layout/Breadcrumb";
import Input from "../components/layout/Input";
import InputButton from "../components/layout/InputButton";
import InputHeader from "../components/layout/InputHeader";

const Contact = () => {
  return (
    <div className="container font-DM">
      <Breadcrumb
        title="Contacts"
        path={window.location.pathname.split("/")[1].toUpperCase()}
      />

      <InputHeader title="Fill up a Form" />

      {/* Inputs */}

      <div className="md:w-1/2 w-full">
        <Input title="Name" type="text" />
        <Input title="Email" type="email" />
        {/* Message area */}
        <div className="mt-9">
          <label className="text-xl font-bold block" htmlFor="Message">
            Message
          </label>
          <textarea
            placeholder="Your message here"
            className="outline-none border-b mt-3 w-full"
            name="Message"
            id="Message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      {/* Input Button */}
      <InputButton title="Post" />
    </div>
  );
};

export default Contact;
