import React, { useState } from "react";
import "../header/header.css"
function Header() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleMenuItemClick = (event) => {
        console.log(`You selected ${event.target.textContent}`);
        setIsOpen(false); // Close the menu after selection
    };
    return (
        <>
            <header>
                <div className="top1">
                    <div className="container">
                        <div className="contacts">
                            <ul>
                                <li >info@crown-tourism.com</li>
                                <li>00962790303111 - 0096262229292</li>
                            </ul>
                        </div>
                        <div className="social">
                            <div className="socialmedia">
                                <ul>
                                    <li><a href=""><img src='facebook.png'/></a></li>
                                    <li><a href=""><img src='twitter.png'/></a></li>
                                    <li><a href=""><img src='linkedin.png'/></a></li>
                                    <li><a href=""><img src='insta.png'/></a></li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="top2">
                    <div className="container">
                        <div className="siteicon">
                            <a href="">
                                <img src="logo.png" />
                            </a>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li><a href="">اتصل بنا</a></li>
                                <li><a href="">المدونات</a></li>
                                <li className="dropdown"><a href="" onClick={toggleMenu} className="dropdown-button">الوجهات</a>
                                    {isOpen && (<ul className="dropdown-menu">
                                        <li>الأردن</li>
                                        <li>الإمارات العربية المتحدة</li>
                                        <li>تايلاند</li>
                                        <li>تركيا</li>
                                        <li>جورجيا</li>
                                        <li>سريلانكا</li>
                                        <li>لبنان</li>
                                        <li>ماليزيا</li>
                                        <li>مصر</li>
                                    </ul>)}</li>
                                <li className="dropmenu"><a href="" onClick={toggleMenu} className="dropdown-button">الرحلات السياحية</a>
                                    {isOpen && (<ul className="dropdown-menu1">
                                        <li>الحج والعمرة</li>
                                        <li>بيروت</li>
                                        <li>جنوب آسيا</li>
                                        <li>رحلات تركيا</li>
                                        <li>رحلات مصر</li>
                                        <li>رحلات آسيا</li>
                                    </ul>)}</li>
                                <li><a href="">من نحن</a></li>
                                <li><a href="">الصفحة الرئيسية</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </header>

        </>
    )
}

export default Header;