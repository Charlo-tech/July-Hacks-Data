import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">Pokemon Data Visualization</h1>
        <p>July-AngelHack</p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/visuals">Data-Viz</Link>
        <Link className="header-items" to="/about">About</Link>
      </div>
    </div>
  );
}
 
export default Header;