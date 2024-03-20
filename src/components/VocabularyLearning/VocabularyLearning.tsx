"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../UI/Button";
import wordList from "@/data/word_list.json";
import Word from "@/core/models/Word";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import HeaderVocabulary from "./HeaderVocabulary";
import WordExplainingPanel from "./WordExplainingPanel";

function VocabularyLearning() {
  const words = wordList as Word[];
  const [word, setWord] = useState<Word>();
  const [imageUrl, setImageUrl] = useState("");

  const getImage = async (word: string) => {
    const image = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&query={${word}&orientation=landscape`
    );
    setImageUrl(image.data.results[0].urls.regular);
  };

  const randomWord = () => {
    setImageUrl("");
    const word: Word = words[Math.floor(Math.random() * 4000)];
    getImage(word.word);
    return word;
  };

  useEffect(() => {
    setWord(randomWord());
  }, []);

  return ( 
    <div className="flex flex-col max-w-[1200px]">
        { !word ? <Loader /> : (
        <>
          <HeaderVocabulary wordsCount={words.length} />
          <section className="flex w-full h-full flex-col lg:flex-row">
            <WordExplainingPanel
              word={word?.word || ""}
              explaining={word?.explaining || ""}
              examplePhrases={word?.examplePhrases || [""]}
            />
            <div className="
              lg:max-w-[50%] w-full py-8 px-10 flex flex-col items-center justify-center 
              max-lg:border-t-2 lg:border-l-2 border-gray-300/50
            ">
              <div>
                {!imageUrl ? (
                  <Loader />
                ) : (
                  <Image src={imageUrl} alt="image" width={500} height={350} className="rounded-xl shadow-md" priority />
                )}
              </div>
            </div>
          </section>
          <div
            className="
              border-2 p-10 border-gray-300/50 rounded-md flex justify-around shadow-md      
          "
          >
            <Button color="red" onClick={() => setWord(randomWord())}>
              Difícil
            </Button>
            <Button color="blue" onClick={() => setWord(randomWord())}>
              Médio
            </Button>
            <Button color="green" onClick={() => setWord(randomWord())}>
              Fácil
            </Button>
          </div>
        </>
      )
      }
    </div>
  );
}

export default VocabularyLearning;
