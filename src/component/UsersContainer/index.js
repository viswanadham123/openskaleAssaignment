import './index.css'

const UsersContainer = props => {
  const {each} = props
  const {emailId,firstName,lastName} = each
  return (
    <li className="job-div">  
      <p>Full Name:{firstName}</p>
      <p>Email:{emailId}</p>
      <p>Job Title:{lastName}</p>
    </li>
  )
}

export default UsersContainer