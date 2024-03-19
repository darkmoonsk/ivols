"use client"
import { useState } from "react";
import Image from "next/image";
import Button from "../UI/Button/Button";
import wordList from "@/data/word_list.json";
import Word from "@/core/models/Word";

function VocabularyLearning() {
    const words = wordList as Word[]; 
    
    const randomWord = () => {
        const word: Word = words[Math.floor(Math.random() * 4000)]; 
        
        return word;
    }
    
    const [word, setWord] = useState(randomWord());

    return (
        <div className="flex flex-col max-w-[1200px]">
            <div className="flex justify-between py-5 px-4 bg-fuchsia-100 rounded">
                <h1 className="text-xl font-medium">Vocabulary Learning</h1>
                <h2 className="text-2xl font-bold capitalize">{word.word}</h2>
                <div className="flex gap-2">
                    <p className="text-green-500">To learn: 45</p>
                    <p className="text-red-500">To review: 1500</p>
                    <p className="text-blue-500">Total: {words.length}</p>
                </div>
            </div>
            <section className="flex w-full h-full">
                <div className="max-w-[50%] w-full flex flex-col gap-10 px-10 py-8">
                    <div className="w-full bg-violet-400 text-white p-5 rounded-xl">
                        <p>
                            {word.explaining}
                        </p>
                    </div>
                    <div className="w-full bg-violet-400 text-white p-5 rounded-xl">
                        <p className="font-bold">
                            {word.examplePhrases[Math.floor(Math.random() * 3)]}
                        </p>
                    </div>
                </div>
                <div className="max-w-[50%] w-full py-8 flex flex-col items-center border-l-2 border-gray-300">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image"
                            width={500}
                            height={350}
                            className="rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </section>
            <div className="border-2 p-10 border-gray-300 rounded-md flex justify-around">

                <Button color="red" onClick={() => setWord(randomWord())}>Dificil</Button>
                <Button color="blue" onClick={() => setWord(randomWord())}>Medio</Button>
                <Button color="green" onClick={() => setWord(randomWord())}>Facil</Button>
            </div>
        </div>
    );
}

export default VocabularyLearning;
