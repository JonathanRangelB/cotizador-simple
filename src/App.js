import Header from "./components/Header";
import Formulario from "./components/Formulario";
import React, { Fragment, useState } from "react";

function App() {
  // Definir el estado
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

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
        ></Formulario>
        {total   !==   0   ?   <p>Total a pagar: $ {total}</p>   :   null}
      </div>
    </Fragment>
  );
}

export default App;
