"use client";

import { useState } from "react";
import FormCalculator from "./FormCalculator";
import Results from "./Results";

const Actions = () => {
  const [gananciaNeta, setGananciaNeta] = useState<number>(600);
  const [gananciaPorMilla, setGananciaPorMilla] = useState<number>(1);
  const [ratePorMilla, setRatePorMilla] = useState<number>(1);
  const [pagoChofer, setPagoChofer] = useState<number>(1);
  const [costoCombustible, setPagoCombustible] = useState<number>(1);
  const [costosFijosTotales, setCostosFijosTotales] = useState<number>(1);

  return (
    <>
      <FormCalculator
        setGananciaNeta={setGananciaNeta}
        setGananciaPorMilla={setGananciaPorMilla}
        setRatePorMilla={setRatePorMilla}
        setPagoChofer={setPagoChofer}
        setPagoCombustible={setPagoCombustible}
        setCostosFijosTotales={setCostosFijosTotales}
      />
      <Results
        gananciaNeta={gananciaNeta}
        gananciaPorMilla={gananciaPorMilla}
        ratePorMilla={ratePorMilla}
        pagoChofer={pagoChofer}
        costoCombustible={costoCombustible}
        costosFijosTotales={costosFijosTotales}
      />
    </>
  );
};

export default Actions;
