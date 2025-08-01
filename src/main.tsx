import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Route, Switch} from "wouter";
import HTTP451 from "./HTTP451.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Switch>
          <Route path={'/'}>
              <App />
          </Route>
          <Route path={'/451'}>
              <HTTP451 />
          </Route>
      </Switch>
  </StrictMode>,
)
