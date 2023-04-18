import './index.css'

const JobContainer = props => {
  const {each} = props
  const {Company, Salary, Role, Location} = each
  return (
    <li className="job-div">
      <p>Company name:{Company}</p>
      <p>Salary Range:{Salary}</p>
      <p>Role:{Role}</p>
      <p>Location:{Location}</p>
    </li>
  )
}

export default JobContainer