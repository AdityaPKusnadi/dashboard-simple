import React from "react";
import "../index.css";
import Dbs from "../assets/icon/DBS Logo plain.png";
import Proudfoot from "../assets/icon/lozenge-logo 1.png";
import RMI from "../assets/icon/RMI-logo-1 1.png";
import dbsSquare from "../assets/icon/dbsSquare.png";
import proudSquare from "../assets/icon/proudFootsquare.png";
import rmiSquare from "../assets/icon/rmisquare.png";
import ownerIcon from "../assets/icon/ownerIcon.png";
import Footer from './Footer';

function Content() {
  const approvals = [
    {
      id: 1,
      name: "DBS DEG renewal energy LinkedIn post tiles... ",
      client: {
        name: "Jasmine",
        image: dbsSquare,
        contact: "Jasmine",
        hexColor: "bg-[#FE0000B0]",
      },
      owner: "Radhika",
      iconOwner: ownerIcon,
      date_issued: "January 23, 2022",
      status: "In progress",
      ukuranName: "mr-[10px]",
    },
    {
      id: 2,
      name: "PF website mining and metals edit",
      client: {
        name: "Lorena&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        image: proudSquare,
        contact: "Lorena",
        hexColor: "bg-[#3B4256]",
      },
      owner: "Radhika",
      iconOwner: ownerIcon,
      date_issued: "January 23, 2022",
      status: "1st revision",
      ukuranName: "mr-[96px]",
    },
    {
      id: 3,
      name: "RMI January newletter EDM",
      client: {
        name: "Mervyn",
        image: rmiSquare,
        contact: "Mervyn",
        hexColor: "bg-[#FE005B]",
      },
      owner: "Radhika",
      iconOwner: ownerIcon,
      date_issued: "January 23, 2022",
      status: "2nd revision",
      ukuranName: "mr-[146px]",
    },
  ];
  return (
    <div className="flex-grow bg-[#f5f6fa] pl-[39px] pt-[33px] h-full overflow-x-auto overflow-y-auto">
      <p className="text-[28px] font-bold mb-[44px]">
        Hi Radhika, welcome back!
      </p>
      <p className="text-[20px] font-bold">Your client list</p>
      <p className="text-[14px] mb-[24px]">You currently servicing 3 clients</p>
      <div className="grid grid-cols-3 gap-[15px] mb-[56px] w-[807px] h-[184px]">
        <div className="bg-white rounded-lg p-4 w-[259px] h-[184px]">
          <div className="flex items-center">
            <img src={Dbs} alt="Bank Logo" className="w-[99px] h-[28.87px]" />
            <span className="icon-carbonmenus ml-[108px] mb-[39px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <p className="font-bold text-left text-[16px]">DBS Bank</p>
          <p className="text-gray-700 text-[11px] text-left">
            DBS Bank Limited is a Singaporean multinational banking and
            financial services corporation headquartered at the Marina Bay
            Financial Centre in the Marina Bay district of Singapore.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 w-[259px] h-[184px] ">
          <div className="flex items-center">
            <img
              src={Proudfoot}
              alt="Bank Logo"
              className="w-[70px] h-[47px]"
            />
            <span className="icon-carbonmenus ml-[137px] mb-[39px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <p className="font-bold text-left text-[16px]">Proudfoot</p>
          <p className="text-gray-700 text-[11px] text-left">
            Proudfoot engages teams and leadership, at all levels, to create
            innovative solutions to operational constraints and solve the people
            challenge associated with making sure that change takes place.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 w-[259px] h-[184px] ">
          <div className="flex items-center">
            <img src={RMI} alt="Bank Logo" className="w-[169px] h-[26px]" />
            <span className="icon-carbonmenus ml-[38px] mb-[39px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <p className="font-bold text-left text-[16px]">RMI</p>
          <p className="text-gray-700 text-[11px] text-left">
            RMI is a trusted global verification partner for Asia-Pacific
            organisations, offering a highly personalised and comprehensive
            background screening service.
          </p>
        </div>
      </div>

      <div className="flex">
        <p className="text-[20px] font-bold">Recent Approvals</p>
        <button className="bg-[#1E67AF] text-white font-bold py-2 w-[227px] h-[32px] pl-[25px] pr-[25px] py-[6px] rounded-[53px] mr-[36px] ml-[760px]">
          <span className="icon-plus mr-2 w-[15px] h-[15px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          Create New Approval
        </button>
      </div>
      <p className="text-[14px] mb-[24px]">
        You can find the recent on-going approvals here
      </p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 flex flex-row sm:flex-wrap">
        <div className="bg-white rounded-lg flex w-[1150px] h-[45px]">
          <div className="flex ml-100 items-center gap-4">
            <p className="text-[#323A46] mr-[5px] ml-[15.61px] my-[13px]">Client</p>
            <p className="text-[#323A46] mr-[250px] my-[13px]">Approval Name</p>
            <p className="text-[#323A46] mr-[86.58px] my-[13px]">Client contact</p>
            <p className="text-[#323A46] mr-[118.21px] my-[13px]">Owner</p>
            <p className="text-[#323A46] mr-[86.95px] my-[13px]">Date issued</p>
            <p className="text-[#323A46] mr-[106.82px] my-[13px]">Status</p>
          </div>
        </div>
        {approvals.map((approval) => (
          <div
            key={approval.id}
            className=" bg-white w-[1150px] h-[70px] mr-[27.11px] p-4 flex"
          >
            <div className="flex-shrink-0">
              <img
                src={approval.client.image}
                alt="Client"
                className="h-10 w-10 rounded-[5px] object-cover mr-4"
              />
            </div>
            <div className="flex ml-100 items-center gap-4">
              <p className={`${approval.ukuranName} text-[16px] font-bold`}>{approval.name}</p>
              <div
                className={`flex items-center justify-center w-[24px] h-[24px] rounded-full  text-white font-bold text-center ${approval.client.hexColor}`}
              >
                <span className="text-[16px] font-bold uppercase">
                  {approval.client.contact.charAt(0)}
                </span>
              </div>
              <p className="text-[14px] mr-[68.65px]">{approval.client.contact}</p>
              <img
                src={approval.iconOwner}
                className="h-[22px] w-[22.9px] object-cover mr-4"
              />
              <p className=" text-[14px] mr-[55px]">{approval.owner}</p>
              <p className=" text-[14px] mr-[55px]">{approval.date_issued}</p>
              <div className=" mt-2">
                <span
                  className={`px-2 py-1 text-[14px] rounded-lg ${
                    approval.status === "In progress"
                      ? "bg-[#FCE513]"
                      : approval.status === "1st revision"
                      ? "bg-[#F4B000]"
                      : "bg-[#F47500]"
                  }`}
                >
                  {approval.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p class=" mt-[15px] font-bold text-base text-[#1E67AF]">
        See all approvals here
      </p>
      <Footer/>
    </div>
  );
}

export default Content;
