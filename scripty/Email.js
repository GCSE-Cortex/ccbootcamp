// This is a plain vanilla JS form designed to be added into any javascript injector, in order to render it on a web browser / HTML.
// Injector used for the demo is a Chrome Extension called scripty.
//const demoToolboxUserId = "0319";
document.onload(sendEmail());

function sendEmail() {
        //variables
        const modifiers = {
                url: "https://pkapp.loca.lt", // Localtunnel URL or your public Server
                formTitle: "Email Us",
//                formSubTitle: "Email Us At",
                formButtonColor: "#50cde6",
                language: ["English ", "Spanish"],
                buttonColor: "#50cde6", // ie "#002D72" or "red"
                secondColor: "#444444",
                bannerColor: "#C8CBCE",
                buttonTextColor: "#ffffff",
                buttonPositionTop: "50%",
                buttonPositionRight: "-70px",
                modalWidth: "700px",
                modalHeight: "275px"
        };

        // create bottom of page banner
        // let btnBackground = document.createElement("BUTTON");
        // btnBackground.setAttribute("style", `position:fixed; font-family: inherit; bottom: 0px; left: 0px; width: 100%; height: 100px; background: ${modifiers.bannerColor}; color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px;`);
        // document.body.append(btnBackground);

        // create button on bottom left
        // let btn = document.createElement("BUTTON");
        // btn.textContent = " uc0u55357 u56542  Call Me Back";
        // btn.setAttribute("style", `position:fixed; font-family: inherit; bottom: 10px; left: 10px; width: max-content; height: 30px; background: ${modifiers.buttonColor};border-radius: 5px; ;color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); margin-left: 15px;margin-bottom:15px;`);
        // document.body.append(btn);

        let btn = document.createElement("BUTTON");
        btn.textContent = "Email US";
        btn.setAttribute("style", `transform:rotate(-90deg); position:fixed; font-family: inherit; top:${modifiers.buttonPositionTop}; right:${modifiers.buttonPositionRight}; margin-right: 0px; width: 165px; height: 40px; background: ${modifiers.buttonColor}; border-radius: 5px; ;color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px;`);
        document.body.append(btn);

        //demo container
        let demoContainer = document.createElement("div");
        document.body.append(demoContainer);

        //Event Listeners
        btn.addEventListener("click", function () {
                let backdrop = document.createElement("div");
                backdrop.style.position = "fixed";
                backdrop.style.width = "100%";
                backdrop.style.height = "100%";
                backdrop.style.top = 0;
                backdrop.style.left = 0;
                backdrop.style.background = "rgb(0,0,0, 0.2)";
                backdrop.style.zIndex = "100";
                document.body.insertBefore(backdrop, demoContainer);
                backdrop.addEventListener("click", closeModal);

                //create Modal
                modal = document.createElement("div");
                modal.style.position = "fixed";
                modal.style.zIndex = "200";
                modal.style.top = "20%";
                modal.style.left = "28%";
                modal.style.width = `${modifiers.modalWidth}`;
                modal.style.height = `${modifiers.modalHeight}`;
                modal.style.marginBottom = "0px";
                modal.style.background = "white";
                modal.style.boxShadow = "1px 1px 6px rgb(0,0,0,0.4)";
                modal.style.padding = "1rem";
                modal.style.borderRadius = "10px";

                // message area
                let modalMessage = document.createElement("div");
                modalMessage.style.position = "relative";
                modalMessage.style.marginTop = "0px";
                modalMessage.style.marginLeft = "0px";
                modal.appendChild(modalMessage);

                // modal Heading
                let modalHeading = document.createElement("h1");
                modalHeading.textContent = `${modifiers.formTitle}`;
                modalHeading.style.textAlign = "center";
                modalHeading.style.fontFamily = "inherit";
                modalHeading.style.color = "#521751";
                modalHeading.style.marginTop = "20px";
                modalHeading.style.fontSize = "2.5rem";
                modal.appendChild(modalHeading);

                // modal sub Heading
//                let modalSubHeading = document.createElement("h4");
//                modalSubHeading.textContent = `${modifiers.formSubTitle}`;
//                modalSubHeading.classList.add("modalSubHeading");
//                modalSubHeading.style.textAlign = "center";
//                modalSubHeading.style.fontFamily = "inherit";
//                modalSubHeading.style.color = "#521751";
//                modalSubHeading.style.marginBottom = "20px";
//                modalSubHeading.style.marginTop = "20px";
//                modalSubHeading.style.fontSize = "1.2rem";
//                modal.appendChild(modalSubHeading);

                //Input fields of the Form
                let inputFieldContainer = document.createElement("div");
                inputFieldContainer.setAttribute(
                        "style",
                        ` margin-right: 20px; margin-left: 20px;`
                      );
                modal.appendChild(inputFieldContainer);

                //create a form
                var startForm = document.createElement("form");
                startForm.id = "emailForm";
                startForm.setAttribute(
                        "style",
                        `
							display: grid;
							grid-template-columns: 1fr 1fr;
							grid-gap: 20px;
						`
                );
                inputFieldContainer.appendChild(startForm);

                // form field 1
                let startfName = document.createElement("input");
                startfName.type = "text";
                startfName.name = "emailname";
                startfName.id = "emailname";
                startfName.placeholder = "NAME";
                startfName.setAttribute("style", ` font-size: 12px; border-width: 2px; text-align: left;  margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0; `);
                startfName.addEventListener("input", function () {
                        editedQuote = startfName.value;
                });
                startForm.append(startfName);

                // form field 2
                let startEmail = document.createElement("input");
                startEmail.type = "text";
                startEmail.name = "emailaddress";
                startEmail.id = "emailaddres";
                startEmail.placeholder = "Enter your Email Address";
                startEmail.setAttribute("style", `font-size: 12px; border-width: 2px; text-align: left;  left; margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
                startEmail.addEventListener("input", function () {
                        editedQuote = startEmail.value;
                });
                startForm.append(startEmail);
				
				// form field 3
                let startSubject = document.createElement("input");
                startSubject.type = "text";
                startSubject.name = "emailsubject";
                startSubject.id = "emailsubject";
                startSubject.placeholder = "Enter your Email Subject";
                startSubject.setAttribute("style", `font-size: 12px; border-width: 2px; text-align: left;  left; margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
                startSubject.addEventListener("input", function () {
                        editedQuote = startSubject.value;
                });
                startForm.append(startSubject);
				
				// form field 4
                let startMessage = document.createElement("input");
                startMessage.type = "text";
                startMessage.name = "emailmessage";
                startMessage.id = "emailmessage";
                startMessage.placeholder = "Enter your Message";
                startMessage.setAttribute("style", `font-size: 12px; border-width: 2px; text-align: left;  left; margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
                startMessage.addEventListener("input", function () {
                        editedQuote = startMessage.value;
                });
                startForm.append(startMessage);
				

                //Send Button
                let confirmButton = document.createElement("Button");
                confirmButton.id = "confirmButton";
                confirmButton.textContent = "Submit";
                //styles
                confirmButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 165px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 300px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
                confirmButton.setAttribute("type", "button");
                startForm.append(confirmButton);

                confirmButton.addEventListener("click", async function validate(e) {
                  var currentdatetime = new Date(); //Date of browser
                  let TimezoneOffset = currentdatetime.getTimezoneOffset();
                  let sendEmail = document.forms.emailForm;
                  let formData = new FormData(sendEmail);
                  let emailname = formData.get("emailname");
                  let emailaddress = formData.get("emailaddress");
				  let emailsubject = formData.get("emailsubject");
                  let emailmessage = formData.get("emailmessage");

                  sendtheEmail(emailname,emailaddress,emailsubject,emailmessage);
                  let successMsg = document.createElement("span");
                  successMsg.innerHTML = "Thank you for your Email";
                  successMsg.setAttribute("style", ` text-align: center; margin: auto; font-size: 16px; padding: 2px; border-width: 2px; border-top:0; border-left: 0; border-right: 0; border-radius: 5px; color: white; height: 30px; width: 500px; background: #22bb33; position: absolute; z-index:1; left: 90px; `);
                  modalMessage.append(successMsg);
                  setTimeout(() => {
                      startForm.reset();
                      successMsg.remove();
                    }, 10000);

                });
                //close Modal
                function closeModal() {
                        if (backdrop) {
                                backdrop.remove();
                        }
                        if (modal) {
                                modal.remove();
                        }
                }

                document.body.insertBefore(modal, demoContainer);
        });

// Send Email to dCloud
async function sendtheEmail(emailname,emailaddress,emailsubject,emailmessage) {
  try {
    const response = await fetch('https://mm-brand.cxdemo.net/api/v1/email', {
      timeout: 6000, // six seconds
      method: 'POST',
      body: JSON.stringify({
        "name": emailname,
        "email": emailaddress,
        "subject": emailsubject,
        "body": emailmessage,
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
    emailname = "";
    emailaddress = "";
    emailsubject = "";
    emailmessage = "";
    if (response.status == 202) {
      successMessage.innerHTML = `Thank you for your email.  We will respond shortly.`;
    }
  } catch (error) {
    console.log('Email something went wrong!');
    console.log('Email Error:', error);
    console.log('Email Name:', emailname);
    console.log('Email Address:', emailaddress);
	console.log('Email Subject:', emailsubject);
	console.log('Email Message:', emailmessage);
  }
}
}
