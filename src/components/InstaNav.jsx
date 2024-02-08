import React from 'react'
import { Link } from 'react-router-dom'

const InstaNav = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">Insta</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Account</Link>
        <Link class="nav-link" to="/search">Search Account</Link>
        <Link class="nav-link" to="/view">Accounts</Link>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default InstaNav