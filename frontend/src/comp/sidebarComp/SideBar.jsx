import { Link } from 'react-router-dom'
import './sideBar.css'
import { User, EnvelopeSimpleOpen, Password } from '@phosphor-icons/react'

function SideBar() {
    return (
        <div className="sidebar">
            <h1 className='sidebar__title'>Settings</h1>
            <div className='sidebar__item'>
                <Link to='/login' className='sidebar__item-link'>
                    <User size={32} fill='black'/>
                    <h4 className='sidebar__item-title'>Account</h4>
                </Link>
            </div>
            <div className='sidebar__item'>
                <Link to='/login' className='sidebar__item-link'>
                    <EnvelopeSimpleOpen size={32} fill='black'/>
                    <h4 className='sidebar__item-title'>Email</h4>
                </Link>
            </div>
            <div className='sidebar__item'>
                <Link to='/login' className='sidebar__item-link'>
                    <Password size={32} fill='black'/>
                    <h4 className='sidebar__item-title'>Password</h4>
                </Link>
            </div>
        </div>
  )
}

export default SideBar
