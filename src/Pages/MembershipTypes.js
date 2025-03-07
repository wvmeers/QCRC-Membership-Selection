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
} from "@mui/material";
import ".././Styles/GlobalStyles.css";
import LLP from ".././Images/P&R Logo.png";
import { useNavigate } from "react-router-dom";

function Option1() {
  const navigate = useNavigate();
  const [, setType] = useState();

  const handleSubmit = () => {
    navigate("/Pages/MultiGroup");
  };

  const handleBack = () => {
    sessionStorage.removeItem("total");
    navigate(-1);
  };

  const formik = useFormik({
    initialValues: {
      type: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Please select a membership type"),
    }),
    onSubmit: (values) => {
      const { type } = values;
      sessionStorage.setItem("membership-type", type);
      setType(values.type);
      handleSubmit();
    },
  });

  const handleChange = (event) => {
    formik.setFieldValue("type", event.target.value);
  };

  return (
    <>
      <br />
      <div className="background">
      <img className="pic1" src={LLP} alt="P&R Logo" />
      <div className="main">
          <h1 className="h1">Membership Selection Guide</h1>
          <div className="inner">
            <h3 className="margin">What membership type would you like?</h3>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                className="formControl"
                error={formik.touched.type && Boolean(formik.errors.type)}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Membership Types
                </InputLabel>
                <Select
                  className="dropdown"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.type}
                  label="Membership Types"
                  onChange={handleChange}
                  name="type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Annual"}>Annual</MenuItem>
                  <MenuItem value={"3-Month"}>3-Month</MenuItem>
                  <MenuItem value={"Monthly"}>Monthly</MenuItem>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <FormHelperText>{formik.errors.type}</FormHelperText>
                ) : null}
                <br />
                <Button type="submit" variant="contained">
                  SUBMIT
                </Button>
                <br />
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleBack}
                  className="backButton"
                >
                  BACK
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Option1;



