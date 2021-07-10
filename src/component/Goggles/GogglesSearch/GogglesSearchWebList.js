import { connect } from 'react-redux';
import * as gogglesAction from '../../../redux/actions/Goggles/GogglesAction';
import { Link } from 'react-router-dom';

function GogglesSearchWebList(prop) {
    return(
        <div className="websites-list">
        <Link className="list-tem-container" to="/gogglesresult" title="Get to know me">
          <div className="circle-container">
            <img alt="search" src={process.env.PUBLIC_URL + '/Google_Icon.svg'} />
          </div>
          Google
        </Link>
        <div className="list-tem-container" onClick={() => { prop.NavigateToOutsideLink(prop.userDetails.LinkedInUrl)}} title="View my LinkedIn account">
          <div className="circle-container linkeIn">
            <i className="fab fa-linkedin" alt="LinkedIn"></i>
          </div>
          LinkedIn
        </div>
        <div className="list-tem-container" onClick={() => { prop.NavigateToOutsideLink(prop.userDetails.GitHubUrl)}} title="Check my public repositories">
          <div className="circle-container github">
            <i className="fab fa-github" alt="GitHub"></i>
          </div>
          Github
        </div>
        <a className="list-tem-container" href = {"mailto:" + prop.userDetails.PersonalEmail} title="Send me an email">
          <div className="circle-container">
            <img alt="search" src={process.env.PUBLIC_URL + '/Gmail_Icon.svg'} />
          </div>
          Mail
        </a>
        <a className="list-tem-container" title="Download my resume" href={prop.userDetails.GoogleDriveResumeUrl} download>
          <div className="circle-container cloud_download">
            <i className="fas fa-cloud-download-alt"  alt="Resume"></i>
          </div>
          Resume
        </a>
    </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        userDetails: state.userReducer,
    };
}

export default connect(mapStateToProps, gogglesAction)(GogglesSearchWebList);