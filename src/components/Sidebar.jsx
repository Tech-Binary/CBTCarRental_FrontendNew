import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling

const menuItems = [
    {
        id: "Homepage",
        label: "Dashboard",
        icon: "Home.png",
        className: "nav-img-Homepage",
        path: "with-driver",
        formName: "Homepage",
        isDropdown: true,
        children: [
            {
                id: "role-management",
                label: "Role Management",
                icon: "Role managemnet.png",
                className: "mr-2 roleimg",
            },
        ],
    },
];

const SidebarComponent = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <div className="sidebar">
            <ul className="menu">
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item">
                        <a href={item.path} className="menu-link" onClick={item.isDropdown ? toggleDropdown : null}>
                            <img src={item.icon} alt={item.label} className={item.className} />
                            {item.label}
                        </a>
                        {item.isDropdown && openDropdown && (
                            <ul className="submenu">
                                {item.children.map(child => (
                                    <li key={child.id} className="submenu-item">
                                        <a href={child.id} className="submenu-link">
                                            <img src={child.icon} alt={child.label} className={child.className} />
                                            {child.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarComponent;