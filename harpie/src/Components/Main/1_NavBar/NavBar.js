import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/logo_harpie.png'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-custom">
                  <div class="container">
                  <Link to="/"><a class="navbar-brand" href="#"><img src={logo} alt="logo harpie" width="55px"/></a></Link>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul id='navbarlink' class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <Link id='navProjets' to="nosProjets"><a class="nav-link active" aria-current="page">Nos projets<span class="visually-hidden">(current)</span></a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Le saviez-vous</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Nos histoires</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Faites un don</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mon profil</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a class="dropdown-item" href="connexion.php">Se connecter</a>
                                    <a class="dropdown-item" href="inscription.php">S'inscrire</a>
                                </div>
                            </li>
                        </ul>
                    </div>
              </div>
              <Outlet/>
        </nav>
  )
}
