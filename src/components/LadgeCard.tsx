import React from 'react';
// import thanksgiving from '../assets/png/thanksgiving.png';
import menu from '../assets/svg/menu.svg';
import { ICard } from '../models';

interface CardProps {
    card: ICard
}

export default function LadgeCard(props: CardProps) {
    return (
        <div className='w-full h-auto relative'>
            <div className='absolute  flex flex-col w-full inset-x-0 bottom-0 ml-3'>
                <div className=''>
                    <a href="#" className='mr-5 uppercase hover:underline '> {props.card.title} </a>
                </div>

                <a href="#" className='text-4xl font-normal font-sans '> {props.card.description} </a>
                <div className=' flex flex-row mb-2'>
                    <img src={menu} alt="" className='w-4 h-4 aling-center mt-1 ' />
                    <a href="" className='uppercase ml-2'>Read</a>
                </div>
            </div>
            <img src={props.card.image} alt="" className=' ' />
        </div>
    )
}
