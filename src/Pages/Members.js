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

function Members() {
  const navigate = useNavigate();
  const [, setMembers] = useState();

  const handleSubmit = () => {
    navigate("/membership-types");
  };

  const handleBack = () => {
    sessionStorage.removeItem("resident");
    navigate(-1);
  };


  const filter = {
    memberTotal: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };

  const formik = useFormik({
    initialValues: {
      members: "",
    },
    validationSchema: Yup.object({
      members: Yup.string().required("Please select the number of members"),
    }),
    onSubmit: (values) => {
      const { members } = values;
      sessionStorage.setItem("total", members);
      setMembers(values.members);
      handleSubmit();
    },
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
              How many people will be on your membership?
            </h3>

            <form onSubmit={formik.handleSubmit}>
              <FormControl
                className="formControl"
                error={formik.touched.members && Boolean(formik.errors.members)}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Members
                </InputLabel>
                <Select
                  className="dropdown"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.members}
                  label="Members"
                  onChange={formik.handleChange}
                  name="members"
                >
                  {filter.memberTotal.map((member, index) => (
                    <MenuItem key={index} value={member}>
                      {member}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.members && formik.errors.members ? (
                  <FormHelperText>{formik.errors.members}</FormHelperText>
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
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;

