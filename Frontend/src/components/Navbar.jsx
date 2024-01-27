import React from 'react'


function Navbar() {
  return (
    <div>
      <header id="header" className="transparent-header-modern fixed-header-bg-white w-100">
            {/* <div className="top-header bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="top-contact list-text-white d-table">
                                <li><a href="#"><i className="fas fa-phone-alt text-success mr-1"></i>+1 243-765-4321</a></li>
                                <li><a href="#"><i className="fas fa-envelope text-success mr-1"></i>codeastro@realestatest.com</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="top-contact float-right">
                                <ul className="list-text-white d-table">
                                    <li><i className="fas fa-user text-success mr-1"></i>
                                        <a href="login.php">Login</a>&nbsp;&nbsp;| </li>
                                    <li><i className="fas fa-user-plus text-success mr-1"></i><a href="register.php"> Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="main-nav secondary-nav hover-success-nav py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <a className="navbar-brand position-relative" href="/"><img className="nav-logo" src="assets/images/IMG_0926.PNG" alt="" height={30} width={30}/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item dropdown"> <a className="nav-link" href="/" role="button" aria-haspopup="true" aria-expanded="false">Home</a></li>
                                        <li className="nav-item"> <a className="nav-link" href="/about">About</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/contact">Contact</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/properties">Properties</a> </li>
                                        {/* <li className="nav-item"> <a className="nav-link" href="agent.php">Agent</a> </li> */}
                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"> <a className="nav-link" href="profile.php">Profile</a> </li>
                                                <li className="nav-item"> <a className="nav-link" href="feature.php">Your Property</a> </li>
                                                <li className="nav-item"> <a className="nav-link" href="logout.php">Logout</a> </li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                    <a
  className="navig"
  
  href="/login"
  
>
  Login
</a>

<a
  className="navig"

  href="/register"
>
  Register
</a>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
