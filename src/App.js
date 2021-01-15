import './App.css';

function App() {

  // get the url
// var url = window.location.href;
// //getting the access token from url
// var access_token = url.split("#")[1].split("=")[1].split("&")[0];
// // get the userid
// var userId = url.split("#")[1].split("=")[2].split("&")[0];
// console.log(access_token);
// console.log(userId);

  return (
    <div>
      <a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22C6PH&redirect_uri=https%3A%2F%2Flocalhost:3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">login to fitbit</a>
    </div>
  );
}

export default App;
