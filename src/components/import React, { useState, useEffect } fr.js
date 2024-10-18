import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useFormRights } from "./FormRightsContext";
import "./Sidebar.css";
import "./Dashboard.css";
import "./header.css";
import Header from "./header";

function Dashboard() {
  const [activeBox, setActiveBox] = useState(null);
  const [activeTab, setActiveTab] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [roleManagementOpen, setRoleManagementOpen] = useState(false);
  const [hoverTab, setHoverTab] = useState(null);

  const navigate = useNavigate();
  const { formRights } = useFormRights();

  // Sidebar menu items
  const menuItems = [
    {
      id: "Homepage",
      label: "Dashboard",
      icon: "Home.png",
      className: "nav-img-Homepage",
      path: "Homepage",
      formName: "Homepage",
      isDropdown: true,
      children: [
        {
          id: "role-management",
          label: "Role Management",
          icon: "Role managemnet.png",
          className: "mr-2 roleimg",
        },
        {
          id: "add-vehicle",
          label: "Add Vehicle",
          icon: "Role managemnet.png",
          className: "mr-2 roleimg",
          path:"add-vehicle"
        },
      ],
    },
  ];

  // Check for authentication and form rights
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken || formRights.length === 0) {
      navigate("/login");
    }
  }, [formRights, navigate]);

  // Function to check if the user has access to a menu item
  const hasAccess = (item) => {
    if (item.isDropdown || item.isSubDropdown) {
      return item.children.some((child) => hasAccess(child));
    }
    return !!item;
  };

  // Rendering individual menu items
  const renderMenuItem = (item) => {
    if (!hasAccess(item)) return null;

    if (item.isDropdown) {
      return (
        <li
          key={item.id}
          className="nav-item menu-item"
          onMouseEnter={() => setHoverTab(item.label)}
          onMouseLeave={() => setHoverTab(null)}
        >
          <div
            className={`nav-link d-flex align-items-center py-3 nav-link-dropdown ${
              activeBox === item.id ? "active" : ""
            }`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icons/${item.icon}`}
              alt=""
              className={item.className}
            />
            {isSidebarOpen && <span>{item.label}</span>}
            <img src="/assets/images/Down.png" alt="dropdown" />
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
            `nav-link py-3 d-flex align-items-center ${isActive ? "active" : ""}`
          }
          to={item.path}
          onClick={() => handleLinkClick(item.id)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/${item.icon}`}
            alt=""
            className={item.className}
          />
          {isSidebarOpen && <span className="ml-2">{item.label}</span>}
          {!isSidebarOpen && hoverTab === item.label && (
            <div className="hover-box">{item.label}</div>
          )}
        </NavLink>
      </li>
    );
  };

  // Function to handle clicking on a dropdown menu item
  const handleMenuItemClick = (boxId) => {
    setActiveBox(activeBox === boxId ? null : boxId);
    setRoleManagementOpen(!roleManagementOpen);
    setActiveTab("administration");
  };

  // Function to handle clicking a link within a submenu
  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    setActiveBox(null);
  };

  // Rendering Administration dropdown content
  const renderAdministrationBox = () => {
    const adminItem = menuItems.find((item) => item.id === "Homepage");
    if (!hasAccess(adminItem)) return null;

    return (
      <div className={`box ${activeBox === "Homepage" ? "active" : ""}`}>
        <div className="box-header">
          <h3>Administration</h3>
          <button className="close" onClick={() => setActiveBox(null)}>
            ×
          </button>
        </div>
        <div className="box-content">
          {adminItem.children.map((child) => (
            <div
              key={child.id}
              className={`d-flex align-items-center submenu-item ${
                activeSubTab === child.id ? "active" : ""
              }`}
              onClick={() => handleLinkClick(child.id)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${child.icon}`}
                alt=""
                className={child.className}
              />
              <span>{child.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div>
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
            {activeBox === "Homepage" && renderAdministrationBox()}
            <div className={`col-md-9 content ${isSidebarOpen ? "" : "expanded"}`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
                  <div className="row">
                    {/* First row - Three columns */}
                    <div className="col-md-4 position-relative">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        className="position-absolute top-3 start-1 m-2"
                        style={{ zIndex: 1 }}
                      />

                      {/* Card Body */}
                      <div
                        className="card "
                        style={{
                          background:
                            "linear-gradient(180.13deg, #BDE9FB -50.39%, #FEFFFF 105.85%)",
                        }}
                      >
                        <div className="row g-0 align-items-center">
                          {/* Left-side image */}
                          <div className="col-md-4">
                            <img
                              src="/assets/images/icons/car.png"
                              className="img-fluid"
                              alt="Car Image"
                            />
                          </div>

                          {/* Right-side card content */}
                          <div className="col-md-8 d-flex flex-column justify-content-start text-start">
                            <div className="card-body">
                              {/* Car Title and Model */}
                              <h7 className="card-title mb-2 text-start ">
                                <img
                                  src="/assets/images/icons/bmw.png" // Replace with appropriate logo
                                  className="me-2"
                                />
                                BMW X5
                              </h7>
                              <p className="card-text mb-2 text-start">
                                <strong>xDrive 30d Sport</strong>
                              </p>

                              {/* Status */}
                              <p className="card-text mb-2 text-start">
                                <span className="fw-bold">Live Status:</span>
                                <span
                                  style={{
                                    backgroundColor: "white",
                                    padding: "3px",
                                    borderRadius: "20px",
                                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <span className="badge bg-success p-1 rounded-full mr-1 ">
                                    <span className="visually-hidden">
                                      Available
                                    </span>
                                  </span>
                                  <span
                                    className="ms-2"
                                    style={{ fontSize: "1rem", color: "green" }}
                                  >
                                    Available
                                  </span>
                                </span>
                              </p>

                              {/* Download Details Link */}
                              <a
                                href="#"
                                className="text-decoration-none text-start"
                              >
                                <i className="pi pi-download me-1"></i> Download
                                Details
                              </a>

                              {/* Price */}
                              <p className="text-lg font-bold mt-2">
                                ₹ INR 300/hr
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                              <button className="btn btn-primary book">
                                Book Now
                              </button>
                            </div>
                        {/* Footer Information */}
                        <div className="card-footer d-flex justify-content-between text-muted px-4 py-2">
                          <small>Insurance Exp. 01-01-2024</small>
                          <small>Registration Exp. 01-01-2024</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second row - Three columns */}
                </div>
    </>
  );
}

export default Dashboard;
