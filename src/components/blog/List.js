import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Navbar from "../Navbar";
import MedItem from "./MedItem";
import { useSelector} from "react-redux";
import checkAuth from "../auth/checkAuth";


function List() {
  const [allPosts, setAllPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [SearchTerm, setSearchTerm] = useState("");
  
  var user = useSelector(store=>store.auth.user);

  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

 if (SearchTerm.trim() === "") {
     
      setFilteredPosts(allPosts);
    } else {
      
      var filteredItems = allPosts.filter((item) =>
        item.name.toLowerCase().includes(SearchTerm.toLowerCase())
      ); 
            setFilteredPosts(filteredItems);
    }
    
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`https://medicalstore.mashupstack.com/api/medicine/search?keyword=${SearchTerm}`, {
          headers: { 'Authorization': 'Bearer ' + user.token }
        });
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetch();
  },[SearchTerm,user.token]); 
  
  function fetchPosts() {
    axios
      .get('https://medicalstore.mashupstack.com/api/medicine',
      {
       headers:{'Authorization':'Bearer '+ user.token}
      })
      .then((response) => {
        setAllPosts(response.data);
        setFilteredPosts(response.data); 
      });

  }

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div>
      <Navbar />
      <div className="view">
      <br />
      <br />
      
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <label>Search Medicine: </label>
              <input
                type="text"
                value={SearchTerm}
                onChange={handleSearchInputChange}
              />{" "}
              &nbsp;
      
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
              
            </form>
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Blog</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/blog/posts/create" className="btn btn-info mb-2">
              Add Medicine
            </Link>
            {filteredPosts.length === 0 ? (
              <p>No matching posts found.</p>
            ) : (
              filteredPosts.map((post) => (
                <MedItem key={post.id} post={post} refresh={fetchPosts} />
              ))
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(List);
