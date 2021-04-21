import React from 'react';
import Link from './link';
import Router from 'next/router';
import Logo from './logo';

const Menu = props => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <Link href="/" activeClassName="active"><a data-hover="Ballina">Ballina</a></Link>
                    </li>
                    <li>
                        <Link href="/books" activeClassName="active"><a data-hover="Librat">Librat</a></Link>
                    </li>
                    {/* <li>
                        <Link href="/books/authors" activeClassName="active"><a data-hover="Autorët">Autorët</a></Link>
                    </li> */}
                    <li>
                        <Link href="/contact" activeClassName="active"><a data-hover="Kontakti">Kontakti</a></Link>
                    </li>
                    <li className="search">
                        <span className="input input--nao">
                            <input className="input__field input__field--nao" type="text" id="input-1" placeholder="Kërko" />
                            <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                                preserveAspectRatio="none">
                                <path
                                    d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </nav>
            <div className="logo" onClick={() => Router.push('/')}>
                <Logo />
            </div>

        </>
    );
}


export default Menu;