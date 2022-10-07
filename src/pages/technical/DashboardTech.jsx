import React from 'react'
import NavbarComponent from '../../components/NavbarComponent'
const DashboardTech = () => {
    return (
        <>
            <NavbarComponent />
            <div className='main'>
                <main className=''>
                    <div className='p-4' >
                        <div style={{ borderRadius: '30px', padding: '20px', background: 'white', marginBottom: '10px' }}>
                            <div className='dashboard-tech container-fluid'>
                                <div>
                                    <div className='title'>อุปกรณ์หลัก (Controller)</div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 style={{ position: 'relative' ,textAlign:'left' }}>Arduino mega 2560<div style={{ position: 'absolute', top: 0, right: 0, color: 'green' }}>Online</div></h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Voltage</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 style={{ position: 'relative',textAlign:'left' }}>Mini PC<div style={{ position: 'absolute', top: 0, right: 0, color: 'green' }}>Online</div></h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Voltage</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 style={{ position: 'relative',textAlign:'left' }}>Jetson 1<div style={{ position: 'absolute', top: 0, right: 0, color: 'green' }}>Online</div></h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 style={{ position: 'relative',textAlign:'left' }}>Jetson 2<div style={{ position: 'absolute', top: 0, right: 0, color: 'green' }}>Online</div></h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='title'>อุปกรณ์เสริม (Modules/Sensors)</div>
                                    <div className='row'>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Odrive 1</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Voltage</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Odrive 2</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Voltage</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 ms-md-auto'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Ultrasonic 1</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 ms-md-auto'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Ultrasonic 2</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Wheel 1 (front-left)</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Wheel 2 (front-right)</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 ms-md-auto'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Wheel 3 (back-left)</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 ms-md-auto'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>Wheel 4 (back-right)</h3>
                                                    <div className='center'>
                                                        <div className='progress'>
                                                        </div>
                                                    </div>
                                                    <h3>Value</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>DHT 1 (Battery)</h3>
                                                    <div className='space '>
                                                        <div></div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Value</h3>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3>DHT 2 (in Robot)</h3>
                                                    <div className='space'>
                                                        <div></div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Value</h3>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 >PZEM-017</h3>
                                                    <div className='space'>
                                                        <div >
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Voltage</h3>
                                                        </div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Amp</h3>
                                                        </div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Watt</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='dashboard-card'>
                                                <div>
                                                    <h3 >IMU</h3>
                                                    <div className='space'>
                                                        <div >
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>X</h3>
                                                        </div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Y</h3>
                                                        </div>
                                                        <div>
                                                            <div className='center'>
                                                                <div className='progress'>
                                                                </div>
                                                            </div>
                                                            <h3>Z</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </>
    )
}

export default DashboardTech