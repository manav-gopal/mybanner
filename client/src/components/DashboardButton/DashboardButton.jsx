import {Link} from 'react-router-dom';
import './DashboardButton.scss'

function DashboardButton() {
  return (
    <div className='dashboard-section'>
        <div className='dashboard-button'>
            <Link className='btn-primary' to={"/dashboard"}>
                Dashboard
            </Link>
        </div>
    </div>
  )
}

export default DashboardButton