import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


const datas = [
    {
        name: 'Grocery',
        href: '#',
        img: 'https://img.freepik.com/premium-vector/supermarket-food-carts-plastic-red-empty-baskets_134830-595.jpg?size=626&ext=jpg&ga=GA1.1.1476296798.1706968653&semt=ais'
    },
    {
        name: 'Mobiles',
        href: '#',
        img: 'https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?size=626&ext=jpg&ga=GA1.1.633684789.1705921309&semt=ais'
    },
    {
        name: 'Fashion',
        href: '#',
        img: 'https://img.freepik.com/free-photo/beautiful-cute-blond-woman-hipster-clothes_158538-2367.jpg?size=626&ext=jpg&ga=GA1.1.1476296798.1706968653&semt=ais',
        more: [
            {
                title: "Men's Top Wear"
            },
            {
                title: "Men's Bottom Wear"
            },
            {
                title: "Women Ethenic"
            },
            {
                title: "Women Western"
            },
            {
                title: "Men Footwear"
            },
            {
                title: "Watches And Accessories"
            },
            {
                title: "Bags, Suitcases & Luggage"
            },
            {
                title: "Kids"
            },
        ]
    },
    {
        name: 'Electronics',
        href: '#',
        img: 'https://img.freepik.com/free-photo/open-laptop_144627-12145.jpg?size=626&ext=jpg&ga=GA1.1.1476296798.1706968653&semt=ais',
        more: [
            {
                title: "Audio"
            },
            {
                title: "Electronic GST Store "
            },
            {
                title: "Cameras & Peripherals"
            },
            {
                title: "Gaming"
            },
            {
                title: "Health & Personal Care"
            },
            {
                title: "Laptop Accessories"
            },
            {
                title: "Powerbank"
            },
            {
                title: "Storage"
            },
            {
                title: "Smart Wearables"
            },
        ]
    },
    {
        name: 'Home & Furniture',
        href: '#',
        img: 'https://img.freepik.com/free-photo/old-wooden-armchair_1194-1167.jpg?w=740&t=st=1706969679~exp=1706970279~hmac=44cd30c3c8f7eef0dd9de0d52157d2985ea6bc67a8a976709a9dcfd9912df020'
    },
    {
        name: 'Appliance',
        href: '#',
        img: 'https://img.freepik.com/free-photo/blender-juice-machine_74190-4903.jpg?w=1060&t=st=1706969744~exp=1706970344~hmac=e8138600a73561c224a4de28488ec5078e7b2cb1a3f8b214dda88b813eed9774'
    },
    {
        name: 'Travel',
        href: '#',
        img: 'https://img.freepik.com/free-vector/realistic-vector-icon-illustration-travel-time-design-concept-elements-with-luggage-hat-snork_134830-1951.jpg?w=900&t=st=1706969882~exp=1706970482~hmac=e629f2416eb41c41d7bd6f55ff87fa726e63e54602285d98fe9b9318efff391b'
    },
    {
        name: 'Beauty,Toys & More',
        href: '#',
        img: 'https://img.freepik.com/free-photo/cute-teddy-bear_144627-15238.jpg?size=626&ext=jpg&ga=GA1.1.1476296798.1706968653&semt=ais'
    },
    {
        name: 'Two Wheelers',
        href: '#',
        img: 'https://img.freepik.com/free-photo/computer-detail-connector-jack-rca_1172-383.jpg?w=740&t=st=1706970089~exp=1706970689~hmac=7fb677cb540e68dc9671c0910fff60901e004d2a3b82297f9196f400d12fee21'
    },
]

export default function Selector() {
    return (
        <ul className="w-[100%] flex flex-row overflow-x-scroll sm:overflow-x-hidden sm:justify-center gap-5 p-4">

            {datas.map((item) => (
                <li className="flex flex-col z-50 justify-between items-center font-semibold  dropdown  px-4   cursor-pointer  text-base  ">
                    <img src={item.img} alt="" width={70} height={70} />
                    <div className='mt-4 flex gap-1 justify-center items-center'>
                        <p className='text-sm text-center'>{item.name}</p>
                        {item.more ? <FaAngleDown /> : ''}
                    </div>

                    {item.more ?
                        (
                            <div className=" hover:z-50 group-hover:block dropdown-menu absolute  hidden  h-auto">
                                <ul className="top-28 hover:z-50 z-auto right-0 absolute  w-64 bg-white shadow px-2 py-6">

                                    {item.more.map((list) => (
                                        <li className="  flex items-center  rounded-lg p-2 text-base  hover:bg-gray-200">
                                            <div className="block text-gray-500 text-base  cursor-pointer">{list.title}</div>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        ) : ''}


                </li>
            ))}



        </ul>
    )
}
