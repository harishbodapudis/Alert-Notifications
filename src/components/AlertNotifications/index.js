// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Alert Notifications</h1>

        <div className="notification-box">
          <div className="close-box">
            <AiFillCheckCircle className="ai-fill" />
          </div>
          <Notification>
            <div className="data-box">
              <h1 className="success-heading">Success</h1>
              <p className="success-description">
                You can access all the files in the folder
              </p>
            </div>
          </Notification>
        </div>

        <div className="notification-box">
          <div className="close-box">
            <RiErrorWarningFill className="error" />
          </div>

          <Notification className="content-close-box">
            <div className="data-box">
              <h1 className="error-heading">Error</h1>
              <p className="success-description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </Notification>
        </div>

        <div className="notification-box">
          <div className="close-box">
            <MdWarning className="warning" />
          </div>

          <Notification className="content-close-box">
            <div className="data-box">
              <h1 className="warning-heading">Warning</h1>
              <p className="success-description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </Notification>
        </div>

        <div className="notification-box">
          <div className="close-box">
            <MdInfo className="info" />
          </div>

          <Notification className="content-close-box">
            <div className="data-box">
              <h1 className="info-heading">Info</h1>
              <p className="success-description">
                Anyone on the internet can view these files
              </p>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
