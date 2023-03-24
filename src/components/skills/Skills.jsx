import React from 'react'
import Frontend from './Frontend';
import "./skills.css";
import Backend from './Backend'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtile">My technical level</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>

    </section>

  )
}

export default Skills