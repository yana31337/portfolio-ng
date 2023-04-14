import React from 'react';
import menuBlack from '../assets/svg/menuBlack.svg';
import { ICard } from '../models';

interface CardProps {
  card: ICard
}

export default function MediumCard(props: CardProps) {
  return (
    <div className='w-80 text-black'>
      <div className='h-auto relative'>
        <div className='absolute flex flex-col w-full inset-x-0 bottom-0 pl-3  bg-white   '>
          <div className=''>
            <a href="#" className='mr-5  text-xs uppercase'> {props.card.title}</a>
          </div>

          <a href="#" className=' text-xl font-medium font-sans '>{props.card.description}</a>
          <div className='flex flex-row mb-2'>
            <img src={menuBlack} alt="" className='w-4 h-4 aling-center' />
            <a href="" className='uppercase ml-2 text-xs'>Read</a>
          </div>
        </div>
        <img src={props.card.image} alt="" className='' />
      </div>

    </div>

  )
}
