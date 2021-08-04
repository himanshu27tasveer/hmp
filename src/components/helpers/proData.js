import React from 'react';


export const RenderProjects = (props) => {
    return (
        Object.entries(props.proData).map(([key, value]) => {
            return (
                <div key={key} className="col-6 col-md-6 mb-5 col-lg-4">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="pimg" title={{key}} src={value[0]} alt={key} />
                            </div>
                            <div className="flip-card-back text-center">
                                <p id="phead" style={{ color: "rgb(255, 112, 17)" }}>{key}</p>
                                <p id="pval">{value[1]}</p>
                                <a target="_blank" rel="noopener noreferrer" href={value[2]} className="btndiv gradient-text">{value[3]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
}