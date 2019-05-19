import React from 'react';

const Rank = ({ name, entries, language }) => {
    if (language === 'english') {
        return (
            <div>
                <div className='white f3 center'>
                    {`${name} , your current entry rank is...`}
                </div>
                <div className='white f1 center'>
                    {entries}
                </div>
            </div>
        );
    }   else {
        return (
            <div>
                <div className='white f3 center'>
                    {name  + ', דרגתך כעת היא'}
                </div>
                <div className='white f1 center'>
                    {entries}
                </div>
            </div>
        );
    }

}

export default Rank;