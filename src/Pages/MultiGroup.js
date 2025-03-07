import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
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

function MultiGroup() {
  const navigate = useNavigate();

  const total = sessionStorage.getItem("total");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      multiGroup: "",
    },
    validationSchema: Yup.object({
      multiGroup: Yup.string().required("Please select an option"),
    }),
    onSubmit: (values) => {
      const { multiGroup } = values;
      sessionStorage.setItem("multi-group-eligible", multiGroup);
      if (multiGroup === "Yes" && total === "1") {
        navigate("/final");
      } else if (multiGroup === "Yes") {
        navigate("/multi-questions");
      } else {
        navigate("/final");
      }
    },
  });

  const handleBack = () => {
    sessionStorage.removeItem("membership-type");
    navigate(-1);
  };

  const handleChange = (event) => {
    formik.setFieldValue("multiGroup", event.target.value);
  };

  return (
    <>
      <br />
      <div className="background">
      <img className="pic1" src={LLP} alt="P&R Logo" />
      <div className="main">
          <h1 className="h1">Membership Selection Guide</h1>
          <div className="inner">
            <h3 className="margin">
              Do any or all members belong in the Youth/Senior/Active
              Military/Veteran category?
              <Tooltip
                title={
                  <React.Fragment>
                    <p>
                      <strong>Youth:</strong> 0-17 years
                    </p>
                    <p>
                      <strong>Senior:</strong> 55 years and older
                    </p>
                    <p>
                      <strong>Military/Veteran:</strong> Must have valid ID
                    </p>
                  </React.Fragment>
                }
                arrow
                placement="top"
                disableInteractive // Disable hover delay for mobile
                enterTouchDelay={0} // Make the tooltip appear immediately on mobile
              >
                <InfoIcon className="infoIcon" />
              </Tooltip>
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                className="formControl"
                error={
                  formik.touched.multiGroup && Boolean(formik.errors.multiGroup)
                }
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Options
                </InputLabel>
                <Select
                  className="dropdown"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.multiGroup}
                  label="Members"
                  onChange={handleChange}
                  name="multiGroup"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>

                {/* Display error message if validation fails */}
                {formik.touched.multiGroup && formik.errors.multiGroup ? (
                  <FormHelperText>{formik.errors.multiGroup}</FormHelperText>
                ) : null}
                <br />
                <Button type="submit" variant="contained">
                  SUBMIT
                </Button>
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

export default MultiGroup;
