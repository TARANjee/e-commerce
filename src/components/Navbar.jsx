import React, { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CiSearch, CiHeart, CiGift } from "react-icons/ci";
import { BsCart3, BsBoxSeam } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";

const datas = [
    { name: 'My Profile', href: '#', icon: FaRegCircleUser },
    { name: 'FlipKart Plus Zone', href: '#', icon: FaChartPie },
    { name: 'Orders', href: '#', icon: BsBoxSeam },
    { name: 'Wishlist', href: '#', icon: CiHeart },
    { name: 'Rewards', href: '#', icon: CiGift },
    { name: 'Gift Cards', href: '#', icon: LiaMoneyCheckAltSolid },
]


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="bg-white">
            <nav className="w-[100%] mx-auto flex  items-center justify-between p-2 lg:px-8  " aria-label="Global">
                <div className="flex  ">
                    <div className="flex sm:hidden ">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <button className="sm:p-1  ">

                        <img className="h-10 sm:h-12  " src="/logo.svg" alt="" />
                    </button>

                </div>
                <div className='flex sm:w-[100%]  items-center  gap-5 flex   mx-5'>
                    <div className="hidden md:block relative  sm:w-[60%] bg-[#F0F5FF]">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <CiSearch className="w-6 h-6 text-gray-700 dark:text-gray-400" />
                        </div>
                        <input type="search" id="default-search" className=" bg-[#F0F5FF] outline-none  block w-full p-2 ps-10 text-lg text-black border border-gray-300 rounded-lg    dark:bg-gray-700 dark:border-gray-600 placeholder-gray-700 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products, Brands and More" required />
                    </div>
                    <div className='flex w-[40%]  justify-between items-center lg:px-5'>
                        <Popover.Group className=" lg:gap-x-12 ">
                            <Popover className="relative">
                                <Popover.Button className="flex items-center gap-x-2 p-2 hover:bg-blue-400 hover:text-white rounded-lg text-md  leading-6 text-gray-900">
                                    <FaRegCircleUser className="h-5 w-5 flex-none " />
                                    <p>Login</p>
                                    <FaAngleDown className="hidden sm:block h-5 w-5 flex-none" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="hidden sm:block absolute  sm:top-full z-10 mt-3  w-[250%] max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            <div className='flex justify-between p-4 text-md'>
                                                <p>New Customer?</p>
                                                <button className="text-blue-400" href="">Sign Up</button>

                                            </div>
                                            <hr />
                                            {datas.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group  relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    <div className="flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <button href={item.href} className="block font-semibold text-gray-900">
                                                            {item.name}

                                                        </button>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </Popover.Group>

                        <button className="text-md  leading-6 text-gray-900">
                            <div className='flex gap-2'>
                                <BsCart3 size={25} />
                                <p className='hidden xl:block'>Cart</p>
                            </div>
                        </button>

                        <button className="hidden md:block text-md  leading-6 text-gray-900">
                            <div className='flex gap-2 items-center'>
                                <img className="w-7 h-7" src="/seller.png" alt="" />
                                <p className='hidden xl:block '>Become a Seller</p>
                            </div>
                        </button>

                    </div>
                </div>
            </nav>

            
            <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition ease-in-out delay-150  duration-500">
                    <div className="flex items-center justify-between ">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <IoMdClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <button className="p-1">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/logo.svg"
                                alt=""
                            />
                        </button>

                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                             

                                <button className="w-[100%] text-md  leading-6 text-gray-900">
                                    <div className='flex gap-2 p-2 items-center'>
                                        <img className="w-7 h-7" src="/seller.png" alt="" />
                                        <p className=''>Become a Seller</p>
                                    </div>
                                </button>

                                <button className="w-[100%] text-md  leading-6 text-gray-900">
                                    <div className='flex gap-2 p-2 items-center'>
                                        <img className="w-7 h-7" src="/seller.png" alt="" />
                                        <p className=''>Become a Seller</p>
                                    </div>
                                </button>

                                <button className="w-[100%] text-md  leading-6 text-gray-900">
                                    <div className='flex gap-2 p-2 items-center'>
                                        <img className="w-7 h-7" src="/seller.png" alt="" />
                                        <p className=''>Become a Seller</p>
                                    </div>
                                </button>

                                <button className="w-[100%] text-md  leading-6 text-gray-900">
                                    <div className='flex gap-2 p-2 items-center'>
                                        <img className="w-7 h-7" src="/seller.png" alt="" />
                                        <p className=''>Become a Seller</p>
                                    </div>
                                </button>

                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
