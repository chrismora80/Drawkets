import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Experience from './experience';




class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>

            <h2 style={{ paddingTop: '2em' }}>Christian Mora</h2>
            <h4 style={{ color: 'white' }}>Programmer</h4>
            <hr style={{ borderTop: '5px solid #f83600', width: '95%' }} />
            <p>I'm a Front-End Developer. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
            <hr style={{ borderTop: '5px solid #f83600', width: '95%' }} />

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2006}
              endYear={2011}
              schoolName="University Vicente Rocafuerte"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Rutgers University BootCamps"
              schoolDescription="Rutgers, The State University of New Jersey, is a leading national research university and the state of New Jersey’s preeminent, comprehensive public institution of higher education. Its dedication to higher education continues with the Rutgers Coding Bootcamp, offered by the Division of Continuing Studies, and Rutgers Data Science Bootcamp, offered by the Center for Innovative Education."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="Javascript"
              progress={90}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={25}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;