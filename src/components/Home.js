import React from "react";
import image from "../Background (2).jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Background-image." className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Bonjour. I'm Festus.</h1>
            </section>
        </main>
    )
}