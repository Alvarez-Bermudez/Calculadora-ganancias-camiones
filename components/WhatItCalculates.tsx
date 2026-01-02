const WhatItCalculates = () => {
  return (
    <section
      className="max-md:p-3 relative text-gray-100 mt-[78px]"
      style={{
        backgroundImage: "url('/assets/TruckPhoto.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: 768,
      }}
    >
      <div className="relative max-md:mb-2 md:absolute md:left-14 md:top-[47px]">
        <h3 className=" text-[22px] font-semibold">
          Obten métricas de manera rápida
        </h3>
      </div>

      <div className="relative md:absolute md:right-28 md:top-[102px]">
        <p className="text-[17px] font-medium leading-10 max-sm:text-right">
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
    </section>
  );
};

export default WhatItCalculates;
