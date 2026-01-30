"use-client";

type ButtonProps = {
  variant: "default" | "outline";
  label: string;
  onPress: () => void;
};

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const variants = {
    label: {
      default: "text-gray-100",
      outline: "text-primary-500",
    },
    container: {
      default: "bg-primary-500",
      outline: "border border-primary-500 ",
    },
    hover: {
      default: "hover:opacity-55",
      outline: "hover:bg-primary-100",
    },
  };

  return (
    <button
      className={`max-sm:w-full ${variants.hover[variant]} flex flex-row justify-center items-center px-7 py-2.5 rounded-lg ${variants.container[variant]}`}
      onClick={onPress}
    >
      <label
        className={`block font-medium text-[14px] ${variants.label[variant]} `}
      >
        {label}
      </label>
    </button>
  );
};

export default Button;
