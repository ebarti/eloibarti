import React, {useState} from 'react';
import {Link} from 'gatsby';
import {Layout} from 'antd';
import 'font-awesome/less/font-awesome.less';
import {
    anchorActive,
    backgroundDiv,
    circleMenu,
    hamburger,
    hamburgerText,
    hidden,
    line,
    menuIcon,
    nav,
    navItem,
    navWrap,
    openMenu,
} from './header.module.less';
import '../../../styles/global.less';
import useWindowSize from '../../../utils/hooks';

export default () => {
    const [menu, setMenu] = useState(false);

    const {width} = useWindowSize();
    const toggleMenu = () => {
        if (width !== 0 && width <= 768) {
            if (menu) {
                setMenu(false);
            } else {
                setMenu(true);
            }
        }
    };
    return (
        <>
            <div className={circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
                <div className={`${hamburger} ${menu ? menuIcon : null}`}>
                    <div className={line}/>
                    <div className={line}/>
                    <div className={hamburgerText}>MENU</div>
                </div>
            </div>
            <Layout className={`${navWrap} ${menu ? null : hidden} ${menu ? openMenu : null}`}>
                <div className={backgroundDiv}>
                    <ul className={nav}>
                        <li className={navItem}>
                            <Link to="/" onClick={toggleMenu} activeClassName={anchorActive}>
                                About
                            </Link>
                        </li>
                        <li className={navItem}>
                            <Link to="/contact" onClick={toggleMenu} activeClassName={anchorActive}>
                                Contact
                            </Link>
                        </li>
                        <li className={navItem}>
                            <Link to="/blog" onClick={toggleMenu} activeClassName={anchorActive}>
                                Blog
                            </Link>
                        </li>
                        <li className={navItem}>
                            <Link to="/tags" onClick={toggleMenu} activeClassName={anchorActive}>
                                Tags
                            </Link>
                        </li>
                    </ul>
                </div>
            </Layout>
        </>
    );
};
