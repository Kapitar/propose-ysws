interface ButtonProps {
  children: React.ReactNode;
  color: "blue" | "green" | "red";
  type?: "button" | "submit";
  href?: string;
}

const colors = {
  blue: "bg-hc-blue hover:bg-blue-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
  red: "bg-hc-red hover:bg-red-600 text-white",
};

const Button = ({ children, color, href, type }: ButtonProps) => {
  return (
    <a href={href}>
      <button
        className={`px-4 py-2 rounded-4xl cursor-pointer text-lg font-bold ${colors[color]} hover:scale-105 transition`}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
