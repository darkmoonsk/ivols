import Image from "next/image";
import Loader from "../UI/Loader/Loader";

interface ImageVocabularyProps {
  imageUrl: string;
  author: string;
  unsplashUrl: string;
}

function ImageVocabulary({ imageUrl, author, unsplashUrl }: ImageVocabularyProps) {
  return (
    <div>
      {!imageUrl ? (
        <Loader />
      ) : (
        <>
          <a href={unsplashUrl} target="_blank" rel="noreferrer">
            <Image src={imageUrl} alt="image" width={500} height={350} className="rounded-xl shadow-md" priority />
          </a>
          <p>
            Image from: {author} 
            <span> - </span>
            <a href={unsplashUrl} className="font-bold" target="_blank" rel="noreferrer">
              Unsplash
            </a>
            <span> | </span>
            <span className="italic font-medium">The image might not be accurate with the word or phrase meaning</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ImageVocabulary;
