interface WordExplainingPanelProps {
  word: string;
  explaining: string;
  examplePhrases: string[];
}

function WordExplainingPanel({ word, explaining, examplePhrases }: WordExplainingPanelProps) {
  return (
    <div className="lg:max-w-[50%] w-full min-h-[500px] flex flex-col gap-10 px-10 py-8">
      <h2 className="text-2xl text-center font-bold capitalize border-b-2 border-gray-400/25">{word}</h2>
      <div className="w-full bg-violet-400 shadow-md text-white p-5 rounded-xl">
        <p>{explaining}</p>
      </div>
      <div className="w-full bg-violet-400 shadow-md text-white p-5 rounded-xl">
        <p className="font-bold">{examplePhrases[Math.floor(Math.random() * 3)]}</p>
      </div>
    </div>
  );
}

export default WordExplainingPanel;
