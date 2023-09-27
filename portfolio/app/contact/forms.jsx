"use client"
import React, { useState } from 'react'

export default function FormContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!")
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full mx-6 flex justify-center flex-col text-center">
            <h1 className='text-4xl font-bold'>Contact Form</h1>
            <div className="flex flex-col">
                <input type="text" id="name" name="name" placeholder='Name' required className="p-2 border border-gray-300 bg-transparent rounded-lg" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex flex-col">
                <input type="email" id="email" name="email" placeholder='Email' required className="p-2 border border-gray-300 bg-transparent rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex flex-col">
                <textarea id="message" name="message" placeholder='Message' required className="p-2 border border-gray-300 h-32 bg-transparent rounded-lg" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <div className='flex justify-center'>
                <button type="submit" className="bg-white w-1/2 my-6 flex justify-center text center text-black py-2 hover:bg-black hover:text-white hover:border-white border font-bold rounded-lg">Enviar</button>
            </div>
        </form>
    )
}
