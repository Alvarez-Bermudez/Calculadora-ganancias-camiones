"use client";

import { formatCurrencyUSD, formatNumberUS } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

type DataList = { value: string; label: string }[];
const currencyDataList: DataList = [{ value: "usd", label: "USD" }];
const distancesDataList: DataList = [
  { value: "mi", label: "mi" },
  // { value: "km", label: "km" },
];
const cpmDataList: DataList = [{ value: "usd/mi", label: "USD/mi" }];

const mpgDataList: DataList = [{ value: "mpg", label: "MPG" }];
const precioCombustibleDataList: DataList = [
  { value: "usdGallon", label: "USD per US gallon" },
];

type FormaPago = "cpm" | "porcentaje";

interface FormCalculatorProps {
  setGananciaNeta: Dispatch<SetStateAction<number>>;
  setGananciaPorMilla: Dispatch<SetStateAction<number>>;
  setRatePorMilla: Dispatch<SetStateAction<number>>;
  setPagoChofer: Dispatch<SetStateAction<number>>;
  setPagoCombustible: Dispatch<SetStateAction<number>>;
  setCostosFijosTotales: Dispatch<SetStateAction<number>>;
}
const FormCalculator = ({
  setGananciaNeta,
  setGananciaPorMilla,
  setRatePorMilla,
  setPagoChofer,
  setPagoCombustible,
  setCostosFijosTotales,
}: FormCalculatorProps) => {
  const [precioCargaValue, setPrecioCargaValue] = useState<string>("");
  const [precioCargaUnit, setPrecioCargaUnit] = useState<string>("");

  const [formaPago, setFormaPago] = useState<FormaPago>("cpm");

  const [millasCargadasValue, setMillasCargadasValue] = useState<string>("");
  const [millasCargadasUnit, setMillasCargadasUnit] = useState<string>("");
  const [millasVaciasValue, setMillasVaciasValue] = useState<string>("");
  const [millasVaciasUnit, setMillasVaciasUnit] = useState<string>("");

  const [cpmValue, setCpmValue] = useState<string>("");
  const [cpmUnit, setCpmUnit] = useState<string>("");

  const [mpgValue, setMpgValue] = useState<string>("");
  const [mpgUnit, setMpgUnit] = useState<string>("");
  const [precioCombustibleValue, setPrecioCombustibleValue] =
    useState<string>("");
  const [precioCombustibleUnit, setPrecioCombustibleUnit] =
    useState<string>("");
  const [costosFijosValue, setCostosFijosValue] = useState<string>("");
  const [costosFijosUnit, setCostosFijosUnit] = useState<string>("");

  const [porcentaje, setPorcentaje] = useState<string>("");
  const [millasRecorridasValue, setMillasRecorridasValue] =
    useState<string>("");
  const [millasRecorridasUnit, setMillasRecorridasUnit] = useState<string>("");
  const navigation = useRouter();

  function reset() {
    setPrecioCargaValue("");
    setMillasCargadasValue("");
    setMillasVaciasValue("");
    setCpmValue("");
    setMpgValue("");
    setPrecioCombustibleValue("");
    setCostosFijosValue("");
    setPorcentaje("");
    setMillasRecorridasValue("");
    setGananciaNeta(0);
    setGananciaPorMilla(0);
    setRatePorMilla(0);
    setPagoChofer(0);
    setPagoCombustible(0);
    setCostosFijosTotales(0);
  }

  function calculate() {
    try {
      if (formaPago === "cpm") {
        const precioCarga = Number(precioCargaValue);
        const millasCargadas = Number(millasCargadasValue);
        const millasVacias = Number(millasVaciasValue);
        const cpm = Number(cpmValue);
        const mpg = Number(mpgValue);
        const precioGalon = Number(precioCombustibleValue);
        const costosFijosPorMilla = Number(costosFijosValue);
        if (
          !precioCarga ||
          !millasCargadas ||
          !millasVacias ||
          !cpm ||
          !mpg ||
          !precioGalon ||
          !costosFijosPorMilla
        ) {
          alert("Debe completar todos los campos");
          return;
        }

        const millasTotales = millasCargadas + millasVacias;

        const millasPagadas = millasCargadas + Math.max(millasVacias - 100, 0);

        const ratePorMilla = precioCarga / millasTotales;

        const pagoChofer = millasPagadas * cpm;

        const galonesUsados = millasTotales / mpg;
        const costoCombustible = galonesUsados * precioGalon;

        const costosFijosTotales = costosFijosPorMilla * millasTotales;

        const gananciaNeta =
          precioCarga - pagoChofer - costoCombustible - costosFijosTotales;
        const gananciaPorMilla = gananciaNeta / millasTotales;

        setGananciaNeta(gananciaNeta);
        setGananciaPorMilla(gananciaPorMilla);
        setRatePorMilla(ratePorMilla);
        setPagoChofer(pagoChofer);
        setPagoCombustible(costoCombustible);
        setCostosFijosTotales(costosFijosTotales);
      } else {
        // Pago por porcentaje

        const precioCarga = Number(precioCargaValue);
        const millasTotales = Number(millasRecorridasValue);
        const _porcentaje = Number(porcentaje);
        const mpg = Number(mpgValue);
        const precioGalon = Number(precioCombustibleValue);
        const costosFijosPorMilla = Number(costosFijosValue);

        if (
          !precioCarga ||
          !millasTotales ||
          !_porcentaje ||
          !mpg ||
          !precioGalon ||
          !costosFijosPorMilla
        ) {
          alert("Debe completar todos los campos");
          return;
        }

        const ratePorMilla = precioCarga / millasTotales;

        const pagoChofer = (precioCarga * _porcentaje) / 100.0;

        const galonesUsados = millasTotales / mpg;
        const costoCombustible = galonesUsados * precioGalon;

        const costosFijosTotales = costosFijosPorMilla * millasTotales;

        const gananciaNeta =
          precioCarga - pagoChofer - costoCombustible - costosFijosTotales;
        const gananciaPorMilla = gananciaNeta / millasTotales;

        setGananciaNeta(gananciaNeta);
        setGananciaPorMilla(gananciaPorMilla);
        setRatePorMilla(ratePorMilla);
        setPagoChofer(pagoChofer);
        setPagoCombustible(costoCombustible);
        setCostosFijosTotales(costosFijosTotales);
      }
      navigation.replace("#results");
    } catch (e) {
      alert("Error al calcular");
    }
  }

  return (
    <div className="flex w-full mt-[120px]">
      <div
        id="calculator"
        className="w-full max-w-[875px] rounded-xl bg-white p-5 lg:px-[72px] lg:py-[67px] mx-auto space-y-5.5 mb-[120px]"
      >
        <div className="flex flex-col gap-2.5 max-sm:w-full">
          <label className="text-[14px] text-gray-900 font-medium">
            Precio de la carga (Ingreso Bruto):
          </label>
          <CustomTextInput
            value={precioCargaValue}
            setValue={setPrecioCargaValue}
            dropdownDataList={currencyDataList}
            dropdownValue={precioCargaUnit}
            setDropdownValue={setPrecioCargaUnit}
            placeholder="10,000.00"
          />
        </div>

        <div className="w-full space-y-2.5">
          <div className="flex items-center w-full gap-1 justify-between ">
            <label className="font-medium text-[14px] text-gray-900 text-nowrap ">
              Forma de pago del chofer:
            </label>
            <div className="h-px bg-gray-300 w-full" />
          </div>

          <div className="flex gap-5.5">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pagoChofer"
                value="cpm"
                className="accent-primary-500 size-[17px]"
                checked={formaPago === "cpm" ? true : false}
                onChange={() => setFormaPago("cpm")}
              />
              <span className="text-[15px]  text-gray-900">
                CPM (Cobro por milla)
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="pagoChofer"
                value="porcentaje"
                className="accent-primary-500 size-[17px]"
                checked={formaPago === "porcentaje" ? true : false}
                onChange={() => setFormaPago("porcentaje")}
              />
              <span className="text-[15px]  text-gray-900">Porcentaje</span>
            </label>
          </div>
        </div>

        {formaPago === "cpm" ? (
          <>
            <div className="flex flex-col gap-2.5">
              <label className="text-[14px] text-gray-900 font-medium">
                CPM:
              </label>
              <CustomTextInput
                value={cpmValue}
                setValue={setCpmValue}
                dropdownDataList={cpmDataList}
                dropdownValue={cpmValue}
                setDropdownValue={setCpmValue}
                placeholder="2.50"
              />
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-center w-full gap-1 justify-between ">
                <label className="font-semibold text-[14px] text-gray-900 text-nowrap ">
                  Millas recorridas
                </label>
                <div className="h-px bg-gray-300 w-full" />
              </div>

              <div className="flex gap-5.5 flex-wrap">
                <div className="flex flex-col gap-2.5 max-md:w-full">
                  <label className="text-[14px] text-gray-900 font-medium">
                    Millas cargadas:
                  </label>
                  <CustomTextInput
                    value={millasCargadasValue}
                    setValue={setMillasCargadasValue}
                    dropdownDataList={distancesDataList}
                    dropdownValue={millasCargadasUnit}
                    setDropdownValue={setMillasCargadasUnit}
                    placeholder="1,000.00"
                  />
                </div>
                <div className="flex flex-col gap-2.5 max-md:w-full">
                  <label className="text-[14px] text-gray-900 font-medium">
                    Millas vacías (deadhead):
                  </label>
                  <CustomTextInput
                    value={millasVaciasValue}
                    setValue={setMillasVaciasValue}
                    dropdownDataList={distancesDataList}
                    dropdownValue={millasVaciasUnit}
                    setDropdownValue={setMillasVaciasUnit}
                    placeholder="100.00"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-5.5 flex-wrap ">
            <div className="flex flex-col gap-2.5 max-sm:w-full">
              <label className="text-[14px] text-gray-900 font-medium">
                Porcentaje:
              </label>
              <div className="flex flex-1 max-sm:w-full md:max-w-[228px] items-center px-[5px] pt-[5px] pb-[7px] border rounded-lg border-gray-300 justify-end">
                <input
                  className="px-2 caret-gray-500 text-right w-[164px] text-gray-600 placeholder-gray-300 font-medium text-[15px] border-none focus:outline-none focus:border-transparent"
                  type="number"
                  value={porcentaje}
                  onChange={(e) => {
                    if (+e.target.value >= 0) setPorcentaje(e.target.value);
                    else setPorcentaje("0");
                  }}
                  placeholder={"30%"}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 max-sm:w-full">
              <label className="text-[14px] text-gray-900 font-medium">
                Millas recorridas:
              </label>
              <CustomTextInput
                value={millasRecorridasValue}
                setValue={setMillasRecorridasValue}
                dropdownDataList={distancesDataList}
                dropdownValue={millasRecorridasUnit}
                setDropdownValue={setMillasRecorridasUnit}
                placeholder="1,000.00"
              />
            </div>
          </div>
        )}

        <div className="w-full space-y-2">
          <div className="flex items-center w-full gap-1 justify-between ">
            <label className="font-semibold text-[14px] text-gray-900 text-nowrap ">
              Costos operativos
            </label>
            <div className="h-px bg-gray-300 w-full" />
          </div>

          <div className="flex gap-5.5 flex-wrap">
            <div className="flex flex-col gap-2.5 max-sm:w-full">
              <label className="text-[14px] text-gray-900 font-medium">
                Rendimiento del camión (MPG):
              </label>
              <CustomTextInput
                value={mpgValue}
                setValue={setMpgValue}
                dropdownDataList={mpgDataList}
                dropdownValue={mpgUnit}
                setDropdownValue={setMpgUnit}
                placeholder="6.50"
              />
            </div>
            <div className="flex flex-col gap-2.5 max-sm:w-full">
              <label className="text-[14px] text-gray-900 font-medium">
                Precio del combustible:
              </label>
              <CustomTextInput
                value={precioCombustibleValue}
                setValue={setPrecioCombustibleValue}
                dropdownDataList={precioCombustibleDataList}
                dropdownValue={precioCombustibleUnit}
                setDropdownValue={setPrecioCombustibleUnit}
                placeholder="5.00"
              />
            </div>
            <div className="flex flex-col gap-2.5 max-sm:w-full">
              <label className="text-[14px] text-gray-900 font-medium">
                Costos fijos por milla:
              </label>
              <CustomTextInput
                value={costosFijosValue}
                setValue={setCostosFijosValue}
                dropdownDataList={currencyDataList}
                dropdownValue={costosFijosUnit}
                setDropdownValue={setCostosFijosUnit}
                placeholder="0.75"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end gap-5.5 mt-[50px] flex-wrap">
          <button
            className={`max-sm:w-full hover:bg-primary-100 flex flex-row justify-center items-center px-7 py-2.5 rounded-lg border border-primary-500`}
            onClick={reset}
          >
            <label
              className={`block font-medium text-[14px] text-primary-500 `}
            >
              Reiniciar
            </label>
          </button>

          <Button variant="default" label="Calcular" onPress={calculate} />
        </div>
      </div>
    </div>
  );
};

interface CustomTextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  dropdownDataList: { value: string; label: string }[];
  dropdownValue: string;
  setDropdownValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

const CustomTextInput = ({
  value,
  setValue,
  dropdownDataList,
  dropdownValue,
  setDropdownValue,
  placeholder,
}: CustomTextInputProps) => {
  return (
    <div className="flex flex-1 max-md:w-full lg:max-w-[228px] items-center px-[5px] pt-[5px] pb-[7px] border rounded-lg border-gray-300 justify-end">
      <input
        className="caret-gray-500 text-right w-[164px] text-gray-900 placeholder-gray-300 font-medium text-[15px] border-none focus:outline-none focus:border-transparent"
        type="number"
        value={value}
        onChange={(e) => {
          if (+e.target.value >= 0) setValue(e.target.value);
          else setValue("0");
        }}
        placeholder={placeholder}
      />
      <span className="text-gray-500">&nbsp;|</span>
      <select
        className="text-gray-500 w-auto text-[15px] border-none focus:outline-none focus:border-transparent"
        value={dropdownValue}
        style={{ width: "70px" }}
        onChange={(e) => setDropdownValue(e.target.value)}
      >
        {dropdownDataList.map((data) => (
          <option key={data.value} value={data.value}>
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormCalculator;
