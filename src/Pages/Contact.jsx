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

      {/* Map */}

      <div className="pb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.863183603053!2d88.60580547591124!3d24.386062464075444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbee458e80d6f9%3A0x224dd0fab53d0d28!2sParty%20Point%20Thai%20and%20Chinese%20Restaurant!5e0!3m2!1sen!2sbd!4v1706682939169!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
