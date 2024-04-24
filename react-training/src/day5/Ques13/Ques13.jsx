import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import style from "./style";



const Ques13 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button style={{ border: "1px solid #000" }} onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>Toggle the page</strong>
          </Typography>
          <Typography id="modal-modal-body" variant="h6" component="h5">
            Just Click anywhere then the modal component will close
          </Typography>

          <Button style={{ border: "1px solid #000" }} onClick={handleClose}>
            Close modal
          </Button>
        </Box>
      </Modal>
    </>
  );
};
 export default Ques13;
