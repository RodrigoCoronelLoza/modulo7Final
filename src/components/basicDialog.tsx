import { func } from "prop-types";
import React, { useState } from "react";
import "./dialog.css";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlinePlusCircle } from "react-icons/hi";

const emails = ["user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
interface BasicDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  // /**

  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  // /**
  //  * Optional click handler
  //  */
  // onClick?: () => void;
}

function Dialogo(props: BasicDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  function ListItem(props: any) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }

  const listItems = emails.map((numero) => (
    <>
      <ListItem
        key={numero}
        // value={numero}
      ></ListItem>
      <button onClick={() => handleListItemClick(numero)}>
        <HiOutlineUser /> {numero}
      </button>
    </>

    // <ListItem key={numero}>
    //   <button>{numero} </button>
    // <ListItem/>
  ));

  return (
    <>
      <dialog onClose={handleClose} open={open}>
        <h2>Elige tu cuenta</h2>
        <ul>{listItems}</ul>
        <form method="dialog">
          <button>
            <HiOutlinePlusCircle /> Otra cuenta
          </button>
        </form>
      </dialog>
    </>
  );
}

/**
 * Primary UI component for user interaction
 */
export const BasicDialog = ({ label, ...props }: BasicDialogProps) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <h2>selected: {selectedValue}</h2>
      <button onClick={handleClickOpen}>{label}</button>
      <Dialogo
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
