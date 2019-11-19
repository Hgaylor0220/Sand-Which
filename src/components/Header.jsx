import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    var navColor = {
        backgroundColor: 'lightblue',
        color: 'black',
        fontWeight: 'bold'
    };
    var navTextStyle ={
        color: 'black',
        fontWeight: 'bold'
    };
    var iconStyles ={
        height: '50px',
        width: '50px',
        paddingTop: '10px'
    };

    return(
        <header  className="navbar-fixed">
            <nav>

                <div style={navColor} className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        {/* <li><Link to='/'><i ><img style={iconStyles} src={FaceBook} alt="facebook icon"></img></i></Link></li> */}
                        <li>
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" required/>
                                    <label className="label-icon" value="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>

                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link style={navTextStyle} to='/'>NewsFeed</Link></li>
                        <li><Link style={navTextStyle} to='AddSandwich'>MakeSandwich</Link></li>
                        <li><Link style={navTextStyle} to='ReviewSandwich'>Review</Link></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}



export default Header;