import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./AddModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  background: "#ffffff",
  p: 4,
  border: "1px solid #D9F1F1",
  padding: "0px",
};

const AddModal = ({ openAddModal, onClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={openAddModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="add-header">
          <div className="add-modal-top">
            <p
              style={{ display: "flex", alignItems: "center", padding: "9px", gap: '7px' }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 6.2025V3.1725C16.5 1.98 16.02 1.5 14.8275 1.5H11.7975C10.605 1.5 10.125 1.98 10.125 3.1725V6.2025C10.125 7.395 10.605 7.875 11.7975 7.875H14.8275C16.02 7.875 16.5 7.395 16.5 6.2025Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.875 6.39V2.985C7.875 1.9275 7.395 1.5 6.2025 1.5H3.1725C1.98 1.5 1.5 1.9275 1.5 2.985V6.3825C1.5 7.4475 1.98 7.8675 3.1725 7.8675H6.2025C7.395 7.875 7.875 7.4475 7.875 6.39Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.875 14.8275V11.7975C7.875 10.605 7.395 10.125 6.2025 10.125H3.1725C1.98 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.98 16.5 3.1725 16.5H6.2025C7.395 16.5 7.875 16.02 7.875 14.8275Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.875 13.125H15.375"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13.125 15.375V10.875"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Add
            </p>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: "text.secondary",
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="add-modal-content">
          
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 2 }}
          >
            Text in drea modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default AddModal;
