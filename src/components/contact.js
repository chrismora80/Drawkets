import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (908) 977-5746
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton', color: 'white' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    christianmora007@hotmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>

            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/christian-mora-a6b862b0/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a href="https://github.com/chrismora80" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>

            </div>
          </Cell>
        </Grid>



      </div>
    )
  }
}

export default Contact;