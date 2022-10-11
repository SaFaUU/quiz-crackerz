import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Stats() {
    const quiz_data = useLoaderData();
    return (
        <div>

            <div className='d-flex mx-auto w-100 justify-content-center mt-5 pe-5'>
                <BarChart width={450} height={450} data={quiz_data.data}>
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
            <h1 className='mt-5'>Stats Chart for All the Quiz</h1>
        </div>
    );
}
// const Stats = () => {
//     const quiz_data = useLoaderData();
//     console.log(quiz_data.data);
//     return (
//         <div>
//             <h2>This is the stats page</h2>
//             <ResponsiveContainer width="100%" height="100%">

//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default Stats;