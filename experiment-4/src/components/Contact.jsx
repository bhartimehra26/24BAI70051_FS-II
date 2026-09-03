import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate=useNavigate();
  function handleLogin(){
    navigate("/");
  }
  return(
    <>
    <h1>Contact Page</h1>
    <form>
      <label>Name:</label>
      <input type="text"></input>
      <br></br>
      <label>Message: </label>
      <input type="text"></input>
    </form>
    <br></br>
    <button onClick={handleLogin}>Submit</button>
    </>

  ); 
}
export default Contact;
