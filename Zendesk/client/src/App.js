/* eslint-disable react/jsx-pascal-case */

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
// import React, { Component }  from 'react';
import React from 'react';
import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import {Close_tick} from './pages/close_tickets/Close_tick'
import { Ticket_lists } from './pages/tickets_list/Ticket_lists';
import { Tickets_form } from './components/tickets_form/Tickets_form_comp';
import { Dashboard } from './pages/entry/dashboard/Dashboard';
import {PageLayout} from '../src/components/login/PageLayout'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import ProfileContent from '../src/components/login/ProfileContent';
import Button from "react-bootstrap/Button";
import { ProfileData } from "../src/components/login/ProfileData";
import { callMsGraph } from "../src/components/login/graph";


//import {Button} from 'react-bootstrap';

import {Loginpage} from "./pages/entry/Loginpage";
import { Inscription } from "./components/incription/Inscription";

function App() {
  const defaultRoutes = [
    {
        is_link: '/tickets',
        is_label: 'ClientDashboard'
    },

    // {
    //     is_link: '/dashboard',
    //     is_label: 'AdminDashboard'
    // },

    {
        is_link: '/',
        is_label: 'Se deconnecter'
    },

    {
      is_link: '/close_tickets/:tid'
    }

]

const isdefaultRoutes = [
  
  
  {
      is_link: '/',
      is_label: 'Se deconnecter'
  },

]

const adminRoutes = [
  
  {
    is_link: '/inscription',
    is_label: 'Inscription'
},

  {
    is_link: '/dashboard',
    is_label: 'AdminDashboard'
},

  {
      is_link: '/',
      is_label: 'Se deconnecter'
  },

]
  const passLayout = (tabRoute = [], component = null) => <DefaultLayout tabRoute={tabRoute}>{component}</DefaultLayout>
  return (
    <BrowserRouter>
    <div className="App" style={{"background":"#BBBBDD"}}>
      <Routes>
          <Route path="/" element={passLayout(isdefaultRoutes, 
          <div>
            {/* <PageLayout>
             <AuthenticatedTemplate>
             <ProfileContent />  
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>

      </PageLayout> */}
            <center
              style={{"background":"white", "font-size": "1.5rem", "font-bold": "2rem", "padding-top": "20px"}}
            >
              Bienvenue sur la plateforme de demande de tickets pour les étudiants d'Epitech
            </center>
            <Loginpage/>
          </div>)}
        />
        <Route path="/dashboard" element={passLayout(adminRoutes,<Dashboard />)} />
        <Route path="/ticket" element={passLayout(defaultRoutes, <Tickets_form />)} />
        <Route path="/tickets" element={passLayout(defaultRoutes,<Ticket_lists />)} />
        <Route path="/:id" element={passLayout(defaultRoutes, <Close_tick />)} />
        <Route path="/inscription" element={passLayout(adminRoutes, <Inscription />)} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;