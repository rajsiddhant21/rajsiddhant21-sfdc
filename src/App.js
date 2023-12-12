import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';


const tokenurl = `https://login.salesforce.com/services/oauth2/token?username=sid1707raj@empathetic-panda-tmx0kp.com&password=Needasalesforcejob!@%2312356EFK3AsBums8qIWv6IPhWHcR&client_id=3MVG9n_HvETGhr3CqcsKNtCUjlqTSFA6GOMELXkxhn6eawqks641sqCpWa70nX2gGZKAFWqLu2AlUquo7PTa3&client_secret=507B93FF3411DF4351C9C722159FFF1E6D13F370675A4E766206A4C3D160DDAF&grant_type=password`;

function App() {

  useEffect(function () {
    async function token() {
      console.log('calling fetch')
      fetch(tokenurl, {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

    }

    token();
  })

  useEffect(function () {
    async function getCv() {

      fetch(`
      https://empathetic-panda-tmx0kp-dev-ed.trailblaze.my.salesforce.com/services/apexrest/resume/user?id=siddhantraj
      `, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer 00D2w00000GWHJ2!AQYAQKvCBCkyZ6hP07HCLfdHmx_dCJ1_X5VozGkKBPXbKd25CortaCfcqEtms1GqmzBjHKhf7Uw9Wv.tUVEt0yo9cHJq_mmq'
        }
      }).then((res) => {
        console.log(res)
        return res.json();
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })

    }

    getCv();

  })

  return (
    <div>
      Data Incoming
    </div>
  );
}

export default App;
