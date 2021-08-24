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
                        <Link href="/books" activeClassName="active"><a data-hover="Librat">Librat</a></Link>
                    </li>
                    <li>
                        <Link href="/authors" activeClassName="active"><a data-hover="Autorët">Autorët</a></Link>
                    </li>
                    {/* <li>
                        <Link href="/books/authors" activeClassName="active"><a data-hover="Autorët">Autorët</a></Link>
                    </li> */}
                    <li>
                        <Link href="/contact" activeClassName="active"><a data-hover="Kontakti">Kontakti</a></Link>
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