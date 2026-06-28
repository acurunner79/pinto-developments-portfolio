import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "primary", className = "" }) {
  const classes = `button button-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}

export default Button;