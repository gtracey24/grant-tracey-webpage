import { Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <img src="gt-name-200-50-black.png" alt="name" className="nav-name" />
          <Button
            variant="link"
            size="sm"
            style={{ fontFamily: "Libre Franklin" }}
          >
            <Link to="/">HOME</Link>
          </Button>

          <Button
            variant="link"
            size="sm"
            style={{ fontFamily: "Libre Franklin" }}
          >
            <Link to="/blogs">BLOGS</Link>
          </Button>
{/* 
          <Button
            variant="link"
            size="sm"
            style={{ fontFamily: "Libre Franklin" }}
          >
            <a href="Grant Tracey Resume-Dev.pdf" target="_blank">
              RESUME
            </a>
          </Button> */}

          <ContactForm />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
