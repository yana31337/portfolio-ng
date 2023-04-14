import React from 'react'
// import cat from '../assets/png/cat.png'
import { ICard } from '../models'

interface CardProps {
  card: ICard
}

export default function SmallCard(props: CardProps) {
  return (
    <div className='flex flex-row mb-5'>
      <img src={props.card.image} alt={props.card.title} className='h-24 w-24 mr-5' />
      <div>
        <a href="#" className=''>
          <div className='tracking-wider text-sm pb-1'>{props.card.title}</div>
          <div className=' text-base tracking-wide hover:underline'>{props.card.description}</div>
        </a>
      </div>
    </div>
  )
}
