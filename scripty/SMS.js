// This is a plain vanilla JS form designed to be added into any javascript injector, in order to render it on a web browser / HTML.
// Injector used for the demo is a Chrome Extension called scripty.

document.onload(sendSMS());

function sendSMS() {
        //variables
        const modifiers = {
                url: "https://pkapp.loca.lt", // Localtunnel URL or your public Server
                formTitle: "Send us an SMS",
//                formSubTitle: "Send SMS",
                formButtonColor: "#50cde6",
                language: ["English ", "Spanish"],
                buttonColor: "#50cde6", // ie "#002D72" or "red"
                secondColor: "#444444",
                bannerColor: "#C8CBCE",
                buttonTextColor: "#ffffff",
                buttonPositionTop: "25%",
                buttonPositionRight: "-70px",
                modalWidth: "700px",
                modalHeight: "240px"
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
        btn.textContent = "SMS US";
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
                startForm.id = "smsForm";
                startForm.setAttribute(
                        "style",
                        `display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;`
                );
                inputFieldContainer.appendChild(startForm);

                // form field 1
                let startfName = document.createElement("input");
                startfName.type = "text";
                startfName.name = "name";
                startfName.id = "name";
                startfName.placeholder = "NAME";
                startfName.setAttribute("style", ` font-size: 12px; border-width: 2px; text-align: left;  margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0; `);
                startfName.addEventListener("input", function () {
                        editedQuote = startfName.value;
                });
                startForm.append(startfName);

                // form field 2
                let startSMS = document.createElement("input");
                startSMS.type = "text";
                startSMS.name = "sms";
                startSMS.id = "sms";
                startSMS.placeholder = "Enter your mobile SMS number";
                startSMS.setAttribute("style", `font-size: 12px; border-width: 2px; text-align: left;  left; margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
                startSMS.addEventListener("input", function () {
                        editedQuote = startSMS.value;
                });
                startForm.append(startSMS);

                //Send Button
                let confirmButton = document.createElement("Button");
                confirmButton.id = "confirmButton";
                confirmButton.textContent = "Submit";
                //styles
                confirmButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
                confirmButton.setAttribute("type", "button");
                startForm.append(confirmButton);

                confirmButton.addEventListener("click", async function validate(e) {
                  var currentdatetime = new Date(); //Date of browser
                  let TimezoneOffset = currentdatetime.getTimezoneOffset();
                  let sendSMS = document.forms.smsForm;
                  let formData = new FormData(sendSMS);
                  let name = formData.get("name");
                  let smsNumber = formData.get("sms");
                  if (smsNumber.length === 11) {
                    smsNumber = formData.get('sms');
                  } else { smsNumber = "1" + formData.get('sms'); }
                  sendSMSMessage(name,smsNumber);
                  let successMsg = document.createElement("span");
                  successMsg.innerHTML = "Check your phone, SMS message sent!";
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

   async function sendSMSMessage(name,number) {
    const response = await fetch(IMI_SMS_WEBHOOK, {
        method: 'POST',
        body:JSON.stringify(
        {
          name: name,
          number:number,
          balance:"10",
          link:"http://www.google.com",
          WelcomeMessage:"Here is a link to your options"
        }), // string or object
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const myJson = await response.json(); //extract JSON from the http respons
  }
}
