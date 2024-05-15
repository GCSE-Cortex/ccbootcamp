//To avoid a race condition dealing with loading bootstrap.js
(async () => {

	// dynamically load Bootstrap

  await import('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js');
  let module = await import('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css', { assert: { type: 'css' }});
  document.adoptedStyleSheets.push(module.default); // append imported CSSStyleSheet 
  
	console.log('Bootstrap loaded: ' + !!window.bootstrap);
  
  //Button to open Offcanvas menu
    let btn = document.createElement("button");
    btn.id="contactButton";
    btn.setAttribute("style", `top:35%; right:0; position:fixed; transform:rotate(-90deg); transform-origin:100% 100%; color:#ffffff; background-color:#0b63ac; border-color:@0b63ac;`);
    btn.textContent = "Talk To an Expert";
    btn.classList.add("btn","btn-primary");
    btn.type="button";
    btn.dataset.bsToggle="offcanvas";
    btn.dataset.bsTarget="#contactMenu";
    document.body.append(btn);
 
  //JS code to build all the HTML code for the OffCanvas menu so we can control it via booleans
    let containerOffcanvas = document.createElement("div");
    containerOffcanvas.classList.add("offcanvas");
    containerOffcanvas.classList.add("offcanvas-end");
    containerOffcanvas.classList.add("rounded-start");
    containerOffcanvas.tabindex="-1";
    containerOffcanvas.id="contactMenu";
    document.body.append(containerOffcanvas);
  
    let bodyOffcanvas = document.createElement("div");
  	bodyOffcanvas.classList.add("offcanvas-body");
    containerOffcanvas.appendChild(bodyOffcanvas);
 
    let listGroupOffcanvas = document.createElement("div");
  	listGroupOffcanvas.classList.add("list-group");
    listGroupOffcanvas.classList.add("list-group-flush");
    bodyOffcanvas.appendChild(listGroupOffcanvas);
  
    let listGroupItemOffcanvas = document.createElement("div");
  	listGroupItemOffcanvas.classList.add("list-group-item");
    listGroupOffcanvas.appendChild(listGroupItemOffcanvas);
  
    let listGroupItemFlexOffcanvas = document.createElement("div");
  	listGroupItemFlexOffcanvas.classList.add("d-flex");
    listGroupItemFlexOffcanvas.classList.add("w-100");
    listGroupItemFlexOffcanvas.classList.add("justify-content-between");
    listGroupItemOffcanvas.appendChild(listGroupItemFlexOffcanvas);
 
    let listGroupItemFlexContentOffcanvas = document.createElement("h1");
  	listGroupItemFlexContentOffcanvas.classList.add("display-6");
    listGroupItemFlexContentOffcanvas.textContent="Need help?";
    listGroupItemFlexOffcanvas.appendChild(listGroupItemFlexContentOffcanvas);
    //Close Button for OffCanvas menu
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("btn-close");
    closeBtn.classList.add("mt-3");
    closeBtn.type="button";
    closeBtn.dataset.bsDismiss="offcanvas";
    listGroupItemFlexOffcanvas.appendChild(closeBtn);

    listGroupItemOffcanvas = document.createElement("div");
  	listGroupItemOffcanvas.classList.add("list-group-item");
    listGroupOffcanvas.appendChild(listGroupItemOffcanvas);
  
    listGroupItemFlexOffcanvas = document.createElement("div");
  	listGroupItemFlexOffcanvas.classList.add("d-flex");
    listGroupItemFlexOffcanvas.classList.add("w-100");
    listGroupItemFlexOffcanvas.classList.add("justify-content-between");
    listGroupItemOffcanvas.appendChild(listGroupItemFlexOffcanvas);
 
   //Add Agent image
    
    listGroupItemFlexContentOffcanvas = document.createElement("img");
  	listGroupItemFlexContentOffcanvas.classList.add("me-4");
    listGroupItemFlexContentOffcanvas.id="agent";
    listGroupItemFlexContentOffcanvas.width="112";
    listGroupItemFlexContentOffcanvas.height="112";
    listGroupItemFlexOffcanvas.appendChild(listGroupItemFlexContentOffcanvas);
    
  //Expert Advisor text
    let listGroupItemFlexContentParagraphOffcanvas = document.createElement("div");
  	listGroupItemFlexContentParagraphOffcanvas.classList.add("vstsack");
    listGroupItemFlexContentParagraphOffcanvas.classList.add("align-self-center");
    listGroupItemFlexContentParagraphOffcanvas.classList.add("fs-4");
    listGroupItemFlexContentParagraphOffcanvas.classList.add("lh-1");
    listGroupItemFlexOffcanvas.appendChild(listGroupItemFlexContentParagraphOffcanvas);
    let expertAdvisorParagraph = document.createElement("p");
    expertAdvisorParagraph.textContent="Expert Advisor";
    listGroupItemFlexContentParagraphOffcanvas.appendChild(expertAdvisorParagraph);
    expertAdvisorParagraph = document.createElement("p");
    expertAdvisorParagraph.textContent="We are here to help!";
    listGroupItemFlexContentParagraphOffcanvas.appendChild(expertAdvisorParagraph);
    
  if(showCallUs) {
      //Call Us Link for Call Us Modal launch
      let listGroupItemFlexContentCallUsOffcanvas = document.createElement("href");
      listGroupItemFlexContentCallUsOffcanvas.href ="#";
      listGroupItemFlexContentCallUsOffcanvas.id ="callLink";
      listGroupItemFlexContentCallUsOffcanvas.bsToggle="modal";
      listGroupItemFlexContentCallUsOffcanvas.dataset.bsTarget="#callModal";
      listGroupItemFlexContentCallUsOffcanvas.classList.add("list-group-item");
      listGroupItemFlexContentCallUsOffcanvas.classList.add("list-group-item-action");
      listGroupItemOffcanvas.appendChild(listGroupItemFlexContentCallUsOffcanvas);
      let callUsDiv = document.createElement("div");
      callUsDiv.classList.add("d-flex");
      callUsDiv.classList.add("w-100");
      callUsDiv.classList.add("justify-content-between");
      listGroupItemFlexContentCallUsOffcanvas.appendChild(callUsDiv);
      let callUsH5 = document.createElement("h5");
      callUsH5.classList.add("mb-1");
      callUsH5.textContent="Call Us - ";
      callUsDiv.appendChild(callUsH5);
      let callUsH5Span = document.createElement("span");
      callUsH5Span.classList.add("h6");
      callUsH5Span.classList.add("text-primary");
      callUsH5Span.textContent="8 min wait time";
      callUsH5.appendChild(callUsH5Span);
      let callUsParagraph = document.createElement("p");
      callUsParagraph.textContent="Talk to an expert now";
      listGroupItemFlexContentCallUsOffcanvas.appendChild(callUsParagraph);
    }
   //Lets build the Callback Channel Link
  if(showCallBack) 
    createOffCanvasChannelLink(listGroupItemOffcanvas,
                               "callbackLink","Callback - ",
                               "8 min wait time",
                               "Don't wait in queue, we will call you");
   
   //Lets build the Email Channel Link
  if(showEmail) 
    createOffCanvasChannelLink(listGroupItemOffcanvas,
                               "emailLink","Email Us - ",
                               "12-24 hour wait",
                               "An expert will respond to your email");
  //Lets build the SMS Channel Link
  if(showSMS) 
    createOffCanvasChannelLink(listGroupItemOffcanvas,
                               "smsLink",
                               "SMS an Expert - ",
                               "2 minute wait time",
                               "Text message with an expert");
   //Lets build the WhatsApp Channel Link
  if(showWhatsApp) 
    createOffCanvasChannelLink(listGroupItemOffcanvas,
                               "whatsappLink",
                               "WhatsApp - ",
                               "2 minute wait time",
                               "WhatsApp with an expert");
  
    //Lets build Call us Modal
    let callUsContainerDiv = document.createElement("div");
    callUsContainerDiv.innerHTML = createCallModalContent();
    document.body.append(callUsContainerDiv);
    // Set telephone number in Call Us Modal
 
    const telephone = document.getElementById('telephone');
    telephone.href = "tel:+" + WXCC_TELEPHONE_NUMBER;
    telephone.text = formatPhoneNumber(WXCC_TELEPHONE_NUMBER);
 
    //Lets build Callback Modal
    let callBackContainerDiv = document.createElement("div");
    callBackContainerDiv.innerHTML = createCallBackModalContent();
    document.body.append(callBackContainerDiv);
  
    //Lets build Email Modal
    let emailContainerDiv = document.createElement("div");
    emailContainerDiv.innerHTML = createEmailModalContent();
    document.body.append(emailContainerDiv);
  
    //Lets build SMS Modal
    let smsContainerDiv = document.createElement("div");
    smsContainerDiv.innerHTML = createSMSModalContent();
    document.body.append(smsContainerDiv);
  
    //Lets build WhatsApp Modal
    let whatsAppContainerDiv = document.createElement("div");
    whatsAppContainerDiv.innerHTML = createWhatsAppModalContent();
    document.body.append(whatsAppContainerDiv);
  
    //Lets build Success Modal
    let successContainerDiv = document.createElement("div");
    successContainerDiv.innerHTML = createSuccessModalContent();
    document.body.append(successContainerDiv);
    // Set Success  Image link
    document.getElementById("successImg").src = SUCCESS_IMAGE;
  
    //Lets build Failure Modal
    let failureContainerDiv = document.createElement("div");
    failureContainerDiv.innerHTML = createFailureModalContent();
    document.body.append(failureContainerDiv);
  // Set Success  Image link
    document.getElementById("failureImg").src = FAILURE_IMAGE;
  
  	//Lets build the IMI Widget and place into the DOM
    let IMIWidgetDiv = document.createElement("div");
    IMIWidgetDiv.id = "divicw";
    IMIWidgetDiv.setAttribute("data-bind", MyChatWidgetGUID);
    IMIWidgetDiv.setAttribute("data-org", "");
    document.body.append(IMIWidgetDiv);
    let IMIWidgetScript = document.createElement("script");
    IMIWidgetScript.innerHTML = createIMIWidgetContent();
    document.body.append(IMIWidgetScript);
  
  
  //Lets fill in some globals shown on the Offcanvas
    //Some of these are no longer needed since we are not 
    //using them in an html file
  
  	// Set title & image for the customer name
  	//document.title = CUSTOMER_NAME;
    
    /*
      var link = document.querySelector("link[rel*='icon']");
      link.href = CUSTOMER_ICON;
      document.getElementById("navbarImage").src = MENU_ICON;
    */
 
    // Set Agent Image link
    document.getElementById("agent").src = AGENT_IMAGE;
    
    // Set Whats App QRCode
    document.getElementById("whatsappQR").src = WHATSAPP_IMAGE;
 
  //Initialize the boostrap objects for usage later
   const bsContactMenu = new bootstrap.Offcanvas('#contactMenu');
   const bsCallModal = new bootstrap.Modal('#callModal');
   const bsCallbackModal = new bootstrap.Modal('#callbackModal');
   const bsEmailModal = new bootstrap.Modal('#emailModal');
   const bsSmsModal = new bootstrap.Modal('#smsModal');
   const bsWhatsappModal = new bootstrap.Modal('#whatsappModal');
   const bsSuccessModal = new bootstrap.Modal('#successModal');
   const bsFailureModal = new bootstrap.Modal('#failureModal');
   //const bsloginModal = new bootstrap.Modal('#loginModal');

  // Get reference to HTML elements
  const successMessage = document.getElementById('successMessage');
  const smsName = document.getElementById('smsName');
  const smsNumber = document.getElementById('smsNumber');
  const smsLanguage = document.getElementById('smsLanguage');

  const currentdatetime = new Date(); //Date of browser
  const TimezoneOffset = currentdatetime.getTimezoneOffset();

  const callbackName = document.getElementById('callbackName');
  const callbackNumber = document.getElementById('callbackNumber');
  const callbackDepartment = document.getElementById('callbackDepartment');
  const callbackReason = document.getElementById('callbackReason');
  const emailName = document.getElementById('emailName');
  const emailAddress = document.getElementById('emailAddress');
  const emailSubject = document.getElementById('emailSubject');
  const emailMessage = document.getElementById('emailMessage');
  const callbackForm = document.getElementById('callbackForm');
  const emailForm = document.getElementById('emailForm');
  const smsForm = document.getElementById('smsForm');

  //Form Login
  const emailLogin = document.getElementById('emailLogin');
  const passwordLogin = document.getElementById('passwordLogin');

  // Get reference to IMI Web Chat div
 const imiWebChat = document.getElementById('divicw');

// Toggles a bootstrap component
function bsToggle(bsComponent) { 
   bsComponent.toggle();
}

  if(showCallUs) {
    // Add Event Listeners for Contact Menu Items
    document.getElementById('callLink').addEventListener('click', function () {  
        bsToggle(bsCallModal);
        bsToggle(bsContactMenu);
    });
  }
  if(showCallBack) {
    document.getElementById('callbackLink').addEventListener('click', function () {
        bsToggle(bsCallbackModal);
        bsToggle(bsContactMenu);
    });
  }
  if(showEmail) {
    document.getElementById('emailLink').addEventListener('click', function () {
        bsToggle(bsEmailModal);
        bsToggle(bsContactMenu);
    });
  }
  if(showSMS) {
    document.getElementById('smsLink').addEventListener('click', function () {
        bsToggle(bsSmsModal);
        bsToggle(bsContactMenu);
    });
  }
  if(showWhatsApp) {
    document.getElementById('whatsappLink').addEventListener('click', function () {
        bsToggle(bsWhatsappModal);
        bsToggle(bsContactMenu);

        if(UserIdentified == true){
            updateJDS(UserIdentity,"whatsapp-request")
        } else {
            updateJDS(UserIdentity,"whatsapp-request")
        }
    });
  }

  // Hide imi when the Contact Menu is open
  document.getElementById('contactMenu').addEventListener('shown.bs.offcanvas', () => {
      imiWebChat.hidden = true;
  });

  // Show imi when the Contact Menu is closed
  document.getElementById('contactMenu').addEventListener('hidden.bs.offcanvas', () => {
      imiWebChat.hidden = false;
  });
 
  
  // Add event listener for Callback Modal Submit button
document.getElementById('sendCallbackBtn').addEventListener('click', () => {
    if (callbackForm.checkValidity()){
      callbackForm.classList.remove('was-validated');
      bsToggle(bsCallbackModal);
      
      if(callbackNumber.value===""){
          updateJDS(UserIdentity,"send callback")
      }else{
          //Set to True after we return from the updateJDS
          UserIdentity = 1+callbackNumber.value;
          updateJDS(UserIdentity,"send callback")
          UserIdentified = true;
      }	
      sendCallback();
    } else callbackForm.classList.add('was-validated');
  });
  
  
  // Add event listener for Email Modal Submit button
  document.getElementById('sendEmailBtn').addEventListener('click', () => {
    if (emailForm.checkValidity()){
      emailForm.classList.remove('was-validated');
      bsToggle(bsEmailModal);
  
      if(emailAddress.value===""){
          updateJDS(UserIdentity,"send sms")
      }else{
          //Set to True after we return from the updateJDS
          UserIdentity = emailAddress.value;
          updateJDS(UserIdentity,"send email")
          UserIdentified = true;
      }	
      sendEmail();
    } else emailForm.classList.add('was-validated');
  });
  
  // Add event listener for SMS Modal Submit button
  document.getElementById('sendSmsBtn').addEventListener('click', () => {
    if (smsForm.checkValidity()){
      smsForm.classList.remove('was-validated');
      bsToggle(bsSmsModal);
  
      if(smsNumber.value===""){
          updateJDS(UserIdentity,"send sms")
      }else{
          //Set to True after we return from the updateJDS
          UserIdentity = 1+smsNumber.value;
          updateJDS(UserIdentity,"send sms")
          UserIdentified = true;
      }	
      sendSMS();
    } else smsForm.classList.add('was-validated');
  });
 /* 
  // Add event listener for SMS Modal Submit button
  document.getElementById('formLogin').addEventListener('click', () => {
      //alert(emailLogin.value);
      bsToggle(bsloginModal);
      if(emailLogin.value===""){
          updateJDS(UserIdentity,"login-successful")
      }else{
          //Set to True after we return from the updateJDS
          UserIdentity = emailLogin.value;
          updateJDS(UserIdentity,"login-successful");
          UserIdentified = true;
      }
      //compare database on login, set unsuccessful, etc.
  });  
*/
  
//-----------------------------------------//
// Dont change anything below this line
//-----------------------------------------//
  
function createOffCanvasChannelLink(parentElement,link_s,channel_s,wait_s,help_s) {
	let listGroupItemFlexContentOffcanvas = document.createElement("href");
    listGroupItemFlexContentOffcanvas.href ="#";
    listGroupItemFlexContentOffcanvas.id =link_s;
    listGroupItemFlexContentOffcanvas.classList.add("list-group-item");
    listGroupItemFlexContentOffcanvas.classList.add("list-group-item-action");
    parentElement.appendChild(listGroupItemFlexContentOffcanvas);
    let Div = document.createElement("div");
    Div.classList.add("d-flex");
    Div.classList.add("w-100");
    Div.classList.add("justify-content-between");
    listGroupItemFlexContentOffcanvas.appendChild(Div);
    let H5 = document.createElement("h5");
    H5.classList.add("mb-1");
    H5.textContent=channel_s;
    Div.appendChild(H5);
    let H5Span = document.createElement("span");
    H5Span.classList.add("h6");
    H5Span.classList.add("text-primary");
    H5Span.textContent=wait_s;
    H5.appendChild(H5Span);
    let Paragraph = document.createElement("p");
    Paragraph.textContent=help_s;
    listGroupItemFlexContentOffcanvas.appendChild(Paragraph);
}
  
async function getToken() {
    try {
        const response = await fetch(TOKEN_SERVICE_URL, {
            headers: {
                'Content-Type': 'application/json',
                "x-token-passphrase": TOKEN_SERVICE_PASSPHRASE
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const myJson = await response.json(); // extract JSON from the http response
        const JDS_Token = myJson.token;
        return JDS_Token; // Return the token
    } catch (err) {
        alert(err);
    }
}


// Format phone to +E164
function formatPhoneNumber(phoneNumber) {
  const phoneNumberString = phoneNumber.toString();
  
  //const match = phoneNumberString.match(/[1]?(\d{3})(\d{3})(\d{4})$/);
  const match = phoneNumberString.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
  //return `+49(${match[1]})${match[2]}-${match[3]}`
  return '+' + match
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


// Improved version of fetch() with a configurable timeout
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 6000 } = options;  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {...options, signal: controller.signal});
  clearTimeout(id);
  return response;
}


// Send callback to imi
async function sendCallback() {
  try {
    const delay = getCallbackDelay();
    
    const response = await fetchWithTimeout(IMI_CALLBACK_WEBHOOK, {
      timeout: 6000,
      method: 'POST',
      body: JSON.stringify({
        name: callbackName.value,
        number: callbackNumber.value,
        department: callbackDepartment.value,
        reason: callbackReason.value,
        delay: delay,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log('Callback Status Code:', response.status);
    console.log('callback Response Data:', data);
    
    const number = callbackNumber.value;
    callbackName.value = "";
    callbackNumber.value = "";
    callbackDepartment.value = "";
    callbackReason.value = "";

    if (data.response[0].code == 1002) {
      successMessage.innerHTML = `We will call you at ${formatPhoneNumber(number)} shortly.`;
      bsToggle(bsSuccessModal);
    } else {
      bsToggle(bsFailureModal);
    }
  } catch (error) {
    bsToggle(bsFailureModal);
    console.log('Callback something went wrong!');
    console.log('Callback Error:', error);
  }
}


// Send Email to dCloud
async function sendEmail() {
  try {
    const response = await fetchWithTimeout('https://mm-brand.cxdemo.net/api/v1/email', {
      timeout: 6000, // six seconds
      method: 'POST',
      body: JSON.stringify({
        "name": emailName.value,
        "email": emailAddress.value,
        "subject": emailSubject.value,
        "body": emailMessage.value,
        "session": "custom",
        "datacenter": "webex",
        "userId": demoToolboxUserId,
        "demo": "webex-custom",
        "isUpstream": false,
        "isInstantDemo": true,
        "isSfdc": false
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log('Email Status Code:', response.status);
    console.log('Email Response Data:', data);
    emailName.value = "";
    emailAddress.value = "";
    emailSubject.value = "";
    emailMessage.value = "";
    if (response.status == 202) {
      successMessage.innerHTML = `Thank you for your email.  We will respond shortly.`;
      bsToggle(bsSuccessModal);
    } else {
      bsToggle(bsFailureModal);
    }
  } catch (error) {
    bsToggle(bsFailureModal);
	console.log('Email something went wrong!');
    console.log('Email Error:', error);
  }
}

async function updateJDS(identity,action) { 

	const JDS_Token = await getToken();
	console.log(JDS_Token);
	// Get browser information
	var browserInfo = {
	  appName: navigator.appName,
	  appVersion: navigator.appVersion,
	  userAgent: navigator.userAgent,
	  platform: navigator.platform
	};
	// Get current URL
	var currentURL = window.location.href;
	if(identity==="unknown"){
		try{
            var tempURL = JDS_POSTURL + JDS_PROJECTID;
            response = await fetch(tempURL, {	
				method: "POST",
				body: JSON.stringify({
					  "id": GlobalGUID,
					  "specversion": "1.0",
					  "type": "WebLogin",
					  "source": currentURL,
					  "identity": GlobalGUID,
					  "identitytype": "temporaryId",
					  "datacontenttype": "application/json",
					  "data": {
						"taskId": GlobalGUID,
						"appName": browserInfo.appName,
						"appVersion": browserInfo.appVersion,
						"userAgent": browserInfo.userAgent,
						"platform": browserInfo.platform,
						"origin": action,
						"url": currentURL,
						"channelType": "RandomWeb",
						"channelBreakout": "web"
					  }
				}), // string or object
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + JDS_Token
				},
			});
		} catch(err) {
			alert(err)
		}
	} else {
		const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
		var identitytype;

		if (emailRegex.test(identity)) {
		  identitytype = "email";
		} else {
		  identitytype = "phone";
		}
		
		//if they have already been identified then we don't need to link their back records
		var previousidentity = "none";
		if(UserIdentified == true){
			previousidentity = "none";
		} else {
			previousidentity = GlobalGUID;
		}

		try{
            var tempURL = JDS_POSTURL + JDS_PROJECTID;
			response = await fetch(tempURL, {	
				method: "POST",
				body: JSON.stringify({
					  "id": GlobalGUID,
					  "specversion": "1.0",
					  "type": "WebLogin",
					  "source": currentURL,
					  "previousidentity": previousidentity,
					  "identity": identity,
					  "identitytype": identitytype,
					  "datacontenttype": "application/json",
					  "data": {
						"taskId": GlobalGUID,
						"identitytype": identity,
						"appName": browserInfo.appName,
						"appVersion": browserInfo.appVersion,
						"userAgent": browserInfo.userAgent,
						"platform": browserInfo.platform,
						"origin": action,
						"url": currentURL,
						"channelType": "IdentifiedWeb",
						"channelBreakout": "web"
					  }
				}), // string or object
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer " + JDS_Token
				},
			});
		} catch(err) {
			alert(err)
		}
	}
	myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    console.log(GlobalGUID);
  	console.log(currentURL);
    console.log(identity);
    console.log(previousidentity);
    console.log(identitytype);

}

// Send SMS to imi
async function sendSMS() {
  try {
    const response = await fetchWithTimeout(IMI_SMS_WEBHOOK, {
      timeout: 6000,
      method: 'POST',
      body: JSON.stringify({
        name: smsName.value,
        number: smsNumber.value,
        balance: balance,
        link: myLink,
        WelcomeMessage:welcomeMessage
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log('SMS Status Code:', response.status);
    console.log('SMS Response Data:', data);
    
    const number = smsNumber.value;
    smsName.value = "";
    smsNumber.value = "";

    if (data.response[0].code == 1002) {
      successMessage.innerHTML = `We sent a SMS to your ${formatPhoneNumber(number)} number.`;
      bsToggle(bsSuccessModal);
    } else {
      bsToggle(bsFailureModal);
    }
  } catch (error) {
    bsToggle(bsFailureModal);
    console.log('SMS something went wrong!');
    console.log('SMS Error:', error);
  }
}
  
})();


function createCallModalContent(){
  return `<!-- Call US Modal -->
  <div id="callModal" class="modal fade"  tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <div class="container">
            <div class="row">
              <h5 class="col-auto me-auto modal-title">Give us a Call</h5>
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <p class="col text-primary fw-light mb-0">Less than 8 minute wait time</p>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <a id="telephone" class="btn btn-outline-primary"></a>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>`;
}

function createCallBackModalContent(){
  return ` <!-- Callback Modal -->
  <div class="modal fade" id="callbackModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <div class="container">
            <div class="row">
              <h5 class="col-auto me-auto modal-title">Receive a callback</h5>
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <p class="col text-primary fw-light mb-0">Less than 8 minute wait time</p>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <form id="callbackForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <div class="form-text mb-2">Dont waste time waiting in queue, our experts will call you</div>
              <label for="callbackName" class="form-label">Name</label>
              <input type="text" class="form-control" id="callbackName" placeholder="Enter your full name" required/>
            </div>
            <div class="mb-3">
              <label for="callbackNumber" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="callbackNumber" pattern="[0-9]{12}" placeholder="Enter your callback number" required />
              <div class="invalid-feedback">Enter a 12-digit mobile number</div>
            </div>
            <div class="mb-3">
              <label for="callbackDepartment" class="form-label">Callback Reason</label>
              <select class="form-select" id="callbackDepartment" required>
                <option value="">--Please choose an option--</option>
                <option value="Sales">Sales Questions</option>
                <option value="Billing">Billing Issues</option>
                <option value="Appointment">Appointments</option>
                <option value="Tech Support">Technical Support</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="callbackReason" class="form-label">Message</label>
              <textarea class="form-control" id="callbackReason" rows="2" required></textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="immediateCallback" name="callbackRaido" checked>
                <label class="form-check-label" for="immediateCallback">Immediate Callback</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="delayCallback" name="callbackRaido">
                <label class="form-check-label" for="delayCallback">Delay Callback for</label>
                <input class="ms-1" id="delayCallbackMinutes" type="number" placeholder="5" size="8" min="5" max="60" step="5">
                <label class="form-check-label" for="delayCallbackMinutes">minutes</label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="sendCallbackBtn" type="button" class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>`;
}

function createEmailModalContent(){
  return `<div class="modal fade" id="emailModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <div class="container">
            <div class="row">
              <h5 class="col-auto me-auto modal-title">An expert will respond to your email</h5>
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <p class="col text-primary fw-light mb-0">12-24 hour wait time</p>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <form id="emailForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <div class="form-text mb-2">Send us your question and one of our experts will email you back.</div>
              <label for="emailName" class="form-label">Name</label>
              <input type="text" class="form-control" id="emailName" placeholder="Enter your full name" required  />
            </div>
            <div class="mb-3">
              <label for="emailAddress" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="emailAddress" placeholder="Enter your email address" required />
            </div>
            <div class="mb-3">
              <label for="emailSubject" class="form-label">Subject</label>
              <input type="text" class="form-control" id="emailSubject" required />
            </div>
            <div class="mb-3">
              <label for="emailMessage" class="form-label">Message</label>
              <textarea class="form-control" id="emailMessage" rows="3" required ></textarea>
            </div>
          </form>  
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="sendEmailBtn" type="button" class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>`;
}

function createSMSModalContent(){
  return `<!-- SMS Modal -->
  <div class="modal fade" id="smsModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <div class="container">
            <div class="row">
              <h5 class="col-auto me-auto modal-title">Text message with an expert</h5>
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <p class="col text-primary fw-light mb-0">Less than 2 minute wait time</p>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <form id="smsForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="smsName" class="form-label">Name</label>
              <input type="text" class="form-control" id="smsName" placeholder="Enter your full name" required />
            </div>
            <div class="mb-3">
              <label for="smsNumber" class="form-label">Mobile Number</label>
              <input type="tel" class="form-control" id="smsNumber" pattern="[0-9]{12}" placeholder="Enter your mobile number" required />
              <div class="invalid-feedback">Enter a 12-digit mobile number</div>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="sendSmsBtn" type="button" class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>`;
}
function createWhatsAppModalContent(){
  return `<!-- WhatsApp Modal -->
  <div class="modal fade" id="whatsappModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-light">
          <div class="container">
            <div class="row">
              <h5 class="col-auto me-auto modal-title">WhatsApp message with an expert</h5>
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <p class="col text-primary fw-light mb-0">Less than 2 minute wait time</p>
            </div>
          </div>
        </div>
        <div class="modal-body text-center">
          <img id="whatsappQR" width="300" height="300" />
        </div>
        <div class="modal-footer bg-light">
          <p class="me-auto"> Scan this QR Code with your mobile phone</p>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
}

  function createSuccessModalContent(){
  return `<!--  Success Modal -->
  <div class="modal fade" id="successModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-success">
          <div class="container">
            <div class="row">
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <img id="successImg" width="100" height="100">
            </div>
          </div>
        </div>
        <div class="modal-body">
          <p class="text-center fs-1 text-secondary">Success!</p>
          <p id="successMessage" class="text-center fs-5 text-secondary"></p>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>`;
  }

function createFailureModalContent(){
  return `<!--  Failure Modal -->
  <div class="modal fade" id="failureModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <div class="container">
            <div class="row">
              <button type="button" class="col-auto btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="row">
              <img id="failureImg" width="100" height="100">
            </div>
          </div>
        </div>
        <div class="modal-body">
          <p class="text-center fs-1 text-secondary">Ooops!</p>
          <p class="text-center fs-5 text-secondary">Something went wrong. Please go back and try again.</p>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>`;
}

function createIMIWidgetContent(){
  return `var i={t:function(t){var e="https://attachuk.imi.chat/widget/js/imichatinit.js";try{var o=new XMLHttpRequest;o.onreadystatechange=function(){if(this.readyState==4){var t=document.getElementById("divicw");if(this.status==0){i.o(t);return}var e=document.createElement("script");e.innerHTML=this.responseText;t.parentNode.insertBefore(e,t.nextSibling)}};o.open("GET",e,true);o.send()}catch(s){console.error(s)}},o:function(t){t.insertAdjacentHTML("afterend",'<iframe id="tls_al_frm" frameborder="0" style="overflow: hidden;height: 208px;width: 394px;position: fixed;display: block;right: 48px;bottom: 12px;z-index: 99999; display:none;"></iframe>');var e=document.getElementById("tls_al_frm");var o=e.contentWindow||(e.contentDocument.document||e.contentDocument);o.document.open();o.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Untitled Document</title><style>body{font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;color: #99a0b0;font-size: 14px;}.popover__content{background-color: #fbfbfe; padding: 1.5rem; border-radius: 5px; width: 300px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);position: relative;}.popover__message{font-weight: 600;color:#56627c;font-size: 16px;}.pull-left{float:left;}.clearfix{clear: both;}.hdr-txt{width: 218px; margin-top: 3px;}.para-txt a{text-decoration: none;color: #005cde;}.close-btn{position: absolute;right:15px;top:15px;}.close-btn a{text-decoration: none;font-weight: 400; color: #56627c; font-size: 16px;}</style></head><body><div class="popover__content"><div class="close-btn"><a href="#" onclick="closeTLSAlert();">X</a></div><div class="popover__message"><div class="pull-left hdr-txt">This browser version is not supported on LiveChat.</div></div><div class="clearfix"></div><p class="para-txt">Please update your browser to the latest version and re-open the website to access the widget. </p></div><script>function closeTLSAlert(){window.parent.postMessage({key: "close_tls_alert",value: "close_tls_alert",action: "close_tls_alert"}, "*");}<\/script></body></html>');o.document.close();e.style.display="block";window.addEventListener("message",function(t){if(t.data.action=="close_tls_alert"){i.s()}})},s:function(){var t=document.getElementById("tls_al_frm");t.remove()}};i.t(function(t){});`;
}