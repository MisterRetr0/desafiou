import React from "react";

export const TransparentBox = () => {
  return (
    <div
          style={{
            backgroundColor: "rgba(90, 62, 41, 0.1)", // Color café semitransparente
            width: "100%", // Ocupa todo el ancho de la ventana
            height: "64em", // Ocupa todo el alto de la ventana
            position: "absolute", // Posición absoluta
            top: "0", // Posición en la parte superior
            left: "0", // Alineado al borde izquierdo
            zIndex: "-2", // Detrás de otros elementos con mayor z-index
          }}
        >
        </div>
  );
};