import './sideBar.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { PencilSimple } from '@phosphor-icons/react'

function SideBar({isLoggedIn}) {
    const [imgUrl, setImgUrl] = useState(null);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    useEffect(() => {
        if (isLoggedIn) {
            axios.get('http://localhost:8085/ns-sneakers/auth/userdetails', {
                withCredentials: true
            }).then(res => {
                const imageUrl = `http://localhost:8085/ns-sneakers/auth/userImage/${res.data.user.image}`;
                setImgUrl(imageUrl);
                setFirstname(res.data.user.firstName);
                setLastname(res.data.user.lastName);
                setEmail(res.data.user.email);
                setUsername(res.data.user.userName);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [isLoggedIn]);
    return (
        <div className="sidebar">
            <div className='sidebar__item'>
                <PencilSimple size={32} />
                <h4 className='sidebar__title'>Edit Profile</h4>
            </div>
        </div>
  )
}

export default SideBar
