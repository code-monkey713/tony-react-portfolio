import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar
      className="d-flex flex-column flex-sm-row align-items-center align-horizontal"
      fixed="bottom"
    >
      <Nav.Item>
        <a
          href="https://www.linkedin.com/in/tony-tran-developer/"
          className="m-3"
        >
          LinkedIn
        </a>
      </Nav.Item>
      {' | '}
      <Nav.Item>
        <a href="/" className=" m-3">
          &copy; 2021 Tony Tran
        </a>
      </Nav.Item>
      {' | '}
      <Nav.Item>
        <a href="https://github.com/code-monkey713/" className=" m-3">
          GitHub
        </a>
      </Nav.Item>
    </Navbar>
  );
};

export default Footer;
