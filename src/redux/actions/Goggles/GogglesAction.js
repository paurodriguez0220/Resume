import { GOGGLESCONST } from '../../../constants';

export const GetGogglesWebsiteList = () =>{
    return 1;
}

export const NavigateToOutsideLink = (websiteUrl) => {
    return function(dispatch){
        const newWindow = window.open(websiteUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null

        dispatch({type: GOGGLESCONST.NAVIGATE_TO_OUTSIDE});
    };
}