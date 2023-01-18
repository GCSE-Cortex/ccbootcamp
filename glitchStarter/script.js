/* Supporting JS file with vars, constants and functions that support multiple features on the WxCC Branded Demo website
  
   Created By:
     Rue Green
     ruegreen@cisco.com
     Cisco Systems, INC.
     January 2023
   
*/
 
//GlobalConstants

//This is your voice WxCC IVR phone number
const ivrPhoneNumber = "1-800-867-5309"

//This is the URL for starting a SMS conversations with WxConnect
const sendSMSWelcomeWebhook = "Your WxConnect Start SMS Webhook URL"

//This is the URL for requesting and callback, the WxConnect Script runs a HTTP POST to initial a call back request.
//const sendCallbackWebhook = "https://hooks-us.imiconnect.io/events/1FUEK2TG07"

//If you are going to inject JDS events from this web page you will need to provide you ds SAS key.  IT must have read/write access to your JDS Tenant.
//The Web page will inject an event each time you visit or refresh the page, see the onWindowLoad function and uncomment the function call to inject the "page visit" JDS event
//const dsSASKey = "This should be your SAS key"

//Put your user name, their email address and phone number here, hard coded for JDS events etc.
const firstName = "John"
const lastName = "Doe"    
const phone = "+18005551212"
const email = "jdoe@cisco.com"
const demoToolboxUserId = "Put in you demo tool box User Id"  //This is used to send emails via SMTP relay off our toolbox server.  See Send Email function below


// Get the modal for the contact us
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    function openEmailForm() {
      closeSMSForm();
      closeCallForm();
      closeJourneyForm();
      closeCallbackForm();
      document.getElementById("emailForm").style.display = "block";
    }

    function closeEmailForm() {
      document.getElementById("emailForm").style.display = "none";
    }
    function openSMSForm() {
      closeEmailForm();
      closeCallForm();
      closeJourneyForm();
      closeCallbackForm();
      document.getElementById("smsForm").style.display = "block";
    }

    function closeSMSForm() {
      document.getElementById("smsForm").style.display = "none";
    }
    function openCallForm() {
      closeSMSForm();
      closeEmailForm();
      closeJourneyForm();
      closeCallbackForm();
      document.getElementById("callForm").style.display = "block";
    }
      
    function closeCallForm() {
      document.getElementById("callForm").style.display = "none";
    }
    function openCallbackForm() {
      closeSMSForm();
      closeEmailForm();
      closeJourneyForm();
      closeCallForm();
      document.getElementById("callbackForm").style.display = "block";
    }
      
    function closeCallbackForm() {
      document.getElementById("callbackForm").style.display = "none";
    }
    function openJourneyForm() {
      closeEmailForm();
      closeCallForm();
      closeSMSForm();
      closeCallbackForm();
      document.getElementById("journeyForm").style.display = "block";
    }

    function closeJourneyForm() {
      document.getElementById("journeyForm").style.display = "none";
    }
    
    function createUUID() {
       return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
       });
    }

    // Format phone to +E164
    function formatPhoneNumber(phoneNumber) {
      const phoneNumberString = phoneNumber.toString();
      const match = phoneNumberString.match(/[1]?(\d{3})(\d{3})(\d{4})$/);
      return `+1(${match[1]})${match[2]}-${match[3]}`
    }

    // Gets the callback delay from the callback modal
    function getCallbackDelay() {
      const immediateCallback = document.getElementById('immediateCallback');
      const delayCallbackMinutes = document.getElementById('delayCallbackMinutes');

      if (immediateCallback.checked ) {
        return 0
      } else {
        return delayCallbackMinutes.value * 60
      }
    }

    function onLoadWindow(){
      //If you want to write a "Page Visit" event to JDS tape uncomment the next line, just make sure you ds read/write JDS SAS key is defined above as well
      //writeVisitPageEventJDS();
      
      //Lets stick some constants into the DOM so we can access them in the webpage using their ID
      //var simpleText = ivrPhoneNumber;
      //var finalSplitText = simpleText.split("_");
      //var splitText = finalSplitText[0];
      document.getElementById("ivrPhoneNumber").innerHTML=ivrPhoneNumber;
    }

    const sendCallback = async () => {
      const delay = getCallbackDelay();
      const response = await fetch(sendCallbackWebhook, {
          method: 'POST',
          body:JSON.stringify( 
          {
            name: document.getElementById('callbackName').value,
            number: document.getElementById('callbackNumber').value,
            department: document.getElementById('callbackDepartment').value,
            reason: document.getElementById('callbackReason').value,
            delay: delay,
          }), // string or object
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const myJson = await response.json(); //extract JSON from the http response
        console.log('Callback Status Code:', response.status);
        console.log('callback Response Data:', myJson);

        alert("We will call you at " + formatPhoneNumber(document.getElementById('callbackNumber').value));
        closeCallbackForm();
      }

    const writeVisitPageEventJDS = async () => {
      var num = Date.now();
      const response = await fetch("https://jds-us1.cjaas.cisco.com/events/v1/journey", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": "web",
          "identity": "+13033249089",
          "identitytype": "phone",
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":"Website",
            "firstName": firstName,
            "lastName": lastName,
            "phone":phone,
            "email": email,
            "url": "http://www.thedeepvbc.com",
            "channelType": "Page Visit"
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dsSASKey
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
    }
    const injectCustomJDS = async () => {
      var num = Date.now();
      const response = await fetch("https://jds-us1.cjaas.cisco.com/events/v1/journey", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": document.getElementById('source').value,
          "identity": document.getElementById('identity').value,
          "identitytype": document.getElementById('identitytype').value,
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":document.getElementById('origin').value,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "channelType": document.getElementById('channel').value
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dsSASKey
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
      alert("Injected Custom Event into JDS!");
    }
    const injectPasswordLockoutJDS = async () => {
      var num = Date.now();
      const response = await fetch("https://jds-us1.cjaas.cisco.com/events/v1/journey", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": "Website",
          "identity": "+13033249089",
          "identitytype": "phone",
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":"Website",
            "firstName": firstName,
            "lastName": lastName,
            "phone":phone,
            "email": email,
            "channelType": "Password Lockout"
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dsSASKey
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
      alert("Injected Password Lockout Event into JDS!");
    }
    
    const injectFormFilledJDS = async () => {
      var num = Date.now();
      const response = await fetch("https://jds-us1.cjaas.cisco.com/events/v1/journey", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": "Website",
          "identity": "+13033249089",
          "identitytype": "phone",
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":"Website",
            "firstName": firstName,
            "lastName": lastName,
            "phone":phone,
            "email": email,
            "channelType": "Form Filled"
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dsSASKey
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
      alert("Injected Form Filled Event into JDS!");
    }
    
    const injectSystemOutageJDS = async () => {
      var num = Date.now();
      const response = await fetch("https://jds-us1.cjaas.cisco.com/events/v1/journey", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "id": createUUID(),
          "previously": "12345",
          "specversion": "1.0",
          "type": "task:new",
          "source": "Operations",
          "identity": "+13033249089",
          "identitytype": "phone",
          "datacontenttype": "application/json",
          "data": {
            "taskId": createUUID(),
            "origin":"Operations",
            "firstName": firstName,
            "lastName": lastName,
            "phone":phone,
            "email": email,
            "channelType": "System Outage"
          }
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dsSASKey
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson);
      alert("Injected System Outage Event into JDS!");
    }
    
    const sendEmail = async () => {
      const response = await fetch("https://mm-brand.cxdemo.net/api/v1/email", {
        method: 'POST',
        body:JSON.stringify( 
        {
          "name": document.getElementById('name').value,
          "email": document.getElementById('from').value,
          "subject": document.getElementById('subject').value,
          "body": document.getElementById('body').value,
          "session": "custom",
          "datacenter": "webex",
          "userId": demoToolboxUserId,
          "demo": "webex-custom",
          "isUpstream": false,
          "isInstantDemo": true,
          "isSfdc": false
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      //console.log(myJson);
      alert("Thank you, your email has been sent!");
      closeEmailForm();
  }
    
  const sendSMS = async () => {
    const response = await fetch(sendSMSWelcomeWebhook, {
        method: 'POST',
        body:JSON.stringify( 
        {
          name: document.getElementById('name').value,
          number:document.getElementById('sms').value
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
    
      //console.log(myJson);
      alert("Check your mobile number for an SMS conversation " + document.getElementById('sms').value);
      closeSMSForm();
  }
  
  const includeHTML= () => {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("/contact.hml");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("/contact.html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
