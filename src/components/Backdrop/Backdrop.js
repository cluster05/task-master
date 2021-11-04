const Backdrop = ({ children, closeBackdrop }) => {
  return (
    <div
      onClick={closeBackdrop}
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
    >
      <div
        className="p-3 bg-white border   rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {children}{" "}
      </div>
    </div>
  );
};

export default Backdrop;
