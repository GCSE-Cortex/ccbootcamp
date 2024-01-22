function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
async function writeVisitPageEventJDS() {
      var num = Date.now();
      //Lets get out Access Token from the Token Service
      const tokenResponse = await fetch(TOKEN_SERVICE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token-passphrase': TOKEN_SERVICE_PASSPHRASE,
          "x-token-userid": TOKEN_SERVICE_USERID
        }
      });
      const tokenJson = await tokenResponse.json(); //extract JSON from the http response
      console.log(tokenJson);
      var accessToken = tokenJson.token;
      
      const response = await fetch(JDS_POSTURL + JDS_PROJECTID, {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": "web",
          "identity": phone,
          "identitytype": "phone",
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":"Website",
            "firstName": firstName,
            "lastName": lastName,
            "phone":phone,
            "email": email,
            "url": window.location.href,
            "channelType": "Page Visit"
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
    }

document.onload(writeVisitPageEventJDS());