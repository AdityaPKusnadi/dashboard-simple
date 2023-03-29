import React from 'react';
import '../index.css';
import '../icon.css';
import user from '../assets/icon/Radhika-pex7ck61cie2iks7863tyn1r78ql2jsyqxdns3jwl4 2.png';



function Sidebar() {
  return (
    <aside className="bg-white h-screen w-[295px]">
      <div className="p-4 mt-[57px] ml-[29px] mr-[29px]">
        <div className="flex items-center mb-[12px]">
          <img src={user} alt="User" className="w-[67px] h-[67px] rounded-full" />
        </div>
        <p className="text-black-700 font-bold text-[16px] mb-[1px]">Radhika Dhawan Puri</p>
        <p className="text-black-700 text-[14px]">Senior Client Services</p>
        <hr className="my-[29px] " />
        <p className="text-xs font-normal leading-4 tracking-widest text-gray-700 mb-[12px] ">NAVIGATION</p>
        <nav>
          <ul className="list-none p-0 ">
            <li className="text-[16px] border-gray-400 py-2 mb-[10px] ">
              <span className='icon-dashboard w-[15px] h-[15px]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className='ml-2'>Dashboard</span>
            </li>
            <li className="text-[16px] border-gray-400 py-2">
              <span className='icon-approval w-[15px] h-[15px]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className='ml-2'>Approvals</span>
            </li>
          </ul>
        </nav>
        <hr className="mb-[29px] mt-[44px] " />
        <div>
        <p className="text-xs font-normal leading-4 tracking-widest text-gray-700 mb-[12px]  ">MY ACCOUNT</p>
          <ul className="list-none p-0 ">
            <li className="text-[16px] border-gray-400 py-2 mb-[10px]">
              <span className='icon-myclient w-[15px] h-[15px]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className='ml-2'>My Clients</span>
            </li>
            <li className="text-[16px] border-gray-400 py-2">
              <span className='icon-setting w-[15px] h-[15px]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className='ml-2'>Edit Profile</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
