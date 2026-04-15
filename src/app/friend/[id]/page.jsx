import React from 'react';
const AppDetailsPage =async ({params}) => {
    const {p} = await params
    console.log("params",p)
    return (
        <div>
            this is app details page
        </div>
    );
};

export default AppDetailsPage;