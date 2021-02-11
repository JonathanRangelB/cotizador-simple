import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spiner from "./components/Spiner";
import React, { Fragment, useState } from "react";

function App() {
  // Definir el estado
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);
  let componente;

  if (cargando) {
    componente = <Spiner />;
  } else if (total === 0) {
    componente = <Mensaje className="mensajes" />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <Fragment>
      <Header titulo="Cotizador de Prestamos" />
      <div className="formulario">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
          setCargando={setCargando}
        ></Formulario>
        {componente}
      </div>
    </Fragment>
  );
}

export default App;
