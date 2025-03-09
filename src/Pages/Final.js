import * as React from "react";
import { Button, FormControl } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import ".././Styles/GlobalStyles.css";
import LLP from ".././Images/P&R Logo.png";
import { useNavigate } from "react-router-dom";

function Final() {
  const navigate = useNavigate();

  const handleBack = () => {
    sessionStorage.removeItem("all-multi-group");
    sessionStorage.removeItem("main-multi-group");
    sessionStorage.removeItem("total-multi-group");
    navigate(-1);
  };

  const handleStartOver = () => {
    sessionStorage.removeItem("all-multi-group");
    sessionStorage.removeItem("main-multi-group");
    sessionStorage.removeItem("membership-type");
    sessionStorage.removeItem("multi-group-eligible");
    sessionStorage.removeItem("total-multi-group");
    sessionStorage.removeItem("total");
    navigate("/members");
  };

  const link =
    "https://www.queencreekaz.gov/community/parks-recreation/queen-creek-recreation-aquatic-center/recreation-center/queen-creek-recreation-aquatic-center-memberships";

  const type = sessionStorage.getItem("membership-type");
  const multi = sessionStorage.getItem("multi-group-eligible");
  const total = sessionStorage.getItem("total");
  const main = sessionStorage.getItem("main-multi-group");
  const all = sessionStorage.getItem("all-multi-group");
  const multiTotal = sessionStorage.getItem("total-multi-group");

  const handleMembership = () => {
    if (multi === "No" && total === "1") {
      return `Adult ${type} ${total}-People`;
    } else if (multi === "No" && total < 4) {
      return `Adult ${type} ${total}-Person`;
    } else if (
      total < 4 &&
      multi === "Yes" &&
      (main === "Yes" || main === "No")
    ) {
      return `Combination ${type} ${total}-Person`;
    } else if (total > 3 && multi === "No") {
      return `Household ${type} ${total}-Person`;
    } else if (total > 3 && all === "No") {
      return `Household ${type} ${total}-Person`;
    } else if (multi === "Yes" && total === "1") {
      return `Youth/Senior/Active Military/Veteran ${type} ${total}-People`;
    } else if (all === "Yes" && total > 1) {
      return `Youth/Senior/Active Military/Veteran ${type} ${total}-Person`;
    }
  };

  const memberInputs = () => {
    if (all === "Yes") {
      return (
        <>
          <TableRow>
            <TableCell className="table" align="center">
              Youth/Senior/Active Military/Veteran Elegible
            </TableCell>
            <TableCell className="response" align="center">
              <div>{multi}</div>
              <div>(All Members)</div>
            </TableCell>
          </TableRow>
        </>
      );
    } else if (multi === "No") {
      return (
        <>
          {" "}
          <TableRow>
            <TableCell className="table" align="center">
              Youth/Senior/Active Military/Veteran Elegible
            </TableCell>
            <TableCell className="response" align="center">
              {multi}
            </TableCell>
          </TableRow>
        </>
      );
    } else if (multi === "Yes" && total === "1") {
      return (
        <>
          {" "}
          <TableRow>
            <TableCell className="table" align="center">
              Youth/Senior/Active Military/Veteran Elegible
            </TableCell>
            <TableCell className="response" align="center">
              {multi}
            </TableCell>
          </TableRow>
        </>
      );
    } else if (multi === "Yes" && all === "No") {
      return (
        <>
          <TableRow>
            <TableCell className="table" align="center">
              Youth/Senior/Active Military/Veteran Elegible
            </TableCell>
            <TableCell className="response" align="center">
              <div>{multi}</div>
              <div>(Partial)</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table" align="center">
              Youth/Senior/Active Military/Veteran Elegible Members
            </TableCell>
            <TableCell className="response" align="center">
              {multiTotal}
            </TableCell>
          </TableRow>
        </>
      );
    }
  };

  return (
    <>
      <br />
      <div className="background">
        <img className="pic1" src={LLP} alt="P&R Logo" />
        <div className="main">
          <h1 className="h1">Membership Selection Guide</h1>
          <div className="inner">
            <h2 className="margin">
              Based on your input, here is our suggested membership plan.
            </h2>
            {/* <TableContainer component={Paper}> */}
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="table" align="center">
                      Total Members
                    </TableCell>
                    <TableCell className="response" align="center">
                      {total}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table" align="center">
                      Memebership Type
                    </TableCell>
                    <TableCell className="response" align="center">
                      {type}
                    </TableCell>
                  </TableRow>
                  {memberInputs()}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <p className="finalOutput">Suggested Membership Option</p>
            <div className="output">
              <div className="final">
                <p className="finalOutput">{handleMembership()}</p>
              </div>
            </div>
            <br />
            <p className="link">
              Please{" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                click here
              </a>{" "}
              to visit the P&R website for pricing
            </p>
            <br />
            <FormControl className="formControl">
              <Button
                type="button"
                variant="contained"
                onClick={handleBack}
                className="backButton"
              >
                BACK
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={handleStartOver}
                // className="backButton"
              >
                Start Over
              </Button>
            </FormControl>
          </div>
          {/* <p className="joke">
            By using this guide, you agree that all information entered into
            this form is true. Any person found guilty (even if we sense your
            are lying) of giving false or misrepresented information will be
            prosecuted to the fullest extent of the law!
          </p> */}
          {/* <p className="joke">
            By merely glancing at this guide, you’re basically swearing on a
            stack of Bibles that everything you type here is 100% gospel truth.
            And don’t worry, if we “happen” to catch you in a little fib
            (because we definitely never suspect anyone), you’ll get a lovely
            trophy for being prosecuted to the max! Isn’t that just the best?
          </p> */}
          <p className="joke">
            By merely glancing at this magical guide, you're *totally* promising
            that every single word you put in this form is the pure,
            unadulterated truth. And don't you worry, if we even *think* you
            might be fibbing a little, you'll definitely face the most
            exaggerated consequences imaginable, because, you know, the law just
            loves cracking down on minor fibs!
          </p>
          <p className="joke">Yours Truely,</p>
          <p className="joke">Your friendly Parks and Recreation Team</p>
        </div>
      </div>
    </>
  );
}
export default Final;
