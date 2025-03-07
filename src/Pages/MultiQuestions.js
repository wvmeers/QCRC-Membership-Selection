import * as React from "react";
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

sessionStorage.removeItem("all-multi-group");
sessionStorage.removeItem("main-multi-group");
sessionStorage.removeItem("total-multi-group");

function MultiQuestions() {
  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      allMultiGroup: "",
      mainMultiGroup: "",
      totalMultiGroup: "",
    },
    validationSchema: Yup.object({
      allMultiGroup: Yup.string().required(
        "Please select an option for all members"
      ),
      mainMultiGroup: Yup.string().when("allMultiGroup", {
        is: (value) => value && value === "No", // Only validate if first dropdown is not empty
        then: () =>
          Yup.string().required(
            "Please select if the main account holder is Multi-Group"
          ),
      }),
      totalMultiGroup: Yup.number()
        .when("mainMultiGroup", {
          is: (value) => value && value !== "", // Only validate if second dropdown is selected
          then: () =>
            Yup.number().required(
              "Please select the number of members in the Multi-Group category"
            ),
        })
        .when("total", {
          is: (value) => parseInt(value) > 1, // Only validate if total is greater than 1
          then: () =>
            Yup.number().required(
              "Please select the number of members in the Multi-Group category"
            ),
        }),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem("all-multi-group", values.allMultiGroup);
      sessionStorage.setItem("main-multi-group", values.mainMultiGroup);
      sessionStorage.setItem("total-multi-group", values.totalMultiGroup);

      navigate("/final");
    },
  });

  const handleBack = () => {
    sessionStorage.removeItem("multi-group-eligible");
    navigate(-1);
  };

  const total = sessionStorage.getItem("total");

  const handleChangeQ1 = (event) => {
    formik.setFieldValue("allMultiGroup", event.target.value);
  };

  const handleChangeQ2 = (event) => {
    formik.setFieldValue("mainMultiGroup", event.target.value);
  };

  const handleChangeQ3 = (event) => {
    formik.setFieldValue("totalMultiGroup", event.target.value);
  };

  const filter = {
    memberTotal: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
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
              Do all members belong to the Youth/Senior/Active Military/Veteran
              catagory?
            </h3>
            <FormControl className="formControl">
              <FormControl
                error={
                  formik.touched.allMultiGroup &&
                  Boolean(formik.errors.allMultiGroup)
                }
              >
                <InputLabel id="all-multi-group-label">Options</InputLabel>
                <Select
                  className="dropdown"
                  labelId="all-multi-group-label"
                  id="all-multi-group"
                  value={formik.values.allMultiGroup}
                  label="Members"
                  onChange={handleChangeQ1}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                {formik.touched.allMultiGroup && formik.errors.allMultiGroup ? (
                  <FormHelperText>{formik.errors.allMultiGroup}</FormHelperText>
                ) : null}
              </FormControl>

              <br />
              {formik.values.allMultiGroup === "No" && (
                <>
                  <h3 className="margin">
                    Does the main account holder belong to the
                    Youth/Senior/Active Military/Veteran category?
                  </h3>
                  <FormControl
                    // className="formControl"
                    error={
                      formik.touched.mainMultiGroup &&
                      Boolean(formik.errors.mainMultiGroup)
                    }
                  >
                    <InputLabel id="main-multi-group-label">Options</InputLabel>
                    <Select
                      className="dropdown"
                      labelId="main-multi-group-label"
                      id="main-multi-group"
                      value={formik.values.mainMultiGroup}
                      label="Members"
                      onChange={handleChangeQ2}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                    {formik.touched.mainMultiGroup &&
                    formik.errors.mainMultiGroup ? (
                      <FormHelperText>
                        {formik.errors.mainMultiGroup}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                </>
              )}

              <br />
              {formik.values.mainMultiGroup && (
                <>
                  <h3 className="margin">
                    How many members belong to the Youth/Senior/Active
                    Military/Veteran category?
                  </h3>
                  <FormControl
                    // className="formControl"
                    error={
                      formik.touched.totalMultiGroup &&
                      Boolean(formik.errors.totalMultiGroup)
                    }
                  >
                    <InputLabel id="total-multi-group-label">
                      Options
                    </InputLabel>
                    <Select
                      className="dropdown"
                      labelId="total-multi-group-label"
                      id="total-multi-group"
                      value={formik.values.totalMultiGroup}
                      label="Members"
                      onChange={handleChangeQ3}
                    >
                      {filter.memberTotal
                        .slice(0, total - 1)
                        .map((member, index) => (
                          <MenuItem key={index} value={member}>
                            {member}
                          </MenuItem>
                        ))}
                    </Select>
                    {formik.touched.totalMultiGroup &&
                    formik.errors.totalMultiGroup ? (
                      <FormHelperText>
                        {formik.errors.totalMultiGroup}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                </>
              )}
              <br />
              <Button
                type="submit"
                variant="contained"
                onClick={formik.handleSubmit}
              >
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
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiQuestions;
