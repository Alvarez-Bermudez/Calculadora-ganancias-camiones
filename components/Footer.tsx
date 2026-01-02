const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 p-4 flex items-center justify-center w-full">
      <p className="text-[14px] font-medium text-gray-100">
        Calculadora de ganancias para camiones - {currentYear} © Todos los
        derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
