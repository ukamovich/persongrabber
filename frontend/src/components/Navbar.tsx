import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Person Grabber</a>
            </div>
            <ul className="nav navbar-nav flex-row mx-3">
              <li className="active mx-3"><a href="#">Home</a></li>
              <li><a href="#">Add Person</a></li>
            </ul>
            
          </div>
        </nav>
    );
}

export default Navbar;