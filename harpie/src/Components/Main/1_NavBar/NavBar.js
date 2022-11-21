import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../../assets/logo_harpie.png'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-custom">
                  <div class="container">
                  <Link to="/"><a class="navbar-brand" href="#" id='1' onClick={colorChangeLink}><img src={logo} alt="logo harpie" width="55px"/></a></Link>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul id='navbarlink' class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <Link to="nosProjets"><a class="nav-link active" id='2' onClick={colorChangeLink} aria-current="page">Nos projets</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id='3' href="#" onClick={colorChangeLink}>Le saviez-vous</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id='4' href="#" onClick={colorChangeLink}>Nos histoires</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id='5' href="#" onClick={colorChangeLink}>Faites un don</a>
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
    const activeLink = document.querySelector('active')
    const lien1 = document.getElementById('1');
    const lien2 = document.getElementById('2');
    const lien3 = document.getElementById('3');
    const lien4 = document.getElementById('4');
    const lien5 = document.getElementById('5');
    const lienAll = lien1 + lien2 + lien3 + lien4 +lien5

     const colorChangeLink = () => { !activeLink ? lienAll.classList.add('active') : lienAll.classList.remove('active')};



