"use client";

import Button from "./Button";

const CTATransiction = () => {
  return (
    <div className="w-full px-[110px] relative mt-[90px]">
      <p className="font-medium text-[24px]">
        ¿Te <span className="text-primary-600">conviene</span> esta carga?
      </p>
      <div className="w-full flex justify-end mt-8">
        <Button label="Calcular ahora" variant="default" onPress={() => {}} />
      </div>
    </div>
  );
};

export default CTATransiction;
