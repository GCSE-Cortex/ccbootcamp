function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  function JDSInjection() {
    //variables
    const modifiers = {
      formTitle: customerName,
      formSubTitle: "JDS Injection Demo",
      formButtonColor: "#FD832F",
      reasons: [" ", "Billing", "Orders", "Support", "Other"],
      buttonColor: "#ccc", // ie "#002D72" or "red"
      secondColor: "#444444",
      bannerColor: "#C8CBCE",
      buttonTextColor: "#000000",
      buttonPositionTop: "50%",
      buttonPositionRight: "-70px",
      modalWidth: "700px",
      modalHeight: "650px"
    };
  
    // create bottom of page banner
    // let btnBackground = document.createElement("BUTTON");
    // btnBackground.setAttribute("style", `position:fixed; font-family: inherit; bottom: 0px; left: 0px; width: 100%; height: 100px; background: ${modifiers.bannerColor}; color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px;`);
    // document.body.append(btnBackground);
  
    // create button on bottom left
    // let btn = document.createElement("BUTTON");
    // btn.textContent = " 📞 Call Me Back";
    // btn.setAttribute("style", `position:fixed; font-family: inherit; bottom: 10px; left: 10px; width: max-content; height: 30px; background: ${modifiers.buttonColor};border-radius: 5px; ;color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); margin-left: 15px;margin-bottom:15px;`);
    // document.body.append(btn);
  
    let btn = document.createElement("BUTTON");
    btn.textContent = String.fromCodePoint(0x1f4de) + " " + "Inject Event";
    btn.setAttribute("style", `transform:rotate(-90deg); position:fixed; font-family: inherit; top:${modifiers.buttonPositionTop}; right:${modifiers.buttonPositionRight}; margin-right: 0px; width: 180px; height: 50px; background: ${modifiers.buttonColor}; border-radius: 5px; ;color: ${modifiers.buttonTextColor}; cursor: pointer; z-index:99999999;transition: all .4s ease;overflow:hidden; font-size: 1.1em; border: 0px;`);
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
      modal.style.top = "10%";
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
      modal.appendChild(modalMessage);
  
      // modal Heading
      let modalHeading = document.createElement("h1");
      modalHeading.textContent = `${modifiers.formTitle}`;
      modalHeading.style.textAlign = "center";
      modalHeading.style.fontFamily = "inherit";
      modalHeading.style.color = "#521751";
      modalHeading.style.marginTop = "40px";
      modalHeading.style.fontSize = "2.0rem";
      modal.appendChild(modalHeading);
  
      // modal sub Heading
      let modalSubHeading = document.createElement("h4");
      modalSubHeading.textContent = `${modifiers.formSubTitle}`;
      modalSubHeading.classList.add("modalSubHeading");
      modalSubHeading.style.textAlign = "center";
      modalSubHeading.style.fontFamily = "inherit";
      modalSubHeading.style.color = "#521751";
      modalSubHeading.style.marginBottom = "20px";
      modalSubHeading.style.marginTop = "0px";
      modalSubHeading.style.fontSize = "1.2rem";
      modal.appendChild(modalSubHeading);
  
      //Input fields of the Form
      let inputFieldContainer = document.createElement("div");
      inputFieldContainer.setAttribute(
        "style",
        ` margin-right: 20px; margin-left: 20px;
        `
      );
      modal.appendChild(inputFieldContainer);
  
      //create a form
      var startForm = document.createElement("form");
      startForm.id = "injectionForm";
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
      let startIdentity = document.createElement("input");
      startIdentity.type = "text";
      startIdentity.name = "identity";
      startIdentity.id = "identity";
      startIdentity.placeholder = "Enter Identity of Event ex: +13035551212";
      startIdentity.setAttribute("style", `font-size: 12px; border-width: 2px; text-align: left;  left; margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
      startIdentity.addEventListener("input", function () {
        editedQuote = startIdentity.value;
      });
      startForm.append(startIdentity);
  
      //form field 2
      let startType = document.createElement("input");
      startType.type = "text";
      startType.name = "type";
      startType.id = "type";
      startType.placeholder = "Enter Identity Type of Event ex: phone";
      startType.setAttribute("style", `font-size: 12px; border-width: 2px;  text-align: left;  margin-bottom: 0px;border-top:0; border-left: 0; border-right: 0;`);
      startType.addEventListener("input", function () {
        editedQuote = startType.value;
      });
      startForm.append(startType);
  
      //form field 3
      let startOrigin = document.createElement("input");
      startOrigin.type = "text";
      startOrigin.name = "origin";
      startOrigin.id = "origin";
      startOrigin.placeholder = "Enter Origin of Event ex:Web";
      startOrigin.required = true;
      startOrigin.setAttribute("style", `font-size: 12px; border-width: 2px;  text-align: left;  margin-bottom: 0px; border-top:0; border-left: 0; border-right: 0; `);
      startOrigin.addEventListener("input", function () {
        editedQuote = startOrigin.value;
      });
      startForm.append(startOrigin);
      
      //form field 4
      let startChannel = document.createElement("input");
      startChannel.type = "text";
      startChannel.name = "channel";
      startChannel.id = "channel";
      startChannel.placeholder = "Enter Channel Type ex: Page Visit";
      startChannel.required = true;
      startChannel.setAttribute("style", `font-size: 12px; border-width: 2px;  text-align: left;  margin-bottom: 0px; border-top:0; border-left: 0; border-right: 0; `);
      startChannel.addEventListener("input", function () {
        editedQuote = startChannel.value;
      });
      startForm.append(startChannel);
      
      //Inject Form Value above Button
      let injectButton = document.createElement("Button");
      injectButton.id = "injectButton";
      injectButton.textContent = "Inject Event Values Above";
      //styles
      injectButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
      injectButton.setAttribute("type", "button");
      startForm.append(injectButton);
      
      //Inject Password Lockout Button
      let passwordButton = document.createElement("Button");
      passwordButton.id = "passwordButton";
      passwordButton.textContent = "Inject Password Lockout Event";
      //styles
      passwordButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
      passwordButton.setAttribute("type", "button");
      startForm.append(passwordButton);
      
      //Inject Form Completed Button
      let formButton = document.createElement("Button");
      formButton.id = "formButton";
      formButton.textContent = "Inject Form Completed Event";
      //styles
      formButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
      formButton.setAttribute("type", "button");
      startForm.append(formButton);
      
      //Inject System Outage Button
      let systemButton = document.createElement("Button");
      systemButton.id = "systemButton";
      systemButton.textContent = "Inject System Outage Event";
      //styles
      systemButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
      systemButton.setAttribute("type", "button");
      startForm.append(systemButton);
      
      //Close Button
      let closeButton = document.createElement("Button");
      closeButton.id = "closeButton";
      closeButton.textContent = "Close";
      //styles
      closeButton.setAttribute("style", `font-size: 12px; text-align: center; margin-top: 0px; margin-bottom: 0px; margin-left: 15px; margin-right: 15px; padding: 8px; border: none; background: ${modifiers.formButtonColor}; color: white;  border-radius: 5px; width: 600px; font-weight: bold; text-transform: uppercase; box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); border: none; cursor: pointer; grid-column: 1 / 3; margin-bottom: 20px;`);
      closeButton.setAttribute("type", "button");
      startForm.append(closeButton);
      
      //Add button listener events and call the correct JDS injection function
      injectButton.addEventListener("click",async function validate(e) {
          e.preventDefault();
          //Grab the fields from the form and build out the JDS injection Payload
          let injection = document.forms.injectionForm;
          let formData = new FormData(injection);
          let identity = formData.get("identity");
          let type = formData.get("type");
          let origin = formData.get("origin");
          let channel = formData.get("channel");
            injectJDS("custom",identity,type,origin,channel);
          let successMsg = document.createElement("span");
          successMsg.innerHTML = "Custom JDS Event Injected Successfully";
          successMsg.setAttribute("style", ` text-align: center; margin: auto; font-size: 16px; padding: 2px; border-width: 2px; border-top:0; border-left: 0; border-right: 0; border-radius: 5px; color: white; height: 30px; width: 500px; background: #22bb33; position: absolute; z-index:1; left: 90px; `);
          modalMessage.append(successMsg);
          setTimeout(() => {
              startForm.reset();
              successMsg.remove();
            }, 10000);
      });
      
      passwordButton.addEventListener("click",async function validate(e) {
          e.preventDefault();
            injectJDS("Website",phone,"phone","Website","Password Lockout");
          let successMsg = document.createElement("span");
          successMsg.innerHTML = "Password Lockout Event Injected Successfully";
          successMsg.setAttribute("style", ` text-align: center; margin: auto; font-size: 16px; padding: 2px; border-width: 2px; border-top:0; border-left: 0; border-right: 0; border-radius: 5px; color: white; height: 30px; width: 500px; background: #22bb33; position: absolute; z-index:1; left: 90px; `);
          modalMessage.append(successMsg);
          setTimeout(() => {
            startForm.reset();
            successMsg.remove();
          }, 10000);
      });
      
      formButton.addEventListener("click",async function validate(e) {
          e.preventDefault();
            injectJDS("Website",phone,"phone","Website","Form Completed");
          let successMsg = document.createElement("span");
          successMsg.innerHTML = "Form Completed Event Injected Successfully";
          successMsg.setAttribute("style", ` text-align: center; margin: auto; font-size: 16px; padding: 2px; border-width: 2px; border-top:0; border-left: 0; border-right: 0; border-radius: 5px; color: white; height: 30px; width: 500px; background: #22bb33; position: absolute; z-index:1; left: 90px; `);
          modalMessage.append(successMsg);
          setTimeout(() => {
            startForm.reset();
            successMsg.remove();
          }, 10000);
      });
      
      systemButton.addEventListener("click",async function validate(e) {
          e.preventDefault();
            injectJDS("Operations",phone,"phone","Operations","System Outage");
            let successMsg = document.createElement("span");
          successMsg.innerHTML = "System Outage Event Injected Successfully";
          successMsg.setAttribute("style", ` text-align: center; margin: auto; font-size: 16px; padding: 2px; border-width: 2px; border-top:0; border-left: 0; border-right: 0; border-radius: 5px; color: white; height: 30px; width: 500px; background: #22bb33; position: absolute; z-index:1; left: 90px; `);
          modalMessage.append(successMsg);
          setTimeout(() => {
            startForm.reset();
            successMsg.remove();
          }, 10000);
      });
      
      closeButton.addEventListener("click",async function validate(e) {
          e.preventDefault();
            closeModal();
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
    
    //Function to Inject event into JDS
     async function injectJDS(source_s,identity_s,type_s,origin_s,channel_s) {
        var num = Date.now();
        //Lets get out Access Token from the Token Service
        const tokenResponse = await fetch(tokenServiceURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token-passphrase': tokenServicePassphrase
          }
        });
        const tokenJson = await tokenResponse.json(); //extract JSON from the http response
        console.log(tokenJson);
        var accessToken = tokenJson.token;
        const response = await fetch("https://api-jds.prod-useast1.ciscowxdap.com/publish/v1/api/event?workspaceId=" + CHJDSProjectID, {
          method: 'POST',
          body:JSON.stringify( 
          {
            "id": createUUID(),
            "previously": "12345",
            "specversion": "1.0",
            "type": "task:new",
            "source": source_s,
            "identity": identity_s,
            "identitytype": type_s,
            "datacontenttype": "application/json",
            "data": {
              "taskId": createUUID(),
              "origin": origin_s,
              "firstName": firstName,
              "lastName": lastName,
              "email": email,
              "channelType": channel_s
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
  }
  
  document.onload(JDSInjection());
  
  