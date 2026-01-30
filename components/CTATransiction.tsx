"use client";

import Button from "./Button";
import ButtonLink from "./ButtonLink";

const CTATransiction = () => {
  return (
    <section className="w-full flex flex-col px-2 lg:px-[110px] relative mt-[90px]">
      <div className="flex justify-start w-full ">
        <p className="font-medium text-[24px]">
          ¿Te <span className="text-primary-600">conviene</span> esta carga?
        </p>
      </div>
      <div className="w-full flex justify-end mt-8">
        <ButtonLink
          label="Calcular ahora"
          variant="default"
          href="#calculator"
        />
      </div>
    </section>
  );
};

export default CTATransiction;
