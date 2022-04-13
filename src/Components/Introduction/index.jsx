import React from 'react';
import './Introduction.scss'

function Introduction(props) {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro-title">
                Easy Liquidity Locking & Token Vesting
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="intro-item">
                            <div className="intro-item-img">
                                <img src="/img/img.svg" alt="" />
                            </div>
                            <div className="intro-item-title">
                                Lock Liquidity
                            </div>
                            <div className="intro-item-decs">
                                Input your liquidity tokens into a time-released vault that returns the tokens at a specified date.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="intro-item">
                            <div className="intro-item-img ">
                                <img src="/img/img (1).svg" alt="" />
                            </div>
                            <div className="intro-item-title">
                                Team Token Vesting
                            </div>
                            <div className="intro-item-decs">
                                Create a vesting schedule for team members with specified dates and token amounts.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="intro-item">
                            <div className="intro-item-img ">
                                <img src="/img/img (2).svg" alt="" />
                            </div>
                            <div className="intro-item-title">
                                Public Facing Profile
                            </div>
                            <div className="intro-item-decs">
                                Proudly display your locked tokens and vesting schedules to the world as proof.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;