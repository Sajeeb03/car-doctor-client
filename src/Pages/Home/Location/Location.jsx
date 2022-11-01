import React from 'react';
import { TbCalendarTime } from "react-icons/tb";
import { MdWifiCalling3 } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Location = () => {
    return (
        <div className='bg-black grid grid-cols-3 text-white my-[147px] py-24 px-20 rounded-lg'>
            <div className='flex'>
                <TbCalendarTime className='text-5xl mr-5'></TbCalendarTime>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex'>
                <MdWifiCalling3 className='text-5xl mr-5'></MdWifiCalling3>
                <div>
                    <p>Have a question?</p>
                    <h3 className='text-2xl font-bold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex'>
                <ImLocation className='text-5xl mr-5'></ImLocation>
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Location;