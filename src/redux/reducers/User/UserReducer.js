import { USERCONST } from "../../../constants";

const userDetails = {
    Firstname: 'Paulo',
    Lastname: 'Rodriguez',
    PersonalEmail: 'paurodriguez0220@gmail.com',
    LinkedInUrl: 'https://www.linkedin.com/in/paulo-rodriguez-626337159/',
    GitHubUrl: 'https://github.com/paurodriguez0220/PublicRepo/',
    GoogleDriveResumeUrl: 'https://drive.google.com/uc?export=download&id=1hofHHLccet5hlqLkmOACnHHKprX9fRUU'

}

const userReducer = (state = userDetails, action) => {
    switch(action.type){
        case USERCONST.SET_USER_DETAILS: return state;
        case USERCONST.GET_USER_DETAILS: return state;
        default: return state
    }
}

export default userReducer;