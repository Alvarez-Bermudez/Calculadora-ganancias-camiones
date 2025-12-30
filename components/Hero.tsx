"use client";

import { Fuel, Gauge, Receipt, TrendingUp, Truck } from "lucide-react";
import Button from "./Button";
import { colors } from "@/lib/constants";

const Hero = () => {
  return (
    <div className="flex flex-col w-full items-center relative ">
      <h2 className="text-[32px] mt-40 text-center font-semibold leading-11 text-gray-900 max-w-[660px]">
        Calcula la rentabilidad real de cada carga{" "}
        <span className="text-primary-600">en segundos</span>
      </h2>

      <p className="text-xl mt-10 text-center max-w-220 font-normal leading-6 text-gray-900">
        Diseñada para dueños de camiones y operadores independientes que
        necesitan decidir rápido si una carga vale la pena.
      </p>

      <div className="flex flex-row justify-center items-center gap-6 mt-28 ">
        <Button
          variant="default"
          label="Calcular mi carga"
          onPress={() => {}}
        />
        <Button
          variant="outline"
          label="Ver cómo funciona"
          onPress={() => {}}
        />

        <div className="absolute left-[68px] top-[463px] ">
          <div className="size-[35px] rounded-full bg-primary-600 items-center justify-center flex">
            <Receipt size={23} color={colors.gray[100]} />
          </div>
        </div>

        <div className="absolute left-[135px] top-[520px]">
          <TrendingUp size={24} color={colors.primary[500]} />
        </div>

        <div className="absolute left-[90px] top-[560px]">
          <div className="-rotate-21">
            <Gauge width={38} height={42} color={colors.primary[600]} />
          </div>
        </div>

        <div className="absolute right-[180px] top-[435px] ">
          <div className="-rotate-8">
            <div className="size-[35px] rounded-full bg-primary-600 items-center justify-center flex">
              <Truck size={23} color={colors.gray[100]} />
            </div>
          </div>
        </div>

        <div className="absolute right-[140px] top-[498px]">
          <div className="rotate-19">
            <Fuel width={24} height={26} color={colors.primary[600]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
