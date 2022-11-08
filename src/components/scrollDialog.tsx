import { func } from "prop-types";
import React, { ChangeEvent, useState } from "react";
import "./dialog.css";
import Draggable from "react-draggable";

/**
 * Primary UI component for user interaction
 */
export const ScrollDialog = () => {
  const [open, setOpen] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClickOpen}> SCROLL</button>
      <Draggable>
        <dialog onClose={handleClose} open={open} style={{ width: 800 }}>
          <h2> TEXTO</h2>
          {/* <marquee> Je te laisserai des mot on dessous de ta porte</marquee> */}

          <div id="scrolldiv">
            As you can see, once there's enough text in this box, the box will
            grow scroll bars... that's why we call it a scroll box! You could
            also place an image into the scroll box. uego de la elección de
            Jerges Mercado como presidente de la Cámara de Diputados, el
            diputado del Movimiento Al Socialismo (MAS) Rolando Cuéllar
            manifestó este lunes que se terminó el “dedazo” de 14 años y que
            legisladores del Chapare, sede del instrumento político, “nunca más
            volverán a asumir” cargos jerárquicos en la Asamblea Legislativa.
            “Queremos decirles a los del ala radical que se terminaron los
            dedazos de los 14 años, vuelve la democracia después de 14 años. La
            renovación empieza, una nueva gestión 2022-2023, el Chapare nunca
            más va a asumir un cargo dentro de estos cargos jerárquicos (de la
            Asamblea Legislativa”, afirmó Cuéllar, según Gigavisión. Dijo que el
            bloque de Evo Morales no volverá a ocupar cargos de relevancia en el
            Legislativo, porque no quieren opositores que interpelen a ministros
            “sin ningún argumento” y que no permitirán la intervención de
            “caprichosos” dentro de la Asamblea.
          </div>

          <button onClick={handleClose}>CERRAR</button>
        </dialog>
      </Draggable>
    </>
  );
};
