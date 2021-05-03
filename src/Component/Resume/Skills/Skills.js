import React from 'react';
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    <li className={styles.html}>HTML</li>
                    <li className={styles.css}>CSS</li>
                    <li className={styles.word}>WordPress</li>
                </div>
                <div className='col-md-5'>
                    <li className={styles.js}>JavaScript</li>
                    <li className={styles.rc}>React</li>
                    <li className={styles.c}>C</li>
                </div>
            </div>
        </div>
    );
};

export default Skills;