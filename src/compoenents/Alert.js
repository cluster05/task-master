import React from "react";
import { useSelector } from "react-redux";
const Alert = () => {
  const alert = useSelector((state) => state.alert);

  let alertType = "success";
  if (alert.success) alertType = "success";
  else if (alert.warning) alertType = "warning";
  else if (alert.info) alertType = "info";
  else if (alert.error) alertType = "error";

  return (
    <div>
      {alert.success || alert.warning || alert.info || alert.error ? (
        <div className={`alert alert-${alertType}`}>
          <div className="flex-1">
            <label> {alert.message} </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Alert;
