import { useThemeContext } from '../store';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const [state] = useThemeContext();

  return (
    <nav
      className={`navbar navbar-expand navbar-${state.theme} bg-${state.theme}`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <a
            href="https://www.linkedin.com/in/tony-tran-developer/"
            rel="noreferrer"
            target="_blank"
            className="m-3"
          >
            <i class="fab fa-linkedin"></i>
            LinkedIn
          </a>
          {'||'}
          <a href="https://github.com/code-monkey713/" className="m-3">
            {/* <FontAwesomeIcon icon={['fas', 'github']} /> */}
            <i class="fab fa-github-square"></i> GitHub
          </a>
        </ul>
      </div>
    </nav>
  );
};
