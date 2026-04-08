import { Link } from "react-router-dom";
import "./button.css";

export default function Button({
  children,
  variant = "primary",
  to,
  type = "button",
  ...props
}) {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}
