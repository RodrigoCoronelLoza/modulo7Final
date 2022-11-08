import { func } from "prop-types";
import React, { ChangeEvent, useState } from "react";
import "./dialog.css";
import Draggable from "react-draggable";

/**
 * Primary UI component for user interaction
 */
export const DraggableDialog = () => {
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
      <button onClick={handleClickOpen}> ABRIR draggable</button>
      <Draggable>
        <dialog onClose={handleClose} open={open} style={{ width: 800 }}>
          <h2>ARRASTRAR</h2>
          <p>Je te laisserai des mot on dessous de ta porte</p>
          <button onClick={handleClose}>CERRAR</button>
        </dialog>
      </Draggable>
    </>
  );
};
