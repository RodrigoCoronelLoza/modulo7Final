import { func } from "prop-types";
import React, { useState } from "react";
import "./dialog.css";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";

/**
 * Primary UI component for user interaction
 */
export const FormDialog = () => {
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
      <button onClick={handleClickOpen}> ABRIR FORM DIALOG</button>
      <dialog onClose={handleClose} open={open}>
        <h2>CORREO</h2>
        <p>Donnez nous votre email</p>
        <p>
          <input type="text" name="email" />
        </p>
        <button onClick={handleClose}>CANCELAR</button>
        <button onClick={handleClose}>ENVIAR</button>
      </dialog>
    </>
  );
};
