import { LightningElement, wire } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getAcccountList from "@salesforce/apex/AccountRecord.getAccountList";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import Name_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";

export default class Fields extends LightningElement {
  name = "";
  phone = "";

  changehandlername(event) {
    this.name = event.target.value;
  }

  changehandlerphone(event) {
    this.phone = event.target.value;
  }

  //console.log("start");
  // var phoneno = /^\d{10}$/;
  // if (phone.value.match(phoneno)) {
  //   return true;
  //   console.log("success");
  // } else {
  //   alert("not valid phone number");
  //   return false;
  //   console.log("fail");
  // }

  cancelhandler() {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "cancel",
        message: "menu has Cancelled",
        variant: "cancel"
      })
    );
  }

  // phonenumber() {}
  //const field = event.target.name;
  // if (field === "firstname") {
  //   this.firstname = event.target.value;
  // } else if (field === "lastname") {
  //   this.lastname = event.target.value;
  // }

  createAccount() {
    const fields = {};
    fields[Name_FIELD.fieldApiName] = this.name;
    fields[PHONE_FIELD.fieldApiName] = this.phone;
    const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    //console.log(recordInput);

    createRecord(recordInput)
      .then(account => {
        eval("$A.get('e.force:refreshView').fire();");
        console.log("success");
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Account Created",
            variant: "success"
          })
        );
      })
      .catch(error => {
        console.log("fail");

        this.dispatchEvent(
          new ShowToastEvent({
            title: "mobile number restrict to 10 digit",
            message: "set 10 digit mobile number",
            variant: "error"
          })
        );
      });
  }
}

// .catch(error => {
//   //   console.log("fail");
//   this.dispatchEvent(
//     new ShowToastEvent({
//       title: "Error",
//       message: "Error has occored",
//       variant: "error"
//     })
//   );
// });
// }
// }
