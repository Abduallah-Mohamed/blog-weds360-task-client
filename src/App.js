import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Edit from "./components/Edit/Edit";
import Create from "./components/Create/Create";
import Users from "./components/Users/Users";
import AllArticles from "./components/GetAllArticles/AllArticles";
import ParticlesBg from "particles-bg";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const callUsers = async () => {
      const res = await axios.get("/api/v1/users");
      // console.log(res.data.data);
      setUsers(await res.data.data);
    };
    const callArticles = async () => {
      const res = await axios.get("/api/v1/article");
      // console.log(await res.data);
      setArticle(await res.data);
    };
    callUsers();
    callArticles();
  }, []);

  const handleToken = (t) => {
    setToken(t);
  };
  console.log(article);
  return (
    <div className="App">
      <ParticlesBg type="color" bg={true} />
      <Router>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login token={handleToken} />
          </Route>
          <Route exact path="/">
            <Home token={token} />
          </Route>
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/users">
            <Users users={users} />
          </Route>
          <Route exact path="/allArticles">
            <AllArticles articles={article} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
