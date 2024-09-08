import "./Document.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useState } from "react";
import DocumentModal from "../../components/DocumentModal/DocumentModal";
import { Grid } from "@mui/material";
import DocumentLeft from "../../components/Document/DocumentLeft/DocumentLeft";
import DocumentRight from "../../components/Document/DocumentRight/DocumentRight";

const Document = () => {
  const [openModal, setOpenModal] = useState(false);

  // handleDocumentModal
  const handleDocumentModal = () => {
    setOpenModal(!openModal); // Toggle the modal open/close
  };
  return (
    <div>
      <div className="list-header">
        <div className="list-header-left">
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9866 2.97333L7.3333 5.48C5.79996 6.05333 4.54663 7.86666 4.54663 9.49333V19.4C4.54663 20.9733 5.58663 23.04 6.8533 23.9867L12.5866 28.2667C14.4666 29.68 17.56 29.68 19.44 28.2667L25.1733 23.9867C26.44 23.04 27.48 20.9733 27.48 19.4V9.49333C27.48 7.85333 26.2266 6.04 24.6933 5.46666L18.04 2.97333C16.9066 2.56 15.0933 2.56 13.9866 2.97333Z"
                stroke="#770332"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0667 15.8267L14.2133 17.9733L19.9467 12.24"
                stroke="#770332"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="list-header-left-text">
            <h4>Partial KYC List</h4>
            <p>
              <span>DASHBOARD /</span> List View
            </p>
          </div>
        </div>
        <div className="list-header-right">
          <div className="list-header-right-input">
            <select className="list-header-right-input-select">
              <option value="Short By">Short By</option>
              <option value="option2">Option 2</option>
            </select>

            <select className="list-header-right-input-select">
              <option value="Progress">Progress</option>
              <option value="optionB">Option B</option>
            </select>
          </div>
          <button className="list-header-right-btn">
            <svg
              width="38"
              height="38"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E5E5E5"
              />
              <rect
                width="18"
                height="18"
                transform="translate(7 7)"
                fill="white"
              />
              <path
                d="M17.2977 9.63248L18.6177 12.2725C18.7977 12.64 19.2777 12.9925 19.6827 13.06L22.0752 13.4575C23.6052 13.7125 23.9652 14.8225 22.8627 15.9175L21.0027 17.7775C20.6877 18.0925 20.5152 18.7 20.6127 19.135L21.1452 21.4375C21.5652 23.26 20.5977 23.965 18.9852 23.0125L16.7427 21.685C16.3377 21.445 15.6702 21.445 15.2577 21.685L13.0152 23.0125C11.4102 23.965 10.4352 23.2525 10.8552 21.4375L11.3877 19.135C11.4852 18.7 11.3127 18.0925 10.9977 17.7775L9.13768 15.9175C8.04268 14.8225 8.39518 13.7125 9.92518 13.4575L12.3177 13.06C12.7152 12.9925 13.1952 12.64 13.3752 12.2725L14.6952 9.63248C15.4152 8.19998 16.5852 8.19998 17.2977 9.63248Z"
                fill="#E0B313"
                stroke="#E0B313"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* DocumentModal */}
      <DocumentModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div className="document-header">
        <div className="step-one" onClick={handleDocumentModal}>
          <h4>Customer Identification Program (CIP)</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 25, width: 25 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
            <Avatar
              alt="Trevor Henderson"
              src="https://via.placeholder.com/32"
            />
          </AvatarGroup>
        </div>
        <div className="step-border"></div>
        <div className="step-two" onClick={handleDocumentModal}>
          <h4>Customer Due Diligence (CDD)</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 25, width: 25 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
            <Avatar
              alt="Trevor Henderson"
              src="https://via.placeholder.com/32"
            />
          </AvatarGroup>
        </div>
        <div className="step-border-extra"></div>
        <div className="step-three" onClick={handleDocumentModal}>
          <h4>Compliance</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 25, width: 25 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
            <Avatar
              alt="Trevor Henderson"
              src="https://via.placeholder.com/32"
            />
          </AvatarGroup>
        </div>
      </div>
      <div className="document-content">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item xs={12} lg={6}>
            <DocumentLeft />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DocumentRight />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Document;
