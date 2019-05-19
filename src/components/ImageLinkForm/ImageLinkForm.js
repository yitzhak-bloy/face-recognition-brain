import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, language }) => {
    if (language === 'english') {
        return (
            <div>
                <p className='f3'>
                    {'This Magic Brain will detect faces in your pictures. Git it a try.'}
                </p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                            onClick={onButtonSubmit}
                        >Detect</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <p className='f3'>
                    {'!מוח קסום זה יזהה פרצופים בתמונות שלך. נסה את זה'}
                </p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                            onClick={onButtonSubmit}
                        >לזהות</button>
                        <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default ImageLinkForm;