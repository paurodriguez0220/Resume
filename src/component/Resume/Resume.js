import './Resume.css';

function Resume() {
    return (
      <div className="resume">
          <div className="goggles-container">
            <span>
                <span className="blue-label">G</span>
                <span className="red-label">o</span>
                <span className="yellow-label">g</span>
                <span className="blue-label">g</span>
                <span className="green-label">l</span>
                <span className="red-label">e</span>
                <span className="yellow-label">s</span>
            </span>
            <div className="goggles-search-bar">
              <i className="fas fa-search"></i>
              <div className="typewriter">
                <h1>Paulo G. Rodriguez</h1>
              </div>
              <img alt="search" src={process.env.PUBLIC_URL + '/Google_Microphone_Icon.png'} />
            </div>
            <div className="websites-list">
                <div className="list-tem-container" alt="Paulo Rodriguez">
                  <div className="circle-container">
                    <img alt="search" src={process.env.PUBLIC_URL + '/Google_Icon.svg'} />
                  </div>
                  Google
                </div>
                <div className="list-tem-container">
                  <div className="circle-container linkeIn">
                    <i className="fab fa-linkedin" alt="LinkedIn"></i>
                  </div>
                  LinkedIn
                </div>
                <div className="list-tem-container">
                  <div className="circle-container github">
                    <i className="fab fa-github" alt="GitHub"></i>
                  </div>
                  Github
                </div>
                <div className="list-tem-container">
                  <div className="circle-container">
                    <img alt="search" src={process.env.PUBLIC_URL + '/Gmail_Icon.svg'} />
                  </div>
                  Mail
                </div>
                <div className="list-tem-container">
                  <div className="circle-container cloud_download">
                    <i className="fas fa-cloud-download-alt"  alt="Resume"></i>
                  </div>
                  Resume
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Resume;