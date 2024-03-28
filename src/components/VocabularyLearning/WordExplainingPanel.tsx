import AudioPlayButton from "../AudioPlayButton";
import HelpInfo from "../HelpInfo";

interface WordExplainingPanelProps {
  word: string;
  explaining: string;
  examplePhrases: string[];
}

function WordExplainingPanel({ word, explaining, examplePhrases }: WordExplainingPanelProps) {
  const randomExamplePhrase = Math.floor(Math.random() * 3);

  return (
    <div className="relative lg:max-w-[50%] w-full min-h-[500px] flex flex-col gap-10 px-10 py-8">
      <div className="absolute top-5 right-5">
        <HelpInfo
          title="IVOLS - Como funciona?"
          description="Consiste em aprender o significado, um exemplo de uso e imagem que represente a palavra ou a frase(Atualmente não suportado totalmente). Tudo isso lido em voz alta pelo nosso assistente virtual de IA(Não suportado totalmente ainda), com a qualidade de leitura é semelhante a humana o que ajuda e muito no processo de aprendizado."
        />
      </div>
      <div className="flex gap-2 items-center justify-center border-b-2 border-gray-400/25">
        <h2
          className="text-2xl font-bold capitalize text-yellow-400">
          {word}
        </h2>
        <AudioPlayButton path={`audio/${word}/${word}.mp3`} />
      </div>
      <div className="w-full bg-violet-400 shadow-md text-white p-5 rounded-xl">
        <div className="float-right">
        <AudioPlayButton path={`audio/${word}/explaining.mp3`} />
        </div>
        <p>{explaining}</p>
      </div>
      <div className="w-full bg-violet-400 shadow-md text-white p-5 rounded-xl">
        <p className="font-bold">Example: {examplePhrases[randomExamplePhrase]}</p>
      </div>
    </div>
  );
}

export default WordExplainingPanel;
