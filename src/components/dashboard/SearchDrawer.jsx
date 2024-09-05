import React, { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchDrawer.css";

const SearchDrawer = ({ onClose, openSearchNavigation }) => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [showCard, setShowCard] = useState(false); // State for showing the card

  // Handle input change and show card only when there's text
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setTimeout(() => {
      setShowCard(value.trim() !== "");
    }, 1000);
  };

  //handleCloseInput
  const handleCloseInput = () => {
    setInputValue("");
    setShowCard(false);
  };

  // Close drawer
  const handleBack = () => {
    openSearchNavigation(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "50px 0px 20px 0px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        gap: "20px",
      }}
      role="presentation"
    >
      <Box sx={{ flexGrow: 1, padding: "0px 70px 0px 70px" }}>
        <div className="search-content">
          <div className="search-input">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C17.2467 21 21.5 16.7467 21.5 11.5C21.5 6.25329 17.2467 2 12 2C6.75329 2 2.5 6.25329 2.5 11.5C2.5 16.7467 6.75329 21 12 21Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 22L20.5 20"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange} // Handle input change
              placeholder="Search..."
            />

            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleCloseInput}
            >
              <path
                d="M6.5 18L18.5 6"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 18L6.5 6"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Card that shows when there's text in the input */}
          {showCard && (
            <div className="search-card" style={{ marginTop: "10px" }}>
              <Box
                sx={{
                  padding: "20px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3>Search Suggestions</h3>
                <p>Suggestion 1</p>
                <p>Suggestion 2</p>
                <p>Suggestion 3</p>
              </Box>
            </div>
          )}
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 16,
          width: "100%",
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            backgroundColor: "#155C9E",
            border: "1px solid #62C6FF",
            color: "#fff",
            boxShadow: "#0022421A",
            height: "50px",
            width: "50px",
            borderRadius: "42px",
            "&:hover": {
              backgroundColor: "#155C9E",
              boxShadow: "#0022421A",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchDrawer;
