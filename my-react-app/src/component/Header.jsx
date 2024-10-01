import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>meme-gen</h1>
        </div>
        <ul>
          <li>home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
