"use client";

import React from 'react'
import moment from 'moment';

export default function Summerschool() {

    const trainings = [
        {
            name: 'React',
            description: 'React is een JavaScript library voor het bouwen van gebruikersinterfaces. React wordt gebruikt voor het bouwen van single page applications. React is ontwikkeld door Facebook en wordt gebruikt door onder andere Netflix, Airbnb, Instagram en WhatsApp.',
            image: 'https://www.summerschool.nl/wp-content/uploads/2019/03/react-logo.png',
            date: '2020-07-06',
        },
        {
            name: 'Vue',
            description: 'Vue is een JavaScript framework voor het bouwen van gebruikersinterfaces. Vue wordt gebruikt voor het bouwen van single page applications. Vue is ontwikkeld door Evan You en wordt gebruikt door onder andere GitLab, Alibaba, Nintendo en Adobe.',
            image: 'https://www.summerschool.nl/wp-content/uploads/2019/03/vue-logo.png',
            date: '2020-07-13',
        },
        {
            name: 'Angular',
            description: 'Angular is een JavaScript framework voor het bouwen van gebruikersinterfaces. Angular wordt gebruikt voor het bouwen van single page applications. Angular is ontwikkeld door Google en wordt gebruikt door onder andere Google, Forbes, PayPal en Upwork.',
            image: 'https://www.summerschool.nl/wp-content/uploads/2019/03/angular-logo.png',
            date: '2020-07-20',
        },
        {
            name: 'Svelte',
            description: 'Svelte is een JavaScript framework voor het bouwen van gebruikersinterfaces. Svelte wordt gebruikt voor het bouwen van single page applications. Svelte is ontwikkeld door Rich Harris en wordt gebruikt door onder andere The New York Times, The Guardian, IBM en The Washington Post.',
            image: 'https://www.summerschool.nl/wp-content/uploads/2019/03/svelte-logo.png',
            date: '2020-07-27',
        },
    ]

    return (
        <div className='flex flex-col max-w-2xl gap-5 m-auto'>
            {trainings.map((training, index) => (
                <div key={index} className='p-5 border border-gray-100 rounded-md bg-gray-50'>
                    <h1 className='pb-2 font-bold'>{training.name}</h1>
                    <p className='my-1'>{training.description}</p>
                    <p className='italic text-gray-500'>{training.date}</p>
                </div>
            ))}
        </div>
    )
}
