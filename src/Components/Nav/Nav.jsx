import { NavLink } from "react-router-dom";

const Nav = () => {
  const link = (
    <>
      <ul id="link" className="flex gap-10">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/donation">Donation</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      </ul>
    </>
  );
  return (
    <div  className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="https://i.ibb.co/rcyvGD8/Logo.png" alt="" />
        </div>
        <div>
            {link}
        </div>
      </div>
    </div>
  );
};

export default Nav;
