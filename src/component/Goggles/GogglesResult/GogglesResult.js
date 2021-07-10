import './GogglesResult.css';
import GogglesSearchLogo from '../GogglesSearchLogo';

function GogglesResult() {
    return (
        <div className="goggles-result">
            <div className="goggles-container">
                <div className="goggles-result-head">
                    <GogglesSearchLogo />
                    <div className="goggles-result-bar">    
                        <h1>Paulo Rodriguez</h1>
                        <div className="goggles-result-bar-actions">
                            <div class="vertical-divider"></div>
                            <img alt="search" src={process.env.PUBLIC_URL + '/Google_Microphone_Icon.png'} />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
  }
  

  export default GogglesResult;