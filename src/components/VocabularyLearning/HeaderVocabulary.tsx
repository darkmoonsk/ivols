function HeaderVocabulary({ wordsCount } : { wordsCount: number }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between py-5 
      px-4 bg-fuchsia-100/50 rounded shadow-sm
    ">
      <h1 className="text-xl font-bold text-cyan-600">I.VO.L.S - Intelligent Vocabulary Learning System</h1>
      <div className="flex gap-2">
        <p className="text-green-500">To learn: 15</p>
        <span className="text-gray-400/50">|</span>
        <p className="text-red-500">To review: 127</p>
        <span className="text-gray-400/50">|</span>
        <p className="text-blue-500">Total: 41945</p>
      </div>
    </div>
  );
}

export default HeaderVocabulary;
