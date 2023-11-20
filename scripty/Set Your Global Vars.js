//Customer Name
const customerName = "Company Name"
//Your WxCC Engage Chat widget GUID, found in WxCC Admin console under
//the New Digital Channels->Assets->Chat->Installation.  Look for the data
//bind GUID in the sample code.
const MyChatWidgetGUID = "b2dfd305-ac8c-11ed-89a4-06b1006a3478";
//This is your voice WxCC IVR phone number
const WXCC_TELEPHONE_NUMBER = "1800867530";
//This is the URL for starting a SMS conversations with WxConnect
const IMI_SMS_WEBHOOK = "https://hooks.us.webexconnect.io/events/0NGU7V9PEG";
//This is the URL for requesting and callback, the WxConnect Script runs a HTTP POST to initial a call back request.
const IMI_CALLBACK_WEBHOOK = "https://hooks.us.webexconnect.io/events/6UOEYABH3F";
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
const CHJDSProjectID = "64b55afb6d82725e4ec46d8c";
const tokenServicePassphrase = "mypassword";
const tokenServiceURL = "https://us-central1-gcp-ruegreen-nprd-41695.cloudfunctions.net/token-service?name=JDS"
//const demoToolboxUserId = "Put in you demo tool box User Id"  //This is used to send emails via SMTP relay off our toolbox server.  See Send Email function below
const demoToolboxUserId = "1883";
//These are images for Agent's face on OffCanvas Menu and success / failure Modals
const AGENT_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/agent.png";
const SUCCESS_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/success.svg";
const FAILURE_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/failure.svg";
//DEMO flags, true will show the option on main OffCanvas Menu
const showCallUs = true;
const showCallBack = true;
const showEmail = true;
const showSMS = true;
const showWhatsApp = true;
