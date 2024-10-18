import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/header';
import AddVehicle from './components/AddVehicle';
import VehicleMaintainance from './components/VehicleMaintainance';
import LegalDocumentUpload from './components/LegalDocumentUpload';
import CheckLists from './components/CheckLists';
import VehicleReport from './components/VehicleReport';
import DriverInformation from './components/DriverInformation';
import AddDocument from './components/AddDocument';
import LeavesHolidays from './components/LeavesHolidays';
import DriverReport from './components/DriverReport';
import ClientInformation from './components/ClientInformation';
import PricePlan from './components/PricePlan';
import NewBooking from './components/NewBooking';
import RenewableDocument from './components/RenewableDocuments';
import WithoutDriver from './components/WithoutDriver';
import DriverAvailability from './components/DriverAvailability';
import VehicleInternalreport from './components/VehicleInternalreport';
import AllDriverReport from './components/AllDriverReport';
import WithDriver from './components/WithDriver';

import "./components/App.css";
import "./components/Dashboard.css";
import "./components/header.css";
import "./components/Sidebar.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<WithDriver />} />
          <Route path="without-driver" element={<WithoutDriver />} />
          <Route path="with-driver" element={<WithDriver />} />
          <Route path="new-booking" element={<NewBooking />} />
          <Route path="add-vehicle" element={<AddVehicle />} />
          <Route path="vehicle-maintainance" element={<VehicleMaintainance />} />
          <Route path="legal-document-upload" element={<LegalDocumentUpload />} />
          <Route path="checklist-driver" element={<CheckLists />} />
          <Route path="vehicleinternal-report" element={<VehicleReport />} />
          <Route path="driver-information" element={<DriverInformation />} />
          <Route path="add-document" element={<AddDocument />} />
          <Route path="Leaves&Holidays" element={<LeavesHolidays />} />
          <Route path="driver-report" element={<DriverReport />} />
          <Route path="client-info" element={<ClientInformation />} />
          <Route path="price-plan" element={<PricePlan />} />
          <Route path="renewable-document" element={<RenewableDocument />} />
          <Route path="alldriver-report" element={<AllDriverReport />} />
          <Route path="driveravailability-page" element={<DriverAvailability />} />
          <Route path="vehicle-report" element={<VehicleInternalreport />} />
        </Route>
        <Route path="header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;