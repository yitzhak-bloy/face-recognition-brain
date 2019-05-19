import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, onLanguageClicked, language }) => {
        if (language === 'english') {
            if (isSignedIn) {
                return (
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onLanguageClicked('hebrew')} className='f3 link dim black pa3 pointer'>עברית</p>
                        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                    </nav>
                );
            } else {
                return (
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={() => onLanguageClicked('hebrew')} className='f3 link dim black pa3 pointer'>עברית</p>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                    </nav>
                );
            }
        } else {
            if (isSignedIn) {
                return (
                    <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>יציאה</p>
                        <p onClick={() => onLanguageClicked('english')} className='f3 link dim black pa3 pointer'>english</p>
                    </nav>
                );
            } else {
                return (
                    <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>רישום</p>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>כניסה</p>
                        <p onClick={() => onLanguageClicked('english')} className='f3 link dim black pa3 pointer'>english</p>
                    </nav>
                );
            }
        }

}

export default Navigation;