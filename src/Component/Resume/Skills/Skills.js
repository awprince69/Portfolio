import React from 'react';

const Skills = ({ skill }) => {
    return (
        <div>
            <div class="card mb-2 shadow" style={{width:'18rem',height:'18rem'}}>
                <div class="card-body">
                    <h5 class="card-title" style={{ borderBottom: '3px solid gray' }}>{skill.title}</h5>
                    <li class="card-text list-unstyled">{skill.lang1}</li>
                    <li class="card-text list-unstyled">{skill.lang2}</li>
                    <li class="card-text list-unstyled">{skill.lang3}</li>
                    <li class="card-text list-unstyled">{skill.lang4}</li>
                    <li class="card-text list-unstyled">{skill.lang5}</li>
                    <li class="card-text list-unstyled">{skill.lang6}</li>
                    <li class="card-text list-unstyled">{skill.lang7}</li>
                    <li class="card-text list-unstyled">{skill.lang8}</li>
                    <li class="card-text list-unstyled">{skill.lang9}</li>
                </div>
            </div>
        </div>
    );
};

export default Skills;