import React, { useState } from "react";
import LightBox, { Modal, ModalGateway } from "react-images";
import "./slider.css";

const Slider = ({ slides }) => {
  const [state, setState] = useState({
    loading: false,
    lightboxIsOpen: false,
    selectedImage: {},
  });

  const toggleLightbox = () => {
    setState({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedImage: { index: current },
    });
  };
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div>
      {state.loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <section className="slider">
            <i className="left-arrow" onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
				z"
                      />
                      <path
                        d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667
				c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
				C322.083,156.087,322.083,142.58,313.752,134.248z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            <i className="right-arrow" onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
				z"
                      />
                      <path
                        d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667
				c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
				C322.083,156.087,322.083,142.58,313.752,134.248z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                  onClick={() => toggleLightbox()}
                  style={{ cursor: "pointer" }}
                >
                  {index === current && (
                    <img src={slide.source} alt="travel" className="image" />
                  )}
                </div>
              );
            })}
          </section>

          <ModalGateway>
            {state.lightboxIsOpen ? (
              <Modal onClose={toggleLightbox}>
                <LightBox
                  components={{
                    FooterCaption: (props) => {
                      return <div>shot by - {props.currentView.author}</div>;
                    },
                  }}
                  currentIndex={state.selectedImage.index}
                  frameProps={{ autoSize: "height" }}
                  views={slides}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      )}
    </div>
  );
};

export default Slider;
