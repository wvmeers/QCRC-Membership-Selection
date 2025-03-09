import * as React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Button,
  Select,
  FormHelperText,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import ".././Styles/GlobalStyles.css";
import LLP from ".././Images/P&R Logo.png";
import { useNavigate } from "react-router-dom";

function ResidentStatus() {
  const navigate = useNavigate();
//   const [resident, setResident] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const link =
  "https://qcgis.maps.arcgis.com/apps/webappviewer/index.html?id=9cebdb78904d4855b9debd47112322a0";

  const filter = {
    residentStatus: ["Yes", "No"],
  };

  const formik = useFormik({
    initialValues: {
      resident: "",
    },
    validationSchema: Yup.object({
      resident: Yup.string().required("Please select your resident status"),
    }),
    onSubmit: (values) => {
        sessionStorage.setItem("resident", values.resident);
  
        if (values.resident === "Yes") {
          navigate("/members"); // Navigate only if Yes
        } else {
          handleOpen(); // Show modal if No
        }
      },
    // onSubmit: (values) => {
    //   const { resident } = values;
    //   sessionStorage.setItem("resident", resident);
    //   setResident(values.resident);
    //   handleSubmit();
    // },
  });

  return (
    <>
      <br />
      <div className="background">
        <img className="pic1" src={LLP} alt="P&R Logo" />
        <div className="main">
          <h1 className="h1">Membership Selection Guide</h1>
          <div></div>
          <div className="inner">
            <h3 className="margin">
              Are you a resident of Queen Creek?
            </h3>
            <p className="resident">
              Unsure? Follow the link to find out.{" "}
              <br />
              <a href={link} target="_blank" rel="noopener noreferrer">
                "Do I live in Queen Creek?"
              </a>
            
            </p>

            <form onSubmit={formik.handleSubmit}>
              <FormControl
                className="formControl"
                error={formik.touched.resident && Boolean(formik.errors.resident)}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Residency
                </InputLabel>
                <Select
                  className="dropdown"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.resident}
                  label="Residency"
                  onChange={formik.handleChange}
                  name="resident"
                >
                  {filter.residentStatus.map((resident, index) => (
                    <MenuItem key={index} value={resident}>
                      {resident}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.resident && formik.errors.resident ? (
                  <FormHelperText>{formik.errors.resident}</FormHelperText>
                ) : null}
                <br />
                <Button type="submit" variant="contained">
                  SUBMIT
                </Button>
              </FormControl>
              <br />
            </form>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">The Aquatics and Recreation center is for Residents only!</Typography>
          <br />
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ResidentStatus;

