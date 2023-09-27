import React from 'react'

export default function TextContact() {
    return (
        <div className='flex justify-center flex-col items-center space-y-3'>
            <h1 className='text-4xl font-bold'>Say Hello!</h1>
            <p className='italic'>Got a question or proposal, or just want
                to say hello? Go ahead.</p>
            <img src="./assets/img/contact-illustatrion.svg" alt="" className='max-w-[50%]' />
        </div>
    )
}
