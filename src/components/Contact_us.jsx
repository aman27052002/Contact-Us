import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Contact_us = () => {
  return (
    <>
      <img src="/image/LOGO.png" alt="logo" className="ml-20" />
      <div className="w-4/5 ml-40">
        <h1 className="text-5xl font-extrabold mt-10">CONTACT US</h1>
        <p className="font-bold mt-10 w-4/5 " style={{ color: "grey" }}>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE FROM OF THIS PAGE, OR BY PHONE, EMAIL, OR
          SOCIAL MEDIA.
        </p>
      </div>
      <div className="container w-1/3 p-4 mt-12 h-36 ml-40">
        <div className="btn flex gap-8 text-white h-[44px] text-lg ">
          <button className="flex gap-2 rounded w-[220px] bg-black pt-1 pl-2.5">
            <MdOutlineMessage className="mt-1.5 " />
            VIA SUPPORT CHAT
          </button>
          <button className="flex gap-2 rounded w-[220px] bg-black pt-1 pl-2.5">
            <IoMdCall className="mt-1.5 ml-12" />
            VIA CALL
          </button>
        </div>
        <button className="flex gap-2 rounded w-[472px] bg-white border-2 border-black mt-4 h-[42px] font-bold pt-1 pl-2.5 ">
          <MdOutlineMessage className="mt-1.5 ml-36" />
          VIA EMAIL FORM
        </button>
      </div>
      <img src="/image/logo.svg" className=" -mt-52" style={{marginLeft:"50vw"}} alt="" />
      <div className="container w-1/3 p-4 h-[260px] ml-44 -mt-96">
        <div className="btn text-white  h-[44px] text-lg ">
          <input type="text" className="flex  rounded w-[440px] bg-white border-2 border-black h-[42px] font-bold  pl-2.5" name="Name" placeholder="Name"/><br />
          
          <input type="text" className="flex rounded w-[440px] bg-white border-2 border-black h-[42px] font-bold pl-2.5"  name="Email" placeholder="E-Mail"/><br />
          <textarea name="Text" className="flex rounded w-[440px] h-[120px] bg-white border-2 border-black h-[42px] font-bold pl-2.5"  placeholder="Text"></textarea>
          <button className=" mt-2 rounded w-[220px] h-[44px] bg-black ml-[220px] pt-1 pl-2.5">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
