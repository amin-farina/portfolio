"use client";
import { useState, useEffect } from 'react';

export function TypingEffectComponent({ fullText }) {
    const [text, setText] = useState('');

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 250);

        return () => clearInterval(timer); // Limpia el intervalo cuando se desmonta el componente
    }, []);

    return <h1 className="text-4xl">{text}</h1>;
};

