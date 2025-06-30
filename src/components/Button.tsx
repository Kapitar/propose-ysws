interface ButtonProps {
  children: React.ReactNode;
  color: "blue" | "green" | "red";
  href?: string;
}

const colors = {
  blue: "bg-blue-500 hover:bg-blue-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
  red: "bg-red-500 hover:bg-red-600 text-white",
};

const Button = ({ children, color, href }: ButtonProps) => {
  return (
    <a href={href}>
      <button
        className={`px-4 py-2 rounded-xl cursor-pointer ${colors[color]}`}
        type="button"
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
