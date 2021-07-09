import './Google.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userDetailsAction from '../../redux/actions/User/UserDetailsAction';

function GoogleSearch(prop) {
    const navigateToLink = (websiteUrl) => {
        const newWindow = window.open(websiteUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    console.log(prop);
    return (
      <div className="google-search">
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
                <h1>{prop.userDetails.Firstname + ' ' + prop.userDetails.Lastname}</h1>
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
                <div className="list-tem-container" onClick={() => { navigateToLink('https://www.linkedin.com/in/paulo-rodriguez-626337159/')}}>
                  <div className="circle-container linkeIn">
                    <i className="fab fa-linkedin" alt="LinkedIn"></i>
                  </div>
                  LinkedIn
                </div>
                <div className="list-tem-container" onClick={() => { navigateToLink('https://github.com/paurodriguez0220/PublicRepo/')}}>
                  <div className="circle-container github">
                    <i className="fab fa-github" alt="GitHub"></i>
                  </div>
                  Github
                </div>
                <a className="list-tem-container" href = "mailto:abc@example.com">
                  <div className="circle-container">
                    <img alt="search" src={process.env.PUBLIC_URL + '/Gmail_Icon.svg'} />
                  </div>
                  Mail
                </a>
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
  
  const mapStateToProps = (state, ownProps) =>{
    return{
      userDetails: state.userReducer,
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userDetailsAction }, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(GoogleSearch);