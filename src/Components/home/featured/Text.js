import React, { Component } from 'react';

import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';


class Text extends Component {
    state = {
        theString: '',
        show: false,
        first_name: '',
        last_name: '',
        id: '',
    }

    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                rotate: 0
            }}

            enter={{
                opacity: [1],
                rotate: [360],
                timing: { duration: 1500, ease: easePolyOut }
            }}
        >
            {
                ({ opacity, rotate }) => {
                    return (
                        <div className="featured_number"
                            style={{
                                opacity,
                                transform: `translate(260px,170px) rotateY(${rotate}deg)`
                            }}
                        >
                            3
                        </div>
                    )
                }
            }
        </Animate>
    );


    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 500
            }}

            enter={{
                opacity: [1],
                x: [273],
                y: [380],
                timing: { duration: 2500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        {this.state.first_name}
                    </div>
                )
            }
            }
        </Animate>
    );


    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 586
            }}

            enter={{
                opacity: [1],
                x: [273],
                y: [486],
                timing: { delay: 300, duration: 3000, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        {this.state.last_name}
                    </div>
                )
            }
            }
        </Animate>
    );

    animateThird = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 486
            }}

            enter={{
                opacity: [1],
                x: [273],
                y: [605],
                timing: { delay: 1000, duration: 3000, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_second"
                         style={{
                             opacity,
                             transform: `translate(${x}px,${y}px)`
                         }}
                    >
                        {this.state.id}
                    </div>
                )
            }
            }
        </Animate>
    );

    inputHandler = (e) => {
        this.setState({
            theString: e.target.value
        })
    }

    decodeTheString = () => {
        let ts = this.state.theString;
        ts = ts.replace(/^0+/,'').replace(/0+$/,'');
        // console.log('ts->', ts);
        let newCad = ts.replace(/[^\w\s]|(.)(?=\1)/gi, "").split('0');
        // console.log('nreCad->', newCad);

        this.setState({
            show: true,
            first_name: newCad[0],
            last_name: newCad[1],
            id: newCad[2]
        });
    }

    render() {
        return (
            <div className="featured_text">
                <div style={{
                        position: 'absolute',
                        top: '50px',
                        left: '30px',
                        display: 'flex'
                    }}
                >
                    <input
                        style={{ width: '300px' }}
                        type="text"
                        name='theString'
                        placeholder="type string to encode"
                        onChange={this.inputHandler}
                        value={this.state.theString}
                    />

                    <button
                        style={{
                            margin: '10px',
                            background: 'gray'
                        }}
                        onClick={this.decodeTheString}
                    >
                        Decode
                    </button>
                </div>

                    {
                        (this.state.show && this.state.theString !== '') &&
                            <>
                              (
                                { this.animateNumber() }
                                { this.animateFirst() }
                                { this.animateSecond() }
                                { this.animateThird() }
                              )
                            </>
                    }
            </div>
        );
    }
}

export default Text;
