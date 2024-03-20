import Footer from "@/components/Footer";
import Logo from "@/components/UI/Logo";
import VocabularyLearning from "@/components/VocabularyLearning/VocabularyLearning";

export default function Home() {
  return (
    <>
      <header className="p-12">
        <Logo />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <VocabularyLearning />
      </main>
      <Footer />
    </>
  );
}
