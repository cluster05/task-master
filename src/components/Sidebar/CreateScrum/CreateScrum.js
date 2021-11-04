import React from "react";
import Backdrop from "../../Backdrop/Backdrop";
const CreateScrum = ({ createScrumPopUp, closeBackdrop }) => {
  return (
    <React.Fragment>
      {createScrumPopUp ? (
        <Backdrop closeBackdrop={closeBackdrop}>
          <div className="m-4">
            <h2 className="text-sm"> Create New Scrum </h2>
            <input
              type="text"
              placeholder="Scrum title"
              className="my-3 px-3 py-1 text-sm border-2 rounded border-green-400"
            />
          </div>
        </Backdrop>
      ) : null}
    </React.Fragment>
  );
};

export default CreateScrum;
