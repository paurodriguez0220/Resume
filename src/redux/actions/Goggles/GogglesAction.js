import { useHistory } from 'react-router-dom';

export const GetGogglesWebsiteList = () =>{
    return 1;
}

export const NavigateToOutsideLink = (websiteUrl) => {
    const newWindow = window.open(websiteUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


export const NavigateToLink = (websiteUrl) => {
    const history  = useHistory();
    history.push(websiteUrl);
}