import { formatCurrencyUSD } from "@/lib/utils";
import { Fuel, Gauge, Icon, Receipt, Truck } from "lucide-react";
import { ReactNode } from "react";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

interface ResultsProps {
  gananciaNeta: number;
  gananciaPorMilla: number;
  ratePorMilla: number;
  pagoChofer: number;
  costoCombustible: number;
  costosFijosTotales: number;
}
const Results = ({
  gananciaNeta,
  gananciaPorMilla,
  ratePorMilla,
  pagoChofer,
  costoCombustible,
  costosFijosTotales,
}: ResultsProps) => {
  const isNotEmpty =
    !!gananciaNeta &&
    !!gananciaPorMilla &&
    !!ratePorMilla &&
    !!pagoChofer &&
    !!costoCombustible &&
    !!costosFijosTotales;

  return (
    <>
      {isNotEmpty ? (
        <div className="flex w-full">
          <div
            id="results"
            className="w-full max-w-[875px] rounded-xl bg-white p-5 lg:px-[72px] lg:py-[67px] mx-auto space-y-5.5 mb-[120px]"
          >
            <h3 className="font-semibold text-[18px] text-gray-700">
              Resultados
            </h3>
            <div>
              <GananciaCard
                gananciaNeta={gananciaNeta}
                gananciaPorMilla={gananciaPorMilla}
              />
            </div>
            <div className="flex gap-5.5 flex-wrap w-full">
              <Card
                title="Rate/milla"
                value={ratePorMilla}
                icon={<Gauge size={18} color={"#64748B"} />}
              />
              <Card
                title="Pago del chofer"
                value={pagoChofer}
                icon={<Truck size={18} color={"#64748B"} />}
              />
            </div>
            <div className="flex gap-5.5 flex-wrap w-full">
              <Card
                title="Costo de Combustible"
                value={costoCombustible}
                icon={<Fuel size={18} color={"#64748B"} />}
              />
              <Card
                title="Costos fijos"
                value={costosFijosTotales}
                icon={<Receipt size={18} color={"#64748B"} />}
              />
            </div>
            <div className="w-full flex justify-end items-center mt-[50px]">
              <ButtonLink
                variant="default"
                label="Seguir calculando"
                href="#calculator"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const Card = ({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: number;
}) => {
  return (
    <div className="max-sm:flex-1 shadow-xs flex flex-col px-5 py-4 gap-2 justify-center items-center border border-gray-300 rounded-xl">
      <div className="gap-1 flex items-center ">
        {icon}
        <label
          className="text-[14px] font-medium text-gray-700 "
          style={{ letterSpacing: 0.08 }}
        >
          {title}
        </label>
      </div>
      <span className="text-[18px] font-bold text-gray-900">
        {formatCurrencyUSD(value)}
      </span>
    </div>
  );
};

const GananciaCard = ({
  gananciaNeta,
  gananciaPorMilla,
}: {
  gananciaNeta: number;
  gananciaPorMilla: number;
}) => {
  const stylesColor =
    gananciaNeta >= 500
      ? {
          label: "text-success-600",
          border: "border-success-200",
          container: "bg-success-100",
        }
      : gananciaNeta > 0
      ? {
          label: "text-warning-600",
          border: "border-warning-200",
          container: "bg-warning-100",
        }
      : {
          label: "text-danger-600",
          border: "border-danger-200",
          container: "bg-danger-100",
        };

  return (
    <div
      className={` ${stylesColor.container} ${stylesColor.border} shadow-xs border px-5 max-sm:w-full w-fit py-4 gap-2 flex flex-col items-center rounded-xl`}
    >
      <span className={`text-[14px] font-medium ${stylesColor.label}`}>
        Ganancia neta
      </span>
      <span className={`font-bold text-[28px] ${stylesColor.label} `}>
        {formatCurrencyUSD(gananciaNeta)}
      </span>
      <span className="text-gray-700 font-medium text-[16px]">
        {formatCurrencyUSD(gananciaPorMilla)}
      </span>
    </div>
  );
};
export default Results;
