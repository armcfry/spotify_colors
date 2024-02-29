import React from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
  let navigate = useNavigate();
  
  React.useEffect(() => {
    navigate('/redirect');
  }, [navigate]);

  return (
    <div>
      <header className="w3-container w3-center w3-padding-32" style={{ color: "white" }}>
        <p>You've reached the redirection page of this app!</p>
        <div>
          In the meantime, please reach out at my other contact links:
        </div>
        <div>
          <a href="mailto:armcfry@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="button-link">Email Me</button>
          </a>

          <a href="https://www.linkedin.com/in/armcfry64" target="_blank" rel="noopener noreferrer">
            <button className="button-link">LinkedIn</button>
          </a>

          <a href="https://github.com/armcfry" target="_blank" rel="noopener noreferrer">
            <button className="button-link">GitHub</button>
          </a>

        </div>
      </header>
    </div>
  );
}

export default Redirect;