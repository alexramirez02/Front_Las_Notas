import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

const App = ({ Component, pageProps }: any) => {
  // Estado para saber si estamos en el cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Solo se ejecuta en el navegador
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Si aún no estamos en el cliente, no renderizamos nada relacionado con document
    return null;
  }

  return (
    <BrowserRouter>
      <Component {...pageProps} />
    </BrowserRouter>
  );
};

export default App;
