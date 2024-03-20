import cn from "@/utils/cn";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    color: "green" | "red" | "blue";
}

function ButtonLearning({ onClick, children, color }: ButtonProps) {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded text-black hover:text-white font-semibold",
                "cursor-pointer shadow-lg transition-all duration-300 ease-in-out",
                color === "green" ? "border-2 border-green-500 hover:bg-green-500" : "",
                color === "red" ? "border-2 border-red-500 hover:bg-red-500" : "",
                color === "blue" ? "border-2 border-blue-500 hover:bg-blue-500" : ""
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonLearning;
