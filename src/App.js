import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px"
      );
    });
    document.addEventListener("click", () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    });
  });
  return (
    <>
      <div className="cursor"></div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Switch>
        <Route path="/">
          <LandingPage setShowModal={setShowModal} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
