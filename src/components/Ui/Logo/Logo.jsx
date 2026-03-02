import { Link } from "react-router-dom";
import './Logo.scss';

function Logo () {
  return (
    <div className="logo"><Link to="/"><img src="/img/logo.svg" alt="Товары с личного подворья" /></Link></div>
  )
}

export default Logo;
