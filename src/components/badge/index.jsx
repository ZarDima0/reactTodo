import "./badge.scss";
import classNames from "classnames";

// className={`badge badge--${color}`}

const Badge = ({ color,onClick, className}) => {

  return (
    <i
      onClick = {onClick}
      className={classNames("badge", {[`badge--${color}`]: color}, className )}
    ></i>
  );
};
export default Badge;
