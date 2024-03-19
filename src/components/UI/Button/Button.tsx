import styles from "./Button.module.css";
interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    color: "green" | "red" | "blue";
}

function Button({ onClick, children, color }: ButtonProps) {
    return (
        <button className={styles[`button-${color}`]} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
