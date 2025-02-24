import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Form App</h1>
      <Link to="/form">Go to Form</Link><br />
      <Link to="/profile">Go to the list of registered users</Link>

    </div>
  );
};

export default Home;
