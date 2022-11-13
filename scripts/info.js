function info(){
    document.getElementById("petsalon-info").innerHTML=`
    <p>
        <h2>Welcome to</h2><h1>${petSalon.title}</h1><h2>located at<br> ${petSalon.address.street}<br> in beautiful ${petSalon.address.city}, ${petSalon.address.state} ${petSalon.address.zip}.</h2>
      </p>
      `;
}

function initInfo(){
        info();
}

window.onload=initInfo;