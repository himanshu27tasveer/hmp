import React from 'react';


export const RenderProjects = (props) => {
    return (
        Object.entries(props.proData).map(([key, value]) => {
            return (
                <div className="col-12 col-md-3 mb-5">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="pimg" src={value[0]} alt={key} style={{ width: "150px", height: "150px" }} />
                            </div>
                            <div className="flip-card-back text-center">
                                <br />
                                <h3 style={{ color: "rgb(255, 112, 17)" }}>{key}</h3>
                                <br />
                                <p>{value[1]}</p>
                                <br />
                                <a target="_blank" rel="noopener noreferrer" href={value[2]} className="btndiv">{value[3]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
}