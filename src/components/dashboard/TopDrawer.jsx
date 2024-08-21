import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function TopDrawer({ openDrawer, onClose }) {
  const DrawerList = (
    <Box
      sx={{
        height: "100%", // Make drawer full height
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
        <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', color: '#BE185D', fontSize: '22px' }}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0399 8.30989C19.3986 8.30989 20.5 7.20851 20.5 5.84989C20.5 4.49127 19.3986 3.38989 18.0399 3.38989C16.6813 3.38989 15.58 4.49127 15.58 5.84989C15.58 7.20851 16.6813 8.30989 18.0399 8.30989Z"
              stroke="#BE185D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.96001 8.30989C8.31863 8.30989 9.42 7.20851 9.42 5.84989C9.42 4.49127 8.31863 3.38989 6.96001 3.38989C5.60139 3.38989 4.5 4.49127 4.5 5.84989C4.5 7.20851 5.60139 8.30989 6.96001 8.30989Z"
              stroke="#BE185D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0399 20.6099C19.3986 20.6099 20.5 19.5086 20.5 18.1499C20.5 16.7913 19.3986 15.6899 18.0399 15.6899C16.6813 15.6899 15.58 16.7913 15.58 18.1499C15.58 19.5086 16.6813 20.6099 18.0399 20.6099Z"
              stroke="#BE185D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.96001 20.6099C8.31863 20.6099 9.42 19.5086 9.42 18.1499C9.42 16.7913 8.31863 15.6899 6.96001 15.6899C5.60139 15.6899 4.5 16.7913 4.5 18.1499C4.5 19.5086 5.60139 20.6099 6.96001 20.6099Z"
              stroke="#BE185D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          App All Navigation
        </h4>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 16, // Adjust as needed
          width: "100%", // Ensure it takes the full width
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
              backgroundColor: "#155C9E", // Make sure the background color stays the same on hover
              boxShadow: "#0022421A", // Make sure the box shadow stays the same on hover
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="top" // Open from the top
      open={openDrawer}
      onClose={onClose}
      sx={{
        ".MuiDrawer-paper": {
          height: "100vh", // Set a large height or adjust as needed
          width: "100%", // Make it full width
          maxHeight: "none", // Remove any max height restriction
          boxShadow: "none", // Remove the default shadow
          backgroundColor: "#F8F8FA8F", // Set background color to white
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
