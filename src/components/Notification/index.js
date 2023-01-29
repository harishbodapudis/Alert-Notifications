// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="content-close-box">
      {children}
      <div>
        <GrFormClose className="gr-close" />
      </div>
    </div>
  )
}

export default Notification
