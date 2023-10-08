import React from 'react';

const Idcard = () => {
    return (
        <div style={{  justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <center>
            <form className='idcard'>
                <table style={{ border: '5px solid red', borderCollapse: 'collapse', width: '600px', height: '300px', backgroundColor: 'black' }}>
                    <tr>
                        <td>
                            <br />
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="bi">
                                <center>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/KL_University_logo.svg/1200px-KL_University_logo.svg.png" style={{ width: '150px', height: '80px' }} alt="University Logo" />
                                </center>
                            </div>
                        </td>
                        <td>
                            <div className="vl">
                                <h4 style={{ color: 'yellow', textAlign: 'center' }}><b> Department of <br />AI & DS</b></h4>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p style={{ color: 'white', textAlign: 'center' }}><b>IDENTITY CARD</b></p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <img src="https://vistapointe.net/images/prabhas-wallpaper-18.jpg" alt="User" />
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <font color="white">
                                <p style={{ textAlign: 'center' }}><b>ID.No:</b> 2200080022</p>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <font color="white">
                                <p style={{ textAlign: 'center' }}><b>Name:</b> M N K Praneeth</p>
                            </font>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <font color="white">
                                <p style={{ textAlign: 'center' }}><b>BRANCH:</b> AI & DS</p>
                            </font>
                        </td>
                    </tr>
                </table>
            </form>
            </center>
        </div>
    );
}

export default Idcard;
