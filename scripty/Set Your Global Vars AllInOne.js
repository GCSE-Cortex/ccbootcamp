//Set these vars to show or hide the channels you want to demo
const showCallUs = true;
const showCallBack = true;
const showEmail = true;
const showSMS = true;
const showWhatsApp = true;
//This is your IMI WIDGET GUID
const MyChatWidgetGUID = "b2dfd305-ac8c-11ed-89a4-06b1006a3487";
//This is your voice WxCC IVR phone number
const WXCC_TELEPHONE_NUMBER = "8008667530";
//This is the URL for starting a SMS conversations with WxConnect
const IMI_SMS_WEBHOOK = "https://hooks.us.webexconnect.io/events/TBUY8ARMO32";
//This is the URL for requesting and callback, the WxConnect Script runs a HTTP POST to initial a call back request.
const IMI_CALLBACK_WEBHOOK = "https://hooks.us.webexconnect.io/events/6UOEYABH34";
//Put your user name, their email address and phone number here, hard coded for JDS events etc.
//These are used for JDS functions
const TOKEN_SERVICE_URL = "https://us-central1-gcp-ruegreen-nprd-41678.cloudfunctions.net/token-service?name=token_name";
const TOKEN_SERVICE_PASSPHRASE = "yourpassword";
const JDS_PROJECTID = "64b55afb6d82725e4ec46d56";
const JDS_POSTURL = "https://api.wxcc-us1.cisco.com/publish/v1/api/event?workspaceId=";
var JDS_Token = "";
const GlobalGUID = crypto.randomUUID();
var UserIdentified = false;
var UserIdentity = "unknown";
const demoToolboxUserId = "1111";
const CHJDSProjectID = "64b55afb6d82725e4ec46145";
//These are images for Agent's face on OffCanvas Menu and success / failure Modals
const AGENT_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/agent.png";
const SUCCESS_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/success.svg";
const FAILURE_IMAGE = "https://wxcc-widgets.s3.us-west-1.amazonaws.com/failure.svg";

const CUSTOMER_NAME = "Preferred Mutual - PMI"
//Replace this with your WHATSAPP QR CODE image, might have to host it somewhere!
const WHATSAPP_IMAGE = "https://demowebsite-10871.web.app/images/WhatsAppImage.png";

//Here are the values we used in the CCBOOTCAMP, adjust them for SMS webhook
const firstName = "Rue";
const lastName = "Green";   
const phone = "+13033249089";
const email = "ruegreen@cisco.com";
const balance = "10";
const myLink = "http://www.google.com";
const welcomeMessage = "Here is a link to your options";
