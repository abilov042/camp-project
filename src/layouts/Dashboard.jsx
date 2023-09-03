import React from 'react'
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Grid} from "semantic-ui-react";
import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import { ToastContainer, toast } from 'react-toastify';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
        <ToastContainer />
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route path='/' Component={ProductList }/>
              <Route path='/products/:name' Component={ProductDetail }/>
              <Route path='/cart' Component={CartDetail}/> 
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
