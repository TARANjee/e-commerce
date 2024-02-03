import React, { useState } from 'react'
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const images = [

    "https://picsum.photos/id/10/960/540",
    "https://picsum.photos/id/11/960/540",
    "https://picsum.photos/id/12/960/540",
]

export default function Slider() {
   
    let [current, setCurrent] = useState(0);
    console.log(current)
    function previousSlide() {
        console.log("prev")
        if (current === 0) setCurrent(images.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        console.log("prev")
        if (current === images.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    return (


        <div id="default-carousel" class="relative w-full" >

            <div className="w-full flex flex-row overflow-x-scroll">
                {images.map((url) => {
                    return (
                        <div key={url} className="w-full flex-shrink-0">
                            <img src={url} />
                        </div>
                    );
                })}
            </div>

        </div>

    )
}
