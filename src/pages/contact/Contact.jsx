import React from "react";
import callImg from "../../assets/call.png";
import mailImg from "../../assets/mail.png";

const Contact = () => {
  return (
    <div className="container my-16 flex justify-between items-center">
      <div className="h-[457px] w-[340px] rounded flex justify-center items-center shadow-md ">
        <div className="w-[270px] h-[366px] flex flex-col justify-between ">
          <div className="flex flex-col h-[122px] justify-between ">
            <span className="flex items-center gap-2">
              <span className="w-10 h-10 bg-[var(--red)] rounded-full flex justify-center items-center">
                <img src={callImg} alt="" />
              </span>
              <p className="boldp">Call To Us</p>
            </span>
            <p className="smallp">We are available 24/7, 7 days a week.</p>
            <p className="smallp">Phone: +8801611112222</p>
          </div>
          <hr />
          <div className="flex flex-col h-[180px] justify-between ">
            <span className="flex items-center gap-2">
              <span className="w-10 h-10 bg-[var(--red)] rounded-full flex justify-center items-center">
                <img src={mailImg} alt="" />
              </span>
              <p className="boldp">Write To US</p>
            </span>
            <p className="smallp">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="smallp">Emails: customer@exclusive.com</p>
            <p className="smallp">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="w-[800px] h-[457px] rounded flex justify-center items-center shadow-md ">
        <div className="w-[737px] h-[377px] flex flex-col justify-between  ">
          <div className="flex justify-between items-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-[235px] h-[50px] bg-[#F5F5F5] px-5 focus:outline-none "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-[235px] h-[50px] bg-[#F5F5F5] px-5 focus:outline-none "
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Your Phone"
              required
              className="w-[235px] h-[50px] bg-[#F5F5F5] px-5 focus:outline-none "
            />
          </div>
          <textarea
            name="message"
            className="h-[207px] w-full bg-[#F5F5F5] focus:outline-none p-5 "
          ></textarea>
          <button className="w-[234px] h-[56px] rounded-sm bg-[var(--red)] text-white block ml-auto ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
