import React from 'react'
import BreadcumbBg from "../assets/img/bg/team-bg-2.jpg";
function Breadcumbs(props) {
  return (
    <>
     <div className="breadcumb-wrapper background-image"
                    data-overlay="black"
                    data-opacity="7"
                    style={{ backgroundImage: `url(${BreadcumbBg})` }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="breadcumb-content">
                                    <h1 className="breadcumb-title text-anim" data-delay="100" data-show="true"
                                        style={{
                                            animationName: 'slideInUp',
                                            animationDuration: '900ms',
                                            animationTimingFunction: 'ease',
                                            animationDelay: '100ms',
                                            animationDirection: 'normal',
                                            animationFillMode: 'both',
                                        }}
                                    >
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            {'About'.split('').map((letter, index) => (
                                                <div
                                                    key={`about-${index}`}
                                                    style={{
                                                        position: 'relative',
                                                        display: 'inline-block',
                                                        transform: 'translate(0px, 0px)',
                                                        opacity: 1,
                                                        visibility: 'inherit',
                                                    }}
                                                >
                                                    {letter}
                                                </div>
                                            ))}
                                        </div>{' '}
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            {'Us'.split('').map((letter, index) => (
                                                <div key={`us-${index}`}
                                                    style={{
                                                        position: 'relative',
                                                        display: 'inline-block',
                                                        transform: 'translate(0px, 0px)',
                                                        opacity: 1,
                                                        visibility: 'inherit',
                                                    }}
                                                >
                                                    {letter}
                                                </div>
                                            ))}
                                        </div>
                                    </h1>
                                    <ul className="breadcumb-menu" data-delay="300" data-show="true"
                                        style={{
                                            animationName: 'slideInUp',
                                            animationDuration: '900ms',
                                            animationTimingFunction: 'ease',
                                            animationDelay: '300ms',
                                            animationDirection: 'normal',
                                            animationFillMode: 'both',
                                        }}
                                    >
                                        <li>
                                            <a href="index.html" className="text-decoration-none">
                                                {props.prevLink}
                                            </a>
                                        </li>
                                        <li>{props.currentLink}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Breadcumbs