import React from 'react'
import { CiGift } from "react-icons/ci";

 function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 sm:p-5 md:p-5 overflow-hidden ">
            <div className="mx-auto w-full max-w-screen-xl ">
                <div className="grid grid-cols-1 px-6  py-6  md:grid-cols-6 ">
                    <div>
                        <h2 className="mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">about</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-1">
                                <button className=" hover:underline">Contact Us</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">About Us</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Careers</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Flipkart Stories</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Press</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Flipkart Wholesale</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Cleartrip</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Corporate Infomation</button>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5  md:mt-1'>
                        <h2 className="mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">Help</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-1">
                                <button className="hover:underline">Payments</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Shipping</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Cancellation & Returns</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">FAQ</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Report Infringement</button>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5  md:mt-1'>
                        <h2 className="mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">Consumer policy</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-1">
                                <button className="hover:underline">Cancellation & Returns</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Terms of Use</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Security</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Privacy</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Sitemap</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Grievance Redressal</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">ERP Compliance</button>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5 md:mt-1 '>
                        <h2 className="mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">Social</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-1">
                                <button className="hover:underline">Facebook</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">Twitter</button>
                            </li>
                            <li className="mb-1">
                                <button className="hover:underline">YouTube</button>
                            </li>
                        </ul>
                    </div>

                    <div className='sm:border-l-2 border-gray-500 sm:border-none sm:pl-10 mt-5 md:mt-1'>
                        <h2 className="mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">Mail Us:</h2>
                        <p className='text-gray-500  text-xs mb-1'>Flipkart Internet Private Limited</p>
                        <p className=' text-gray-500 text-xs mb-1'>Building Alyssa, Begonia &</p>
                        <p className='text-gray-500  text-xs mb-1'>Clove Embassy Tech Village,</p>
                        <p className='text-gray-500  text-xs mb-1'>Outer Ring Road, Devarabeensanahalli Village</p>
                        <p className='text-gray-500 text-xs mb-1'>Bengaluru, 560103</p>
                        <p className='text-gray-500  text-xs mb-1'>Karnataka ,India</p>

                    </div>
                    <div className='mt-5 md:mt-1 sm:pl-10'>
                        <h2 className="w-[120%] mb-6 text-[12px] font-semibold text-gray-900 uppercase dark:text-white">Registered Office Address:</h2>
                        <p className='text-gray-500  text-xs mb-1'>Flipkart Internet Private Limited</p>
                        <p className=' text-gray-500 text-xs mb-1'>Building Alyssa, Begonia &</p>
                        <p className='text-gray-500  text-xs mb-1'>Clove Embassy Tech Village,</p>
                        <p className='text-gray-500  text-xs mb-1'>Outer Ring Road, Devarabeensanahalli Village</p>
                        <p className='text-gray-500 text-xs mb-1'>Bengaluru, 560103</p>
                        <p className='text-gray-500  text-xs mb-1'>Karnataka ,India</p>

                    </div>





                </div>
                <div className="p-4 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <div className=' w-[100%] flex justify-center'>
                        <div className='sm:w-[100%] m-2 w-[50%] flex sm:justify-start justify-between items-center text-[12px] gap-2 items-center'>
                            <CiGift size={20} />
                            <p>Become a Seller</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <div className='sm:w-[100%] m-2 w-[50%] flex justify-between sm:justify-start items-center text-[12px] gap-2 items-center'>
                            <CiGift size={20} />
                            <p className='text-center'>Advertise</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <div className='sm:w-[100%] m-2 w-[50%] flex justify-between sm:justify-start items-center text-[12px] gap-2 items-center'>
                            <CiGift size={20} />
                            <p>Gift Cards</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <div className='sm:w-[100%] m-2 w-[50%] flex justify-between sm:justify-start items-center text-[12px] gap-2 items-center'>
                            <CiGift size={20} />
                            <p >Help Center</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <div className='sm:w-[100%] m-2 w-[50%] flex justify-between sm:justify-start items-center text-[12px] gap-2 items-center'>
                            <CiGift size={20} />
                            <p >&copy;2007-2024 Flipkart.com</p>
                        </div>
                    </div>
                    <div className='w-[100%] flex justify-center'>
                        <img src="pay.svg" alt="" />

                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer
