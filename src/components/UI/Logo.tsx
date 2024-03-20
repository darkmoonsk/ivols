import Image  from "next/image";

function Logo() {
  return (
    <div className="
        flex items-center gap-2
    ">
        <Image 
            src="/logo-min.png"
            alt="Quantic Learn"
            width={92}
            height={92}
        />
        <h2 className="
            text-2xl font-bold text-transparent drop-shadow-2xl
            bg-gradient-to-r from-violet-500 to-violet-800 bg-clip-text
        ">Quantic Learn</h2>
    </div>
  );
}

export default Logo;