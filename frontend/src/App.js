import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import SearchTeacher from "./Components/SearchTeacher";
import Profile from "./Components/Profile";
import TeacherDetail from "./Components/TeacherInfo";
import SearchRequest from "./Components/SearchRequest";
import NewRequest from "./Components/NewRequest";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/teachers" element={<SearchTeacher/>}/>
              <Route path="/requests" element={<SearchRequest/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/teachers/:id" element={<TeacherDetail/>}/>
              <Route path="/new_request" element={<NewRequest/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;