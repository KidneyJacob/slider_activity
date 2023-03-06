import "./SliderImage.css";
import data from "../data";
import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight  } from "react-icons/hi";

const SliderImage = () => {
    const[index, setIndex] = useState(0)
    const {id, image, title, date, description} = data[index]

    const checkImageNumber = (boxIndex) => {
        if (boxIndex < 0) {
            return data.length - 1
        } else if (boxIndex > data.length - 1) {
            return 0
        } else {
            return boxIndex
        }
    }



    const nextBox = () => {
        setIndex( (index) => {
            const newIndex = index + 1
            return checkImageNumber(newIndex)
        })
    }
    const prevBox = () => {
        setIndex( (index) => {
            const newIndex = index - 1
            return checkImageNumber(newIndex)
        })
    }


   


    return <div key={id} className="box">
        <h1>Slider</h1>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
        <button onClick={prevBox}>
            <HiArrowNarrowLeft />
        </button>
        <button onClick={nextBox}>
            <HiArrowNarrowRight />
        </button>
        
    </div>
}
export default SliderImage