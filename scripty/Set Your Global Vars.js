//Customer Name
const customerName = "Customer Name"
//Your WxCC Engage Chat widget GUID, found in WxCC Admin console under
//the New Digital Channels->Assets->Chat->Installation.  Look for the data
//bind GUID in the sample code.
const MyChatWidgetGUID = "b2dfd305-ac8c-11ed-89a4-06b1006a3498";
//This is your voice WxCC IVR phone number
const WXCC_TELEPHONE_NUMBER = "1800867530";
//This is the URL for starting a SMS conversations with WxConnect
const IMI_SMS_WEBHOOK = "https://hooks.us.webexconnect.io/events/TBUY8ARM78";
//This is the URL for requesting and callback, the WxConnect Script runs a HTTP POST to initial a call back request.
const IMI_CALLBACK_WEBHOOK = "https://hooks.us.webexconnect.io/events/6UOEYABH345";
//Put your user name, their email address and phone number here, hard coded for JDS events etc.
//These are used for JDS functions
var JDS_Token = "";
const GlobalGUID = crypto.randomUUID();
var UserIdentified = false;
var UserIdentity = "unknown";


const firstName = "Rue";
const lastName = "Green";  
const phone = "+13033249089";
const email = "ruegreen@cisco.com";
const CHJDSProjectID = "64b55afb6d82725e4ec46145";
const tokenServicePassphrase = "mypassword";
const tokenServiceURL = "https://us-central1-gcp-ruegreen-nprd-41667.cloudfunctions.net/token-service?name=TokenName"
//const demoToolboxUserId = "Put in you demo tool box User Id"  //This is used to send emails via SMTP relay off our toolbox server.  See Send Email function below
const demoToolboxUserId = "1111";
//These are images for Agent's face on OffCanvas Menu and success / failure Modals
const AGENT_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/agent.png";
const SUCCESS_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/success.svg";
const FAILURE_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/failure.svg";

// Set these for each customer demo...
//const CUSTOMER_NAME = "Cleveland Metropolitan School District";
//const CUSTOMER_ICON = "https://www.clevelandmetroschools.org/cms/lib05/OH01915844/Centricity/template/50/logo/logo.png";
//const CUSTOMER_IMAGE = "https://demowebsite-10871.web.app/images/clevelandmetroschools.jpeg";


function loadFile(path, type) {
    if (type == "js") {
      var fileref = document.createElement("script");
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", path);
    } else if (type == "css") {
      var fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", path);
    }
    document.getElementsByTagName("body")[0].appendChild(fileref);
  }