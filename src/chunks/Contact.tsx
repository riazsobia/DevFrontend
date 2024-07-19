import { FC, useState } from "react";
import { ContactForm, searchCountryCode } from "../contents/Contact";
import { CountryCode } from "../contents/CountryCode";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export const ContactChunk: FC<ContactForm> = (props) => {
  let countryCode: string = searchCountryCode(
    props.location.country,
    CountryCode
  );
  const [toggle, setToggle] = useState(true);
  const [emailMe, setEmailMe] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [submit, setSubmit] = useState(false);
  const [state, handleSubmit] = useForm("xlekzena");
  const popup = () => toast("Email Submitted!");
  return (
    <>
      <section
        className={`lg:w-[500px] w-full h-[90%] bg-white ${
          emailMe ? "hidden" : "flex"
        } flex-col items-center justify-center py-5 rounded-md shadow-md shadow-gray-200`}
      >
        <img
          src={props.locationArt}
          alt={props.location.country}
          className="w-5/6 h-1/3 object-fill rounded-md"
        />
        <section className="w-5/6 h-2/3 flex flex-col items-center justify-center gap-3 my-5 text-black font-mulish">
          <h1 className="w-full h-1/6 font-semibold text-xl">
            <b>Location :</b> {props.location.state},{props.location.country}
          </h1>
          <section className="w-full h-4/6 flex flex-col items-start justify-start gap-3 text-[15px]">
            <p>
              <b>Email :</b> {props.email}
            </p>
            <p>
              <b>Phone No. :</b> {countryCode} - {props.phoneNo}
            </p>
          </section>
          <button
            className={`w-5/6 h-1/6 rounded-md border-black border ${
              toggle ? "bg-white text-black" : "bg-black text-white"
            }`}
            onMouseOver={() => {
              setToggle(false);
            }}
            onMouseLeave={() => {
              setToggle(true);
            }}
            onClick={() => {
              setEmailMe(true);
            }}
          >
            Contact Me
          </button>
        </section>
      </section>
      <section
        className={`lg:w-[500px] w-full h-[90%] bg-white ${
          emailMe ? "flex" : "hidden"
        } flex-col items-center justify-evenly py-5 rounded-md font-poppins`}
      >
        <IoMdArrowRoundBack size={20} onClick={() => setEmailMe(false)} />
        <h1 className="font-semibold text-xl">Contact Me via Email.</h1>
        <form
          onSubmit={handleSubmit}
          className="w-5/6 h-5/6 flex flex-col items-center justify-between"
        >
          <label
            htmlFor="email"
            className="text-gray-500 font-semibold text-xs uppercase w-full"
          >
            Email Address
            <input
              type="email"
              id="email"
              name="emailaddress"
              className="w-full h-[8%] px-3 py-4 border border-gray-400 font-normal text-black text-xs rounded-sm"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <label
            htmlFor="subject"
            className="text-gray-500 font-semibold text-xs uppercase w-full"
          >
            Subject
            <input
              type="text"
              id="subject"
              name="emailsubject"
              className="w-full h-[8%] px-3 py-4 border border-gray-400 rounded-sm"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            />
          </label>{" "}
          <label
            htmlFor="emailbody"
            className="text-gray-500 font-semibold text-xs uppercase w-full h-3/6 "
          >
            Body
            <textarea
              name="body"
              id="emailbody"
              className="w-full h-full px-3 py-4 border border-gray-400 resize-none rounded-sm"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
            />
          </label>
          <input
            type="submit"
            value={`Submit`}
            className={`w-3/6 py-2 border-md border-black ${
              submit ? "bg-white text-black" : "bg-black text-white"
            } rounded-md mt-3`}
            onMouseOver={() => {
              setSubmit(true);
            }}
            onMouseLeave={() => {
              setSubmit(false);
            }}
            name={`Submit`}
            onClick={popup}
            disabled={state.submitting}
          />
        </form>
        <ToastContainer />
      </section>
    </>
  );
};
