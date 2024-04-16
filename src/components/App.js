import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from './Usercontext';
import "../assets/App.css";

// Import pages
import AboutUsPage from '../pages/AboutUsPage';
import AdminHomepage from '../pages/AdminHomePage';
import AdminProfile from './AdminProfile';
import AdminEmailSupport from './AdminEmailSupport';
import AdminVerifyCT from './AdminVerifyCT';
import AdminCertificatePreview from './AdminCertificatePreview';
import AdminReviews from './AdminReviews';
import AdminOpenReviews from './AdminOpenReviews';
import AdminManageUsers from './AdminManageUsers';
import AdminEventDetails from './AdminEventDetails';
import EventDetailsPage from '../pages/EventDetailsPage'
import AdminInquiryDetail from './AdminInquiryDetail'

import CaretakerHomePage from '../pages/CaretakerHomePage';
import CaretakerAppointmentReq from './CaretakerAppointmentReq';
import CaretakerAppointmentPage from '../pages/CaretakerAppointmentPage';
import CaretakerSchedule from './CaretakerSchedule';
import CaretakerSchedulePage from '../pages/CaretakerSchedulePage';
import CaretakerProfile from './CaretakerProfile';
import CaretakerProfilePage from '../pages/CaretakerProfilePage';
import CaretakerSupportPage from '../pages/CaretakerSupportPage';
import CaretakerLogInPage from '../pages/CaretakerLogInPage';
import CaretakerUploadCertificate from './CaretakerUploadCertificate'
import CaretakerCertificatePage from '../pages/CaretakerCertificatePage'

import DogOwnerHomePage from '../pages/DogOwnerHomePage';
import DogOwnerNav from './DogOwnerNav';
import DogOwnerViewCaretaker from './DogOwnerViewCaretaker';
import DogOwnerViewCaretakerPage from '../pages/DogOwnerViewCaretakerPage';
import DogOwnerEventPage from '../pages/DogOwnerEventPage';
import DogOwnerEventsList from './DogOwnerEventsList';
import DogOwnerEventsDetails from './DogOwnerEventsDetails';
import DogOwnerSupportPage from '../pages/DogOwnerSupportPage';
import DogOwnerViewAppointmentPage from '../pages/DogOwnerViewAppointmentPage';
import DogOwnerBookAppointment from './DogOwnerBookAppointment';
import DogOwnerBookAppointmentPage from '../pages/DogOwnerBookAppointmentPage';
import DogOwnerProfilePage from '../pages/DogOwnerProfilePage';
import DogOwnerLogInPage from '../pages/DogOwnerLogInPage';

import Homepage from '../pages/Homepage';
import RegistrationPage from '../pages/RegistrationPage';
import CaretakerRegistrationPage from '../pages/CaretakerRegistrationPage';
import DogOwnerRegistrationPage from '../pages/DogOwnerRegistrationPage';
import EventsPage from '../pages/EventsPage';
import SupportPage from '../pages/SupportPage';
import SignInPage from '../pages/SignInPage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/AboutUsPage" component={AboutUsPage} />
          <Route path="/RegistrationPage" component={RegistrationPage} />
          <Route path="/CaretakerRegistrationPage" component={CaretakerRegistrationPage} />
          <Route path="/DogOwnerRegistrationPage" component={DogOwnerRegistrationPage} />
          <Route path="/EventsPage" component={EventsPage} />
          <Route path="/SupportPage" component={SupportPage} />
          <Route path="/SignInPage" component={SignInPage} />
          <Route path="/events/:eventId" component={EventDetailsPage} />

          <Route path="/AdminHomepage" component={AdminHomepage} />
          <Route path="/AdminManageUsers" component={AdminManageUsers} />
          <Route path="/AdminProfile" component={AdminProfile} />
          <Route path="/AdminEmailSupport" component={AdminEmailSupport} />
          <Route path="/AdminReviews" component={AdminReviews} />
          <Route path="/AdminOpenReviews" component={AdminOpenReviews} />
          <Route path="/AdminVerifyCT" component={AdminVerifyCT} />
          <Route path="/AdminCertificatePreview" component={AdminCertificatePreview} />
          <Route path="/AdminEventDetails" component={AdminEventDetails} />
          <Route path="/inquiry/:id" component={AdminInquiryDetail} />

          <Route path="/CaretakerHomePage" component={CaretakerHomePage} />
          <Route path="/CaretakerAppointmentPage" component={CaretakerAppointmentPage} />
          <Route path="/CaretakerAppointmentReq" component={CaretakerAppointmentReq} />
          <Route path="/CaretakerSchedulePage" component={CaretakerSchedulePage} />
          <Route path="/CaretakerSchedule" component={CaretakerSchedule} />
          <Route path="/CaretakerSupportPage" component={CaretakerSupportPage} />
          <Route path="/CaretakerProfilePage" component={CaretakerProfilePage} />
          <Route path="/CaretakerLogInPage" component={CaretakerLogInPage} />
          <Route path="/caretakers/:id" component={CaretakerProfile} />
          <Route path="/CaretakerUploadCertificate" component={CaretakerUploadCertificate} />
          <Route path="/caretaker/:caretakerId/upload" component={CaretakerUploadCertificate} />


          <Route path="/DogOwnerHomePage" component={DogOwnerHomePage} />
          <Route path="/DogOwnerNav" component={DogOwnerNav} />
          <Route path="/DogOwnerViewCaretakerPage" component={DogOwnerViewCaretakerPage} />
          <Route path="/DogOwnerViewCaretaker" component={DogOwnerViewCaretaker} />
          <Route path="/DogOwnerEventPage" component={DogOwnerEventPage} />
          <Route path="/DogOwnerEventsList" component={DogOwnerEventsList} />
          <Route path="/DogOwnerEventsDetails" component={DogOwnerEventsDetails} />
          <Route path="/DogOwnerSupportPage" component={DogOwnerSupportPage} />
          <Route path="/DogOwnerViewAppointmentPage" component={DogOwnerViewAppointmentPage} />
          <Route path="/DogOwnerBookAppointmentPage" component={DogOwnerBookAppointmentPage} />
          <Route path="/DogOwnerBookAppointment" component={DogOwnerBookAppointment} />
          <Route path="/DogOwnerProfilePage" component={DogOwnerProfilePage} />
          <Route path="/DogOwnerLogInPage" component={DogOwnerLogInPage} />
        </Switch>
      </Router>
      
    </UserProvider>
  );
};

export default App;
