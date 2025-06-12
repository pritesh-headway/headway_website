import React, { useEffect, useState } from 'react';
import './fullround.css';
import * as Images from '../../../assets';

const SuccessStoryFullRound = () => {

    const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

    const companyImg = [
        {
            id: 1,
            imageUrl: `${Images.Make_mmb1}`,
            title: "Slide 1",
            description: "Description for slide 1"
        },
        {
            id: 2,
            imageUrl: `${Images.Make_mmb2}`,
            title: "Slide 2",
            description: "Description for slide 2"
        },
        {
            id: 3,
            imageUrl: `${Images.mmb_module1}`,
            title: "Slide 3",
            description: "Description for slide 3"
        },
        {
            id: 4,
            imageUrl: `${Images.mmb_module2}`,
            title: "Slide 4",
            description: "Description for slide 3"
        },
        {
            id: 5,
            imageUrl: `${Images.mmb_module3}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },
        {
            id: 6,
            imageUrl: `${Images.mmb_module4}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },
        {
            id: 7,
            imageUrl: `${Images.mmb_module5}`,
            title: "Slide 5",
            description: "Description for slide 3"
        },

    ]

    

    return (
        <div className='rounder_container'>
            {/* 
            <input type="radio" name="position" checked />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" /> */}
            {companyImg.map((_, index) => (
                <input
                    key={index}
                    type="radio"
                    name="position"
                    checked={index === currentPositionIndex}
                    onChange={() => setCurrentPositionIndex(index)}
                    style={{ gridColumn: `${index + 2} / ${index + 3}`, gridRow: '2 / 3' }}
                />
            ))}
            <main id="carousel">
                {companyImg.map((item, index) => (
                    <div className='item' key={index}>
                        <img
                            src={item.imageUrl}
                            alt=''
                        />

                    </div>
                ))}
            </main>


        </div>
    )
}

export default SuccessStoryFullRound