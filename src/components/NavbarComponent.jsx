import React, {useEffect,useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Battery from '../services/battery'
import '../styles/sidebar.css'
const NavbarComponent = () => {
    const navigate = useNavigate();
    const [message, setMessages] = useState([])

    useEffect(() => {
        fetchData();
        // getMqtt()
    });

    const fetchData = async() =>{
        await axios.get(`${import.meta.env.VITE_API}/mqtt/Interval`)
        .then(response => {
            response.status === 200 ? setMessages(response.data) : console.log("error")
                .catch((err) => { console.log("Not Working") })
        })
    }

    return (
        <div className="container">
            <aside>
                <div className="top">
                    <nav className="navbar fixed-top navbar-light">

                        <div>
                            <div className="logo">
                                {/* <img src={logo} alt='Logo' /> */}
                                <h2 className='text-muted'>Surveillance <span className="danger">5G</span> Robot</h2>
                            </div>
                        </div>
                        {/* <div style={{ float: 'right', color: 'black' }}>ความแรงของสัญญาณ = {message.Voltage} Mpbs</div> */}
                        <div style={{ float: 'right', color: 'black' }}>
                            {message.Battery !== undefined ? <Battery percentage={message.Battery} />
                            :<Battery percentage={0} />}
                        </div>
                    </nav>
                    {/* <div className="logo">
                        <img src={logo} alt='Logo' />
                        <h2 className='text-muted'>Surveillance <span className="danger">5G</span> Robot</h2>
                    </div> */}
                </div>

                <div className="sidebar">
                    <ul className="nav-links">
                        <li>
                            <div id='Links'>
                                <span><AdminPanelSettingsIcon /></span>
                                <h3>Admin</h3>
                                <KeyboardArrowRightIcon />
                            </div>
                            <ul className="sub-menu">
                                <li><a href="/dashboard">Dashboard</a></li>
                                {/* <li><a href="/adminCon">การสนทนา</a></li> */}
                                <li><a href="/manage-user">บัญชีผู้ใช้</a></li>
                                <li><a href="/equipment">สถานะอุปกรณ์</a></li>
                                <li><a href="/report-repair">แจ้งปัญหาอุปกรณ์</a></li>
                                <li><a href="/con-admin">Admin Video Call</a></li>
                                <li><a href="/con-robot">Robot Video Call</a></li>

                            </ul>
                        </li>
                        <li>
                            <div id='Links'>
                                <span><SettingsIcon /></span>
                                <h3>Technical</h3>
                                <KeyboardArrowRightIcon />
                            </div>
                            <ul className="sub-menu">
                            <li><a href="/dashboard">Dashboard</a></li>

                                {/* <li><a href="/technical">ควบคุมหุ่นยนต์</a></li> */}
                                <li><a href="/dashboard-tech">สถานะอุปกรณ์</a></li>
                                {/* <li><a href="/equipment">สถานะอุปกรณ์</a></li> */}
                                <li><a href="/report-repair-tech">ปัญหาอุปกรณ์</a></li>

                            </ul>
                        </li>
                        <li>
                            <div id='Links'>
                                <span><SecurityIcon /></span>
                                <h3>Security</h3>
                                <KeyboardArrowRightIcon />
                            </div>
                            <ul className="sub-menu">
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/equipment">สถานะอุปกรณ์</a></li>
                            <li><a href="/report-repair">แจ้งปัญหาอุปกรณ์</a></li>

                                {/* <li><a href="/security">ประวัติ</a></li> */}
                            </ul>
                        </li>

                    </ul>
                    {/* {
                        !getUser() ? (
                            navigate("/")
                        ) :
                            <Link id='Links' to='#' onClick={() => logout(() => navigate("/"))} style={{}}>
                                <span><LogoutIcon /></span>Logout
                            </Link>
                    } */}

                </div>
            </aside>
        </div>
    )
}

export default NavbarComponent;