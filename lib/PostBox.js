sap.ui.define(["sap/m/VBox", "maceta/lib/library"], function(VBox) {
  "use strict";

  function init() {
    VBox.prototype.init.apply(this, arguments);

    this.addItem(
      new sap.m.Title({
        text: "{i18n>commentBoxTitle}"
      })
    );

    const userName = new sap.m.Input({
      value: "",
      placeholder: "{i18n>newReviewUserNameHint}"
    });
    this.addItem(userName);

    const comment = new sap.m.TextArea({
      value: "",
      growing: true,
      width: "100%",
      placeholder: "{i18n>newReviewUserCommentHint}"
    });
    this.addItem(comment);

    this.addItem(
      new sap.m.Button({
        text: "{i18n>newReviewButtonText}",
        press: () => onSubmit.call(this, userName, comment)
      })
    );

    this.addStyleClass("maceta-box");
  }

  function onSubmit(userName, comment) {
    const userNameValue = userName.getValue().trim();
    const commentValue = comment.getValue().trim();
    if (userNameValue && commentValue) {
      this.fireSubmit({
        userName: userNameValue,
        comment: commentValue
      });
      userName.setValue("");
      comment.setValue("");
    } else {
      sap.m.MessageToast.show("User name and comment must not be empty");
    }
  }

  return VBox.extend("maceta.lib.PostBox", {
    metadata: {
      events: {
        submit: {}
      }
    },

    init,
    renderer: {}
  });
});
