"use client";
import { useEffect, useState } from "react";
import ButtonLearning from "../UI/ButtonLearning";
import wordList from "@/data/words_sample.json";
import Word from "@/core/models/Word";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import HeaderVocabulary from "./HeaderVocabulary";
import WordExplainingPanel from "./WordExplainingPanel";
import ImageVocabulary from "./ImageVocabulary";
import HelpInfo from "../HelpInfo";
import AudioQueue from "@/core/cases/AudioQueue";

function VocabularyLearning() {
  const words = wordList as Word[];
  const [word, setWord] = useState<Word>();
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [unsplashUrl, setUnsplashUrl] = useState("");

  const getImage = async (phrase: string) => {
    const image = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}&query={${phrase}&orientation=landscape`
    );
    setImageUrl(image.data.results[0].urls.regular);
    setAuthor(image.data.results[0].user.name);
    setUnsplashUrl(image.data.results[0].links.html);
  };

  const randomExamplePhrase = Math.floor(Math.random() * 3);

  const randomWord = () => {
    setImageUrl("");
    const word: Word = words[Math.floor(Math.random() * words.length)];
    getImage(word.examplePhrases[randomExamplePhrase]);
    return word;
  };

  const audioQueue = new AudioQueue();

  const handlePlayAudio = () => {
    const cloud_url = process.env.NEXT_PUBLIC_AUDIO_CLOUD_URL ?? '';

    const URL_WORD = cloud_url + `audio/${word?.word}/${word?.word}.mp3`;
    const URL_EXPLAINING = cloud_url + `audio/${word?.word}/explaining.mp3`;

    audioQueue.add(URL_WORD);
    audioQueue.add(URL_EXPLAINING);
    audioQueue.play(1000);
  }

  useEffect(() => {
    setWord(randomWord());
  }, []);


  useEffect(() => {
    if (word) {
      handlePlayAudio();
    }

    return () => {
      audioQueue.clear();
    }
  }, [word]);

  return ( 
    <div className="flex flex-col max-w-[1200px]">
        { !word ? <Loader /> : (
        <>
          <HeaderVocabulary wordsCount={words.length} />
          <section className="flex w-full h-full flex-col lg:flex-row">
            <WordExplainingPanel
              word={word?.word || ""}
              explaining={word?.explaining || ""}
              examplePhrase={word?.examplePhrases[randomExamplePhrase] || ""}
            />
            <div className="
              lg:max-w-[50%] w-full py-8 px-10 flex flex-col items-center justify-center 
              max-lg:border-t-2 lg:border-l-2 border-gray-300/50
            ">
              <ImageVocabulary imageUrl={imageUrl} author={author} unsplashUrl={unsplashUrl} />
            </div>
          </section>
          <div
            className="
              relative
              border-2 p-10 border-gray-300/50 rounded-md flex justify-around shadow-md      
          "
          >
            <span className="absolute top-5 right-5">
              <HelpInfo 
                title="Como funciona a revisão espaçada?"
                description="A revisão espaçada é uma técnica de estudo que envolve revisar o material aprendido em intervalos crescentes de tempo, ajudando a fortalecer a memória e a retenção de informações. Inicialmente, as revisões são mais frequentes, mas à medida que o conteúdo é consolidado na memória, os intervalos entre as revisões se tornam progressivamente mais longos. Esse método baseia-se no princípio de que revisar informações logo antes de começarmos a esquecê-las fortalece a memória de longo prazo."
              />
            </span>
            <ButtonLearning color="red" onClick={() => setWord(randomWord())}>
              <p className="text-xs">1 day</p>
              <p>Hard</p> 
            </ButtonLearning>
            <ButtonLearning color="blue" onClick={() => setWord(randomWord())}>
            <p className="text-xs">2 days</p>
              <p>Medium</p> 
            </ButtonLearning>
            <ButtonLearning color="green" onClick={() => setWord(randomWord())}>
              <p className="text-xs">4 days</p>
              <p>Easy</p> 
            </ButtonLearning>
          </div>
        </>
      )
      }
    </div>
  );
}

export default VocabularyLearning;
