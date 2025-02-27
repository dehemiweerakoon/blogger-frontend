import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import ProtectedUtils from './utills/ProtectedUtils'
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/register/Register';
import BlogList from './pages/bloglist/BlogList';
import ViewBlog from './pages/viewBlog/ViewBlog';
import UpdateBlog from './pages/updateBlog/UpdateBlog';
import TabContent from './pages/Tabs/TabContent';
import { BlogEdit } from './pages/BlogEdit/BlogEdit';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectedUtils/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blog-list' element={<BlogList/>}/>
          <Route path='/blog/:id' element={<ViewBlog/>}/>
          <Route path='/blog/edit' element={<UpdateBlog/>}/>
          <Route path='/tabs' element={<TabContent/>}/>
          <Route path='/blog/update/:id' element={<BlogEdit/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
