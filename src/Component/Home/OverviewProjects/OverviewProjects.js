import React from 'react';
import './OverviewProjects.css'

const OverviewProjects = () => {
    return (
        <section className='overView-Container'>
            <div className='overView'>
                <div class="container">
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt=""/>
                                <h3>Design</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt="" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" alt=""/>
                                <h3>Launch</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewProjects;