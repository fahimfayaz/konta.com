import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import "./App.css";
import { useAuth0 } from '@auth0/auth0-react';
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import Product_upload from "./Products/Product_upload";
import Switch from 'react-bootstrap/esm/Switch';
import { Route, BrowserRouter } from 'react-router-dom';
import PostList from "./Products/Product_list"
import {Search} from './Search/Search';
import Userprofile from './User/userprofile';
import {Product} from "./Products/product"
import {Admin} from "./Admin/admin"
import {Admin_moderators} from "./Admin/admin_moderators"
import {Admin_product} from "./Admin/admin_product"
import {Admin_users} from "./Admin/admin_users"
import {Admin_permissions} from "./Admin/admin_permissions"


function App() {
  const { isAuthenticated, user } = useAuth0();
  const httpLink = new HttpLink({
    uri: "http://yelp-clone2.herokuapp.com/v1/graphql"
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <BrowserRouter>
    <ApolloProvider client={client}>
        
          <Switch>

              <Route exact path='/' component={LandingPage}/>
              <Route exact path={'/product_upload/:id'} component={Product_upload} />
              <Route exact path='/products' component={PostList} />
              <Route path={'/search/:products'} component={Search}/>
              <Route path={'/user/:id'} component={Userprofile}/>
              <Route path={'/product/:Product_id'} component={Product}/>
              <Route path='/admin' component={Admin}/>
              <Route path='/admin_moderators' component={Admin_moderators}/>
              <Route path='/admin_product' component={Admin_product}/>
              <Route path='/admin_users' component={Admin_users}/>
              <Route path='/admin_permissions' component={Admin_permissions}/>
              
          </Switch>
           
    </ApolloProvider>
    </BrowserRouter>
   
  );
}

export default App;
