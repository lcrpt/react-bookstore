import React from 'react';

export default () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">GLOSE</a>
        </div>

        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search Books, Users ..." />
          </div>
        </form>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Bookstore</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
