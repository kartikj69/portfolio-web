import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WriteRecommendation from './components/WriteRecommendation';
import NotFound from './components/NotFound';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import Home from './components/Home';
import AddProject from './components/AddProject';
import AddBlogs from './components/AddBlogs';
import {Provider} from './context';
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import ScrollToTop from './components/ScrollToTop';
import Test from './components/Test';

function App() {
  return (
    <Provider>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/Write-a-recomm" component={WriteRecommendation} />
          <Route exact path="/all/projects" component={AllProjects} />
          <Route exact path='/add/project' component={AddProject}/>
          <Route exact path='/all/blogs' component={AllBlogs}/>
          <Route exact path="/add/blog" component={AddBlogs} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/test" component={Test}/>
          <Route component={NotFound}>
          <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
