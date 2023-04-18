import {Component} from 'react'

import {Link} from 'react-router-dom'

import JobsContainer from '../JobsContainer'

import Profile from '../Profile'

import './index.css'

const jobs = [
  {
    Company: 'TATA',
    Salary: '5L',
    Role: 'SOFTWARE DEVELOPER',
    Location: 'HYDERABAD',
  },
  {
    Company: 'INFOSYS',
    Salary: '3.5L',
    Role: 'PYTHON DEVELOPER',
    Location: 'BANGALORE',
  },
  {
    Company: 'WIPRO',
    Salary: '6.5L',
    Role: 'BACK-END DEVELOPER',
    Location: 'CHENNAI',
  },
  {
    Company: 'TATA',
    Salary: '12L',
    Role: 'REACT DEVELOPER',
    Location: 'HYDERABAD',
  },
  {
    Company: 'INFOSYS',
    Salary: '11L',
    Role: 'PYTHON DEVELOPER',
    Location: 'BANGALORE',
  },
  {
    Company: 'WIPRO',
    Salary: '5L',
    Role: 'UI/UX DEVELOPER',
    Location: 'NOIDA',
  },
  {
    Company: 'TATA',
    Salary: '8L',
    Role: 'SOFTWARE DEVELOPER',
    Location: 'VISAKHAPATNAM',
  },
  {
    Company: 'INFOSYS',
    Salary: '1.5L',
    Role: 'PYTHON DEVELOPER',
    Location: 'MUMBAI',
  },
  {
    Company: 'WIPRO',
    Salary: '7L',
    Role: 'DATA ANALYST',
    Location: 'CHENNAI',
  },
]

class Home extends Component {
  state = {
    jobsList: jobs,
    jobsSection: false,
  }

  changeButton = () => {
    this.setState({jobsSection: true})
  }

  changeState = () => {
    this.setState({jobsSection: false})
  }

  render() {

    
    const {jobsList, jobsSection} = this.state

    return (
      <div>
        <nav className="header-container">
          <div className="logo-and-title-container">
            <h1 className="title" onClick={this.changeButton}>
              JOBS
            </h1>
          </div>

          <ul className="nav-items-list">
            <li className="link-item">

           
              <Link className="route-link" to="/">
                <button type="button" className="button1">
                  LOGOUT
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        
          <ul className="ul">
            {jobsList.map(each => (
              <JobsContainer each={each} />
            ))}
          </ul>
       
      </div>
    )
  }
}

export default Home