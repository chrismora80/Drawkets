import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '200', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: 'url(../images/EmployeeDirectory.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
              An employee or manager would benefit greatly from being able to view non-sensitive data about other employees.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/nodePenn.git'>GitHub</Button>
              <Button colored href='https://git.heroku.com/still-brook-72826.git'>Live Demo</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/FitnessTracker.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
              A consumer will reach their fitness goals quicker when they track their workout progress. Add exercises to a previous workout plan.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/drupalyzer.git'>GitHub</Button>
              <Button colored href='https://calm-gorge-33561.herokuapp.com/'>Live Demo</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/TeamBuilder.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
              This project is based on fantasy team building where participants assemble virtual teams of real players of a professional sport.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/skylar112/Project-2-NBA-Team-Builder.git'>GitHub</Button>
              <Button colored href='https://lower-canoe-73465.herokuapp.com/index.html'>Live Demo</Button>
            </CardActions>
          </Card>


        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '200', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: 'url(../images/WeatherDashboard.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
              An employee or manager would benefit greatly from being able to view non-sensitive data about other employees.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/drevolkit.git'>GitHub</Button>
              <Button colored href='https://chrismora80.github.io/drevolkit/'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/DayPlanner.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
              A consumer will reach their fitness goals quicker when they track their workout progress. Add exercises to a previous workout plan.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/drupalyzer.git'>GitHub</Button>
              <Button colored href='https://calm-gorge-33561.herokuapp.com/'>Live Demo</Button>
            </CardActions>

          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/EatBurger.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
            Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/Movigament.git'>GitHub</Button>
              <Button colored href='https://infinite-scrubland-39499.herokuapp.com/'>Live Demo</Button>
            </CardActions>

          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '200', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: 'url(../images/Quiz.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
            Create a quiz on javascript fundamentals and keep track of high scores. At first question and start the coutdown timer
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/subwayjs.git'>GitHub</Button>
              <Button colored href='https://chrismora80.github.io/subwayjs/.'>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/DayPlanner.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
            Once the user starts the quiz, present the first question and start the coutdown timer. When the user selects an answer.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/drupalyzer.git'>GitHub</Button>
              <Button colored href='https://calm-gorge-33561.herokuapp.com/'>Live Demo</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(../images/EatBurger.png) center / cover' }} ></CardTitle>
            <CardText style={{ color: '#ffff', background: '#3b3a30' }}>
            Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/chrismora80/Movigament.git'>GitHub</Button>
              <Button colored href='https://infinite-scrubland-39499.herokuapp.com/'>Live Demo</Button>
            </CardActions>

          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>MYSQL</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;