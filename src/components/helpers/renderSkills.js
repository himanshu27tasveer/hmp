import React from 'react';


export const RenderSkills = (props) => {
    return Object.entries(props.skillset).map(([key, value]) => {
        return (
            <div key={key} className="col-3 skillicons">
                <img alt={key} title={key} className="skillimg" src={value[1]} />
            </div>
        );
    })
}


// eslint-disable-next-line no-lone-blocks
{/* <div className="col-4" style={{ float: "left" }}>
    <img width="50px" alt={value[1]} height="50px" src={value[1]} /> <h4>{key}</h4>
</div>

<div className="col-8">
    <div className="progress mt-2">
        <div className="progress-bar" role="progressbar" style={{ width: `${value[0]}` }} aria-valuenow={parseInt(value[0][0] + value[0][1])} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div> */}