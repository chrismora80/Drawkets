import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            

            <div className="banner-text">

              <h1 className= "wrapper">Christian Mora</h1>
              <h5>Full Stack Web Developer</h5>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | MySql | NodeJS | Express | MongoDB</p>

              
            </div>
          </Cell>
        </Grid>
      </div>
      
    )
  }
}

export default Landing;