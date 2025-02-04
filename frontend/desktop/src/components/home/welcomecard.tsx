import React, { FunctionComponent, useState } from 'react'
import logo from '../../assets/images/logo-icon.svg'
import CreateNewProjectModal from './createprojectmodal'
import utils from '../../lib/utils'
import Constants from '../../constants'
import { selectProjects } from '../../redux/projectsSlice'
import { Project } from '../../data/models'
import { useAppSelector } from '../../redux/hooks'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'


const WelcomeCard: FunctionComponent<{}> = () => {

    const navigate = useNavigate()

    const [isShowingCreateProject, setIsShowingCreateProject] = useState(false)
    const projects: Project[] = useAppSelector(selectProjects)

    const navigateToNewDB = () => {
        if (projects.length > 0) {
            navigate(Constants.APP_PATHS.NEW_DB.path.replace('[id]', projects[0].id))
        }
    }

    return (
        <React.Fragment>
            <div className='card'>
                <div className="card-content">
                    <img src={logo} width={45} alt="slashbase logo" />
                    <h1>Get started</h1>
                    <br />
                    <Button
                        className="is-white"
                        text='Create new project'
                        onClick={() => { setIsShowingCreateProject(true) }}
                        icon={<i className="fas fa-folder-plus"></i>}
                    />
                    <br />
                    <Button
                        className="is-white"
                        text='Add new db'
                        onClick={navigateToNewDB}
                        icon={<i className="fas fa-circle-plus"></i>}
                    />
                    <hr />
                    <div>
                        <h3>Have any feedback?</h3>
                        <p>Use any of the channels below to share your feedback or feature requests.</p>
                        <div className="buttons">
                            <Button 
                                className='is-small is-white'
                                text='Discord'
                                icon={<i className="fab fa-discord"/>} 
                                onClick={() => { utils.openInBrowser(Constants.EXTERNAL_PATHS.DISCORD_COMMUNITY) }}
                            />
                            <Button 
                                className='is-small is-white'
                                text='Github'
                                icon={<i className="fab fa-github"/>} 
                                onClick={() => { utils.openInBrowser(Constants.EXTERNAL_PATHS.REPORT_BUGS) }}
                            />
                            <Button 
                                className='is-small is-white'
                                text='E-mail'
                                icon={<i className="fas fa-envelope"/>} 
                                onClick={() => { utils.openInBrowser(Constants.EXTERNAL_PATHS.SUPPORT_MAIL) }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {isShowingCreateProject && <CreateNewProjectModal onClose={() => { setIsShowingCreateProject(false) }} />}
        </React.Fragment >
    )
}


export default WelcomeCard