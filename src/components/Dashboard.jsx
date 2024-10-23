import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./Sidebar.css";
import "./header.css";
import Header from "./header";
function Dashboard() {
  const [activeBox, setActiveBox] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoverTab, setHoverTab] = useState(null);

  const navigate = useNavigate();

  // Sidebar menu items
  const menuItems = [
    {
      id: "Homepage",
      label: "Dashboard",
      icon: "dash.svg",
      className: "nav-img-Homepage",
      path: "with-driver",
      formName: "Homepage" ,
      isDropdown: true,
      children: [
        {
          id: "With-Driver",
          label: "With-Driver",
          icon: "user.svg",
          className: "mr-2 roleimg",
          path: "with-driver",
        },
      ]
    },
    
    {
      id: "Vehicle:Add/Change/Remove",
      label: "Vehicle-Management",
      icon: "add.svg",
      isDropdown: true,
      children: [
        {
          id: "checklist-driver",
          label: "User Master",
          icon: "user.svg",
          className: "mr-2 roleimg",
          path: "add-vehicle",
        },
        {
          id: "legal-document-upload",
          label: "Legal Doc Upload",
          icon: "legal.svg",
          className: "mr-2 roleimg",
          path: "legal-document-upload",
        },
        {
          id: "vehicle-maintainance",
          label: "Maintainance",
          icon: "maintainance.svg",
          className: "mr-2 roleimg",
          path: "vehicle-maintainance",
        },
        {
          id: "checklist-driver",
          label: "Checklist:Before/After Ride",
          icon: "check.svg",
          className: "mr-2 roleimg",
          path: "checklist-driver",
        },
        {
          id: "vehicle-report",
          label: "Vehicle Report",
          icon: "vehrep.svg",
          className: "mr-2 roleimg",
          path: "vehicle-report",
        },
        {
          id: "vehicle-report",
          label: "See all vehicles",
          icon: "seeveh.svg",
          className: "mr-2 roleimg",
          // path: "/vehicle-report",
        },
      ],
    },
    // New menu item for Vehicle Maintenance with its own submenu
    {
      id: "Driver: Add/Change/Remove",
      label: "Driver-Managemengt",
      icon: "driver.svg",
      className: "nav-img-Vehicle",
      isDropdown: true,
      children: [
        {
          id: "driver-information",
          label: "Driver Info Form",
          icon: "info.svg",
          className: "mr-2 roleimg",
          path: "driver-information",
        },
        {
          id: "Leaves&Holidays",
          label: "Leaves/Holidays",
          icon: "leaves.svg",
          className: " roleimg",
          path: "Leaves&Holidays",
        },
        {
          id: "driver-report",
          label: "Driver report",
          icon: "vehrep.svg",
          className: "mr-2 roleimg",
          path: "driver-report",
        },
        {
          id: "driver-report",
          label: "See all Drivers",
          icon: "seeveh.svg",
          className: "mr-2 roleimg",
          path: "alldriver-report",
        },
      ],
    },
    {
      id: "Client Information",
      label: "Client Information",
      icon: "client.svg",
      className: "nav-img-Vehicle",
      isDropdown: true,
      children: [
        {
          id: "client-info",
          label: "Client Information",
          icon: "info.svg",
          className: "mr-2 roleimg",
          path: "client-info",
        },
      ],
    },
    {
      id: "Price Plan",
      label: "Price Plan",
      icon: "price.svg",
      className: "nav-img-Vehicle",
      isDropdown: true,
      children: [
        {
          id: "price-plan",
          label: "Price Plan",
          icon: "ppblack.svg",
          className: "mr-2 roleimg",
          path: "price-plan",
        },
      ],
    },
    {
      id: "Booking Pannel",
      label: "Booking Pannel",
      icon: "booking.svg",
      className: "nav-img-Vehicle",
      isDropdown: true,
      children: [
        {
          id: "price-plan",
          label: "Check Availability",
          icon: "checkavlblty.svg",
          className: "mr-2 roleimg",
          path: "price-plan",
        },
        {
          id: "price-plan",
          label: "Past Bookings",
          icon: "leaves.svg",
          className: "mr-2 roleimg",
          path: "past-booking",
        },
        {
          id: "renewable-document",
          label: "Documents Renewable",
          icon: "documents.svg",
          className: "mr-2 roleimg",
          path: "renewable-document",
        },
      ],
    },
  ];

  const hasAccess = (item) => {
    if (item.isDropdown) {
      return item.children.some((child) => hasAccess(child));
    }
    return !!item.path;
  };

  const renderMenuItem = (item) => {
    if (!hasAccess(item)) return null;

    if (item.isDropdown) {
      return (
        <li
          key={item.id}
          className="nav-item menu-item"
          data-target={`${item.id}`}
          onMouseEnter={() => setHoverTab(item.label)}
          onMouseLeave={() => setHoverTab(null)}
        >
          <div
            className={`nav-link d-flex justify-items-space align-items-center nav-link-dropdown ${
              activeBox === item.id ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/icons/${item.icon}`}
                alt=""
                className={item.className}
              />
              {isSidebarOpen && <span>{item.label}</span>}
            </div>
            {isSidebarOpen && (
              <img
                src="/assets/images/Down.png"
                alt="dropdown"
                style={{ width: "12px" }}
              />
            )}
            {!isSidebarOpen && hoverTab === item.label && (
              <div className="hover-box">{item.label}</div>
            )}
          </div>
        </li>
      );
    }

    return (
      <li
        key={item.id}
        className="nav-item"
        onMouseEnter={() => setHoverTab(item.label)}
        onMouseLeave={() => setHoverTab(null)}
      >
        <NavLink
          className={({ isActive }) =>
            `nav-link d-flex justify-items-space align-items-center dropdown ${
              isActive || activeTab === item.id ? "active" : "" // Will make the link active based on the current route
            }`
          }
          id={`${item.id}-tab`}
          to={item.path}
          onClick={() => handleLinkClick(item.id)}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icons/${item.icon}`}
              alt=""
              className={item.className}
            />
            {isSidebarOpen && <span className="ml-2">{item.label}</span>}
          </div>
          {!isSidebarOpen && hoverTab === item.label && (
            <div className="hover-box">{item.label}</div>
          )}
        </NavLink>
      </li>
    );
    
  };

  const handleMenuItemClick = (boxId) => {
    setActiveBox(activeBox === boxId ? null : boxId);
    setIsSidebarOpen(false);
  };

  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    setActiveBox(null);
    console.log("Active Tab:", tab); 
  };

  const renderSubMenu = () => {
    const activeMenu = menuItems.find((item) => item.id === activeBox);
    if (!activeMenu || !hasAccess(activeMenu)) return null;

    return (
      <div className={`box ${activeBox ? "active" : ""}`} id="box">
        <div className="box-header">
          <h3>{activeMenu.id}</h3>
          <button className="close" onClick={() => setActiveBox(null)}>
            ×
          </button>
        </div>
        <div className="box-content">
          {activeMenu.children.map((child) => (
            <div
              key={child.id}
              className={`d-flex align-items-center submenu-item ${
                activeSubTab === child.id ? "active" : ""
              }`}
              onClick={() => {
                navigate(child.path); // Navigate to the selected path
                setActiveBox(null); // Close the box
              }}
            >
              <div className="col-md-2 ms-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${child.icon}`}
                  alt=""
                  className={child.className}
                />
              </div>
              <div className="col-md-8">
                <span style={{ fontSize: "small" }}>{child.label}</span>
              </div>
              <div className="col-md-2">
                <img src="/assets/images/export.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="Maindiv">
      <div onClick={() => setActiveBox(null)}>
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-md-3 pe-0 sidebar ${
              isSidebarOpen ? "open" : "closed"
            } border`}
          >
            <ul className="nav flex-column nav-tabs pmOptions" id="myTab">
              {menuItems.map(renderMenuItem)}
            </ul>
          </div>
          {activeBox && renderSubMenu()}
          <div
            className={`col-md-9 content ${isSidebarOpen ? "" : "expanded"}`}
            onClick={() => setActiveBox(null)}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
