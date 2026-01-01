const WhatItCalculates = () => {
  return (
    <div
      className="relative text-gray-100 mt-[78px]"
      style={{
        backgroundImage: "url('/assets/TruckPhoto.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "90%",
        height: 768,
      }}
    >
      <div className="absolute left-14 top-[47px]">
        <h3 className=" text-[22px] font-semibold">
          Obten métricas de manera rápida
        </h3>
      </div>

      <div className="absolute right-28 top-[102px]">
        <p className="text-[17px] font-medium leading-10">
          • Rate por milla <br />
          • Pago del chofer (CPM o porcentaje) <br />
          • Combustible
          <br />
          • Costos fijos por milla
          <br />
          • Ganancia neta
          <br />
          • Ganancia por milla
          <br />
        </p>
      </div>

      <div className="absolute right-1 bottom-0">
        <p>
          Photo by{" "}
          <a
            className="text-gray-300"
            href="https://unsplash.com/@photogasan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Gabriel Santos
          </a>{" "}
          on{" "}
          <a
            className="text-gray-300"
            href="https://unsplash.com/photos/white-truck-on-road-during-daytime-GBVDilE8yvI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default WhatItCalculates;
