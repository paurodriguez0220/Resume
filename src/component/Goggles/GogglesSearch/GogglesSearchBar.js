import { connect } from 'react-redux';

function GogglesSearchBar(prop) {
    return(
        <div className="goggles-search-bar">
            <i className="fas fa-search"></i>
            <div className="typewriter">
            <h1>{prop.userDetails.Firstname + ' ' + prop.userDetails.Lastname}</h1>
            </div>
            <img alt="search" src={process.env.PUBLIC_URL + '/Google_Microphone_Icon.png'} />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
      userDetails: state.userReducer,
    };
  }

  export default connect(mapStateToProps)(GogglesSearchBar);
