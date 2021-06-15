import React, {useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Category from '../Category/category'
import Product from '../Product/product'
import Pricing from '../Pricing/pricing'
import Customer from '../Customer/customer'
import Sales from '../Sales/sales'
import Supplier from '../Supplier/supplier'
import Staff from '../Staff/staff'
import Stock from '../Stock/stock'
import Report from '../Report/report'
import { useDispatch, useSelector } from 'react-redux'
import {logoutUser} from '../../ActionCreater/loginaction'
import axios from 'axios'
// import jwt from 'jsonwebtoken'
const Dashboard=()=> {
var time=new Date().toLocaleString()
const[currtime,updatetime]=useState(time)
const [file, setFile] =useState("");
const[previewSource,setPreviewSource]=useState('')
const[imageurl,setImageurl]=useState(false)
const handleTime=()=>{
var time=new Date().toLocaleString()
updatetime(time)
}
useEffect(
()=>{
setInterval(handleTime,1000)
axios.get("http://localhost:5000/api/userimage/fetchimage/"+state.login.userDetails.userid)
.then(res=>{
  if(res.data.result.length!==0)
  setImageurl(res.data.result[0].image_url)
})
}
)
const state=useSelector(state=>state)
const dispatch=useDispatch()
const logout=()=>{
  dispatch(logoutUser())
}

// Handles file upload event and updates state
function handleFile(event) {
  setFile(event.target.files[0]);
  previewFile(event.target.files[0])
}

const handleUpload=()=>{
  const fd=new FormData()
  fd.append('file',file)
  fd.append('userid',state.login.userDetails.userid)
  axios.post('http://localhost:5000/api/userimage/uploadimage',fd)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}
const previewFile=(file)=>{
const reader=new FileReader()
reader.readAsDataURL(file)
reader.onloadend=()=>{
  setPreviewSource(reader.result)
}
}
return (
        <Router>
        <div>
        <nav className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">Namaste SuperMarket</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     <h2 className="navbar-nav px-3 text-light">Welcome {state.login.userDetails.username}</h2>
     <ul className="navbar-nav px-3">
     <li className="nav-item text-light font-weight-bold">
       {currtime}
     </li>
     </ul>

     <ul className="navbar-nav px-3">
     <li className="nav-item text-light font-weight-bold">
     {imageurl?
          <img src={imageurl} alt="profileAvatar" className="rounded-circle border border-dark" width="45" height="45"/>
                  :
     "No Photo"
     }
     </li>
     </ul>



      <ul className="navbar-nav p-2">
        <li className="nav-item text-nowrap">
          <button className="btn btn-danger" onClick={logout}>Sign out</button>
        </li>
      </ul> 
      </nav>   
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
            {imageurl?"":<li className="nav-item"> 
                <form>
                    <label>Upload Profile Picture</label>
                    <div className="form-group">
                    <input type="file" name="file" onChange={handleFile} className="form-control"/>
                    </div>
                    <p>Filename: {file.name}</p>
                    <p>File type: {file.type}</p>
                    <p>File size: {file.size} bytes</p>
                </form>
                {previewSource && (
                  <img src={previewSource} alt="chosen" className="rounded-circle border border-dark mb-2" width="120" height="120"></img>
                )}<br/>
                <button type="button" className="btn btn-success btn-sm" onClick={handleUpload}>Upload</button>
              </li>}
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/staff'>
                  <span data-feather="file"></span>
                  Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/product'>
                  <span data-feather="shopping-cart"></span>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/category'>
                  <span data-feather="shopping-cart"></span>
                 Category
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/customer'>
                  <span data-feather="users"></span>
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/pricing'>
                  <span data-feather="users"></span>
                 Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/sales'>
                  <span data-feather="users"></span>
                 Sales
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/supplier'>
                  <span data-feather="users"></span>
                 Supplier
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/stock'>
                  <span data-feather="users"></span>
                 Stock
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/report'>
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </Link>
              </li>
            </ul>          
          </div>
        </nav>

  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/category">
      <div className="container">
        <Category/>
      </div>
      </Route>
      <Route path="/product">
      <div className="container">
        <Product />
      </div>
      </Route>
      <Route path="/sales">
      <div className="container">
        <Sales/>
      </div>
      </Route>
      <Route path="/staff">
      <div className="container">
        <Staff />
      </div>
      </Route>
      <Route path="/customer">
      <div className="container">
        <Customer/>
      </div>
      </Route>
      <Route path="/stock">
      <div className="container">
        <Stock/>
      </div>
      </Route>
      <Route path="/report">
      <div className="container">
        <Report />
      </div>
      </Route>
      <Route path="/pricing">
      <div className="container">
       <Pricing/>
      </div>
      </Route>
      <Route path="/supplier">
      <div className="container">
       <Supplier/>
       </div>
      </Route>
    </Switch>
    </div>
  </main>
      </div>
    </div>
</div>
</Router>
    )
}
export default Dashboard;