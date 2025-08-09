import React, { useContext, useState } from "react";
import Logo from "../navbar/Logo";
import send from "../../assets/icon-send.png";
import { Link, useNavigate } from "react-router-dom";
import qrcode from "../../assets/Qr Code.png";
import GooglePlay from "../../assets/GooglePlay.png";
import AppStore from "../../assets/AppStore.png";
import fb from "../../assets/Icon-Facebook.png";
import x from "../../assets/Icon-Twitter.png";
import insta from "../../assets/icon-instagram.png";
import linkedin from "../../assets/Icon-Linkedin.png";
import { useDispatch } from "react-redux";
import { setProductCategory } from "../../store/productSlice";
import emailjs from "@emailjs/browser";
import { Context } from "../../context/Context";

export const Subscription = () => {
  // const dispatch = useDispatch();
  const { formStatus, setFormStatus } = useContext(Context);

  return (
    formStatus && (
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-sm p-6 text-center">
          <p className="text-gray-600 text-sm mb-5">
            Email subscription successful.
          </p>
          <button
            onClick={() => setFormStatus("")}
            className="bg-[var(--red)] text-white px-5 py-2 rounded-md transition"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { formStatus, setFormStatus } = useContext(Context);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const serviceID = "service_xw05ht7";
    const templateID = "template_vqxo8x7";
    const publicKey = "0-UL1jRHodRtq_rl7";

    const templateParams = {
      user_email: email,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setFormStatus("Message sent successfully!");
        setEmail("");
        setIsSubmitting(false);
      },
      (error) => {
        setFormStatus("Failed to send message. Please try again.");
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
      }
    );
  };
  return (
    <footer className="bg-[var(--black)] text-[var(--white)] min-h-[440px] py-5">
      <div className="flex justify-center items-center min-h-[440px]">
        <div className="container min-h-[236px] flex flex-wrap gap-5 lg:gap-0 px-3 py-5 lg:py-0 lg:px-0 lg:flex-nowrap lg:justify-between">
          <div className="flex flex-col gap-4">
            <Logo />
            <span className="flex flex-col gap-3">
              <p className="font-semibold text-[20px] leading-[28px]">
                Subscribe
              </p>
              <Link to={"/offers"}>
                <p className="mediump">Get 10% off your first order</p>
              </Link>
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="border-2 border-[var(--white)] rounded-sm w-[217px] h-[48px] text-[#FAFAFA] px-3 "
                />
                <button
                  onClick={handleSubscribe}
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute top-0 bottom-0 right-0 flex justify-center items-center w-12"
                >
                  <img src={send} alt="" />
                </button>
              </div>
            </span>
          </div>
          <Subscription />
          {/* 2nd slide */}
          <div className="flex flex-col gap-4  w-[170px]">
            <p className="font-semibold text-[20px] leading-[28px]">
              Subscribe
            </p>
            <span className="mediump flex flex-col gap-3">
              <p className="w-[175px] ">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <a href="mailto:1exclusive@gmail.com">1exclusive@gmail.com</a>
              <p>+88015-88888-9999</p>
            </span>
          </div>
          {/* 3rd slide */}
          <div className="flex flex-col gap-4 w-[170px]">
            <p className="font-semibold text-[20px] leading-[28px]">Account</p>
            <span className="mediump flex flex-col gap-3">
              <Link to={"/profile"}>
                <p>My Account</p>
              </Link>
              <Link to={"/login"}>
                <p>Login / Register</p>
              </Link>
              <Link to={"/cart"}>
                <p>Cart</p>
              </Link>
              <Link to={"/wishlist"}>
                <p>Wishlist</p>
              </Link>
              <button
                onClick={() => {
                  navigate("/products");
                  dispatch(setProductCategory("All Categories"));
                }}
                className="text-start"
              >
                <p>Shop</p>
              </button>
            </span>
          </div>
          {/* 4th slide */}
          <div className="flex flex-col gap-4 w-[120px]">
            <p className="font-semibold text-[20px] leading-[28px]">
              Quick Link
            </p>
            <span className="mediump flex flex-col gap-3">
              <Link to={"/privacy-policy"}>
                <p>Privacy Policy</p>
              </Link>
              <Link to={"/terms"}>
                <p>Terms Of Use</p>
              </Link>
              <Link to={"/FAQS"}>
                <p>FAQ</p>
              </Link>
              <Link to={"/contact-us"}>
                <p>Contact</p>
              </Link>
            </span>
          </div>
          {/* 5th slide */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[20px] leading-[28px]">
              Download App{" "}
            </p>
            <span className="mediump flex flex-col gap-3">
              <Link to={"/privacy-policy"}>
                <p>Save $3 with App New User Only</p>
              </Link>
              <div className="flex items-center gap-3">
                <img src={qrcode} className="" />
                <span>
                  <Link to={"/faq"}>
                    <img src={GooglePlay} className="" />
                  </Link>
                  <Link to={"/contact"}>
                    <img src={AppStore} className="" />
                  </Link>
                </span>
              </div>
              <span className="flex items-center w-[168px] justify-between ">
                <img src={fb} className="h-6 w-6" />
                <img src={x} className="h-6 w-6" />
                <img src={insta} className="h-6 w-6" />
                <img src={linkedin} className="h-6 w-6" />
              </span>
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
