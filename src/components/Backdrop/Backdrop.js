const Backdrop = ({ children, closeBackdrop }) => {
  return (
    <div
      onClick={closeBackdrop}
      className="absolute bg-gray-900 bg-opacity-10 top-0 left-0 w-screen h-screen flex justify-center items-center"
    >
      <div
        className="p-3 bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {children}{" "}
      </div>
    </div>
  );
};

export default Backdrop;
