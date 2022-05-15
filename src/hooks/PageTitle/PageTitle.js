import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title + ' - Genius Car'
        return () => {
            document.title = prevTitle
        }
    })
    return (
        <div>
        </div>
    );
};

export default PageTitle;