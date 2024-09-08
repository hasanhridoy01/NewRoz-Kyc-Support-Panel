import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

// Sample data with images
const dataAccordion1 = [
  { id: 1, fullName: "Jon Snow", imageUrl: "https://via.placeholder.com/50" },
  {
    id: 2,
    fullName: "Cersei Lannister",
    imageUrl: "https://via.placeholder.com/50",
  },
];

const dataAccordion2 = [
  {
    id: 1,
    fullName: "Jaime Lannister",
    imageUrl: "https://via.placeholder.com/50",
  },
  { id: 2, fullName: "Arya Stark", imageUrl: "https://via.placeholder.com/50" },
];

const dataAccordion3 = [
  {
    id: 1,
    fullName: "Daenerys Targaryen",
    imageUrl: "https://via.placeholder.com/50",
  },
  { id: 2, fullName: "Melisandre", imageUrl: "https://via.placeholder.com/50" },
];

const DocumentLeft = () => {
  const [expandedAccordions, setExpandedAccordions] = useState([1, 2]);
  const [declined, setDeclined] = useState({});

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpandedAccordions((prev) => [...prev, panel]);
    } else {
      setExpandedAccordions((prev) => prev.filter((p) => p !== panel));
    }
  };

  const handleDecline = (panel) => {
    setDeclined((prev) => ({ ...prev, [panel]: true }));
  };

  const handleDeclineExtended = (panel) => {
    setExpandedAccordions((prev) => prev.filter((p) => p !== panel));
  };

  const handleClose = (panel) => {
    setDeclined((prev) => ({ ...prev, [panel]: false }));
  };

  const getDataForPanel = (panel) => {
    switch (panel) {
      case 1:
        return dataAccordion1;
      case 2:
        return dataAccordion2;
      case 3:
        return dataAccordion3;
      default:
        return [];
    }
  };

  return (
    <div className="document-content-left">
      {[1, 2, 3].map((panel) => (
        <Accordion
          key={panel}
          expanded={expandedAccordions.includes(panel)}
          onChange={handleAccordionChange(panel)}
          className="accordion"
          sx={{ boxShadow: "0px 2px 1px 0px #0000001a" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${panel}-content`}
            id={`panel${panel}-header`}
            sx={{
              fontWeight: 600,
              backgroundColor: declined[panel] ? "#FFECEC" : "#eff3ff",
              height: "42px",
              color: declined[panel] ? "#F23836" : "#035B77",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "14px",
              lineHeight: "12px",
              textAlign: "left",
            }}
          >
            <div className="accordion-header">
              <button
                className={
                  declined[panel]
                    ? "accordion-button-Decline"
                    : "accordion-button"
                }
              >
                {panel}
              </button>
              {panel === 1 && "Document Information"}
              {panel === 2 && "Personal Information"}
              {panel === 3 && "Address"}
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "16px" }}>
            <Paper sx={{ height: 200, width: "100%" }}>
              <DataGrid
                rows={getDataForPanel(panel)}
                checkboxSelection={declined[panel]}
                columns={[
                  {
                    field: "imageUrl",
                    headerName: "Image",
                    width: 100,
                    renderCell: (params) => (
                      <img
                        src={params.value}
                        alt={params.row.fullName}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ),
                  },
                  { field: "fullName", headerName: "Full Name", width: 200 },
                ]}
                hideFooterPagination
                hideFooter
                sx={{
                    border: 0,
                    cursor: "pointer",
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      "& .MuiDataGrid-iconButtonContainer": {
                        visibility: "visible",
                      },
                    },
                    "& .Mui-selected": {
                      border: "none !important",
                      outline: "none !important",
                    },
                    "& .MuiDataGrid-cell:focus": {
                      outline: "none",
                    },
                    "& .MuiDataGrid-cell--editable:focus": {
                      outline: "none",
                    },
                  }}
              />
            </Paper>
            {declined[panel] && (
              <div className="accordion-close-btn">
                <Button
                  sx={{
                    height: "36px",
                    padding: "8px 12px",
                    gap: "3px",
                    background: "#FFECEC",
                    borderRadius: "5px",
                    "&:hover": {
                      background: "#FFECEC",
                    },
                  }}
                  onClick={() => handleClose(panel)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5332 16.6834L7.8582 17.675C9.0332 18.5583 10.9665 18.5583 12.1415 17.675L15.7249 15C16.5165 14.4084 17.1665 13.1167 17.1665 12.1334V5.93335"
                      stroke="#F23836"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8168 3.61663C15.6918 3.54163 15.5585 3.47497 15.4251 3.41663L11.2668 1.8583C10.5751 1.59997 9.4418 1.59997 8.75013 1.8583L4.58346 3.42497C3.62513 3.7833 2.8418 4.91663 2.8418 5.9333V12.125C2.8418 13.1083 3.4918 14.4 4.28346 14.9916L4.45013 15.1166"
                      stroke="#F23836"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3332 1.66663L1.6665 18.3333"
                      stroke="#F23836"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      marginLeft: "5px",
                      fontFamily: "Roboto",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#F23836",
                      textTransform: "none",
                    }}
                  >
                    Close
                  </span>
                </Button>
              </div>
            )}
            {declined[panel] && (
              <div className="comment-field">
                <label htmlFor="">Write a Comment</label>
                <TextField
                  sx={{ width: "100%", marginTop: "9px" }}
                  placeholder="Write Here....."
                  multiline
                />
              </div>
            )}
          </AccordionDetails>
          <AccordionActions>
            {declined[panel] ? (
              <Button
                sx={{
                  height: "36px",
                  padding: "8px 12px",
                  gap: "3px",
                  background: "#f23836",
                  borderRadius: "5px",
                  "&:hover": {
                    background: "#f23836",
                  },
                }}
                onClick={() => handleDeclineExtended(panel)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5332 16.6834L7.8582 17.675C9.0332 18.5583 10.9665 18.5583 12.1415 17.675L15.7249 15C16.5165 14.4084 17.1665 13.1167 17.1665 12.1334V5.93335"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8168 3.61663C15.6918 3.54163 15.5585 3.47497 15.4251 3.41663L11.2668 1.8583C10.5751 1.59997 9.4418 1.59997 8.75013 1.8583L4.58346 3.42497C3.62513 3.7833 2.8418 4.91663 2.8418 5.9333V12.125C2.8418 13.1083 3.4918 14.4 4.28346 14.9916L4.45013 15.1166"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3332 1.66663L1.6665 18.3333"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    marginLeft: "5px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#ffffff",
                    textTransform: "none",
                  }}
                >
                  Confirm Decline
                </span>
              </Button>
            ) : (
              <Button
                sx={{
                  height: "36px",
                  padding: "8px 12px",
                  gap: "3px",
                  background: "#f23836",
                  borderRadius: "5px",
                  "&:hover": {
                    background: "#f23836",
                  },
                }}
                onClick={() => handleDecline(panel)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5332 16.6834L7.8582 17.675C9.0332 18.5583 10.9665 18.5583 12.1415 17.675L15.7249 15C16.5165 14.4084 17.1665 13.1167 17.1665 12.1334V5.93335"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8168 3.61663C15.6918 3.54163 15.5585 3.47497 15.4251 3.41663L11.2668 1.8583C10.5751 1.59997 9.4418 1.59997 8.75013 1.8583L4.58346 3.42497C3.62513 3.7833 2.8418 4.91663 2.8418 5.9333V12.125C2.8418 13.1083 3.4918 14.4 4.28346 14.9916L4.45013 15.1166"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3332 1.66663L1.6665 18.3333"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    marginLeft: "5px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#ffffff",
                    textTransform: "none",
                  }}
                >
                  Decline
                </span>
              </Button>
            )}
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
};

export default DocumentLeft;
