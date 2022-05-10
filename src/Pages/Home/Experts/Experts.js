import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: "William Glover", img: expert1 },
        { id: 2, name: "Matthew Gardner", img: expert2 },
        { id: 3, name: "Owen Hampton", img: expert3 },
        { id: 4, name: "Oliver Sherman", img: expert4 },
        { id: 5, name: "Cedric Leonard", img: expert5 },
        { id: 6, name: "Jared Herrera", img: expert6 }
    ]
    return (
        <div className='container' id='experts'>
            <h2 className='text-center mt-5 text-primary'>Our Experts</h2>
            <div className='row gy-5 gx-5'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;