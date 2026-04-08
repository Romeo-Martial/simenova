import "./container.css";

export default function Container({ children, className = "" }) {
  const classes = `container ${className}`.trim();

  return <div className={classes}>{children}</div>;
}
