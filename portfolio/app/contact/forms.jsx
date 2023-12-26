"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import "../../public/assets/css/inputAnimation.css";


export default function FormContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [isFormComplete, setIsFormComplete] = useState(false);

    const [state, handleSubmit] = useForm("mayrwzgk");

    if (state.succeeded) {
        return (
            <div className="text-center">
                <h1 className='text-2xl font-bold'>Thank you for reaching out!</h1>
                <p className='text-xl mb-4'>We appreciate your contact and will get back to you as soon as possible.</p>
                <button onClick={() => window.location.href = '/'} className="bg-white text-black mt-4 p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white hover:border-white font-bold">
                    Go back to Home
                </button>
            </div>
        );
    }

    useEffect(() => {
        const isComplete = name && email && title && message && email.includes("@");

        if (isComplete && !isFormComplete) {
            console.log("Complete form");
            setIsFormComplete(true);
        } else if (!isComplete && isFormComplete) {
            setIsFormComplete(false);
        }
    }, [name, email, title, message, isFormComplete])

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full mx-6 flex justify-center flex-col text-center">
            <h1 className={`text-4xl font-bold ${isFormComplete ? "text-[#d35726]" : "text-white"}`}>Contact Form</h1>
            <div className="input-group">
                <input type="text" id="name" name="name" required className="input-alone" value={name} onChange={(e) => setName(e.target.value)} />
                <label className='label-alone' for="name">Full name</label>
            </div>

            <div className="input-group">
                <input type="email" id="email" name="email" required className="input-alone" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='label-alone' for="email">Email</label>
            </div>

            <div className="input-group">
                <input type="text" id="title" name="title" required className="input-alone" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className='label-alone' for="title">Title</label>
            </div>

            <div className="input-group">
                <textarea id="message" name="message" required className="input-alone" rows="5" style={{ overflowWrap: 'break-word' }} value={message} onChange={(e) => setMessage(e.target.value)} />
                <label className='label-alone' for="message">Message</label>
            </div>

            <div className='flex justify-center'>
                <button type="submit" disabled={!isFormComplete} className={`${isFormComplete ? ("bg-green-700 hover:bg-green-900") : ("bg-black text-white")}  w-1/2 my-6 flex justify-center text center  py-2 border font-bold rounded-lg`}>Send</button>
            </div>
        </form>
    );
}
