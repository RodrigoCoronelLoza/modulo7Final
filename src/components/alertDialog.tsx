import { func } from "prop-types";
import React, { useState } from "react";
import "./dialog.css";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";

/**
 * Primary UI component for user interaction
 */
export const AlertDialog = () => {
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
      <button onClick={handleClickOpen}> ABRIR ALERT DIALOG</button>
      <dialog onClose={handleClose} open={open}>
        <h2>WARNING</h2>
        <p>Confutatis maledictis, flamis sacris busadictis</p>
        <button onClick={handleClose}>ACEPTAR</button>
        <button onClick={handleClose}>RECHAZAR</button>
      </dialog>
    </>
  );
};
