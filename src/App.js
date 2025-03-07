import { Routes, Route } from "react-router-dom";
import Entrance from "./Pages/Entrance";
import ResidentStatus from "./Pages/ResidentStatus";
import Members from "./Pages/Members";
import MembershipTypes from "./Pages/MembershipTypes";
import MultiGroup from "./Pages/MultiGroup";
import MultiQuestions from "./Pages/MultiQuestions";
import Final from "./Pages/Final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entrance />} />
      <Route path="/members" element={<Members />} />
      <Route path="/resident-status" element={<ResidentStatus />} />
      <Route path="/membership-types" element={<MembershipTypes />} />
      <Route path="/multi-group" element={<MultiGroup />} />
      <Route path="/multi-questions" element={<MultiQuestions />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}

export default App;


// import * as React from "react";
// import Entrance from "./Pages/Entrance";
// import ResidentStatus from "./Pages/ResidentStatus";
// import Members from "./Pages/Members";
// import MembershipTypes from "./Pages/MembershipTypes";
// import MultiGroup from "./Pages/MultiGroup";
// import MultiQuestions from "./Pages/MultiQuestions";
// import Final from "./Pages/Final";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <Routes>
//     {/* <Route path="/" element={<Members />} /> */}
//     <Route path="/" element={<Entrance />} />
//     <Route path="/Pages/Members" element={<Members />} />
//     <Route path="/Pages/ResidentStatus" element={<ResidentStatus />} />
//     <Route path="/Pages/MembershipTypes" element={<MembershipTypes />} />
//     <Route path="/Pages/MultiGroup" element={<MultiGroup />} />
//     <Route path="/Pages/MultiQuestions" element={<MultiQuestions />} />
//     <Route path="/Pages/Final" element={<Final />} />
//   </Routes>
//   );
// }

// export default App;
