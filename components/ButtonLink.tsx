"use-client";

import Link from "next/link";

type ButtonProps = {
  variant: "default" | "outline";
  label: string;
  href: string;
};

const ButtonLink = ({ variant, label, href }: ButtonProps) => {
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
    <Link
      className={` ${variants.hover[variant]} max-sm:w-full flex flex-row justify-center items-center px-7 py-2.5 rounded-lg ${variants.container[variant]}`}
      href={href}
    >
      <label
        className={`block font-medium text-[14px] ${variants.label[variant]} `}
      >
        {label}
      </label>
    </Link>
  );
};

export default ButtonLink;
