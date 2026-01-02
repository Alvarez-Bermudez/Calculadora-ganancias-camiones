"use client";

import Button from "./Button";
import ButtonLink from "./ButtonLink";

const CTATransiction = () => {
  return (
    <div className="w-full px-[110px] relative mt-[90px]">
      <p className="font-medium text-[24px]">
        ¿Te <span className="text-primary-600">conviene</span> esta carga?
      </p>
      <div className="w-full flex justify-end mt-8">
        <ButtonLink
          label="Calcular ahora"
          variant="default"
          href="#calculator"
        />
      </div>
    </div>
  );
};

export default CTATransiction;
