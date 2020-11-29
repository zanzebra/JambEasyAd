import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);

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
  console.log(window.document);
  return (
    <>
      <div className="cursor"></div>
      <Navigation showNav={showNav} setShowNav={setShowNav} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Switch>
        <Route path="/">
          <LandingPage
            setShowModal={setShowModal}
            setShowNav={setShowNav}
            showNav={showNav}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
