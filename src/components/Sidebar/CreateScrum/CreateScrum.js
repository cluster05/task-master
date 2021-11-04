import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
const CreateScrum = ({ createScrumPopUp, closeBackdrop }) => {
  return (
    <React.Fragment>
      {createScrumPopUp ? (
        <Backdrop closeBackdrop={closeBackdrop}>
          <h1>Hello</h1>
        </Backdrop>
      ) : null}
    </React.Fragment>
  );
};

export default CreateScrum;
