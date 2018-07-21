sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
  "use strict";

  return UIComponent.extend("maceta.demo.Component", {
    metadata: {
      manifest: "json"
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
    },

    createContent: function() {
      this.getModel("data").setDefaultBindingMode(
        sap.ui.model.BindingMode.OneWay
      );

      const postBox = new maceta.lib.PostBox({
        width: "40%",
        submit: addItem
      });

      const timeline = new sap.suite.ui.commons.Timeline("timeline", {
        showFilterBar: false,
        growingThreshold: 0
      });
      timeline.bindAggregation("content", {
        path: "data>/Posts",
        factory: timelineItemFactory
      });

      timeline.addStyleClass("maceta-box");

      const hBox = new sap.m.HBox({
        items: [postBox, timeline],
        alignItems: sap.m.FlexAlignItems.Start,
        fitContainer: true
      });

      const page = new sap.m.Page("page", {
        title: "{i18n>pageTitle}",
        content: hBox,
        busyIndicatorDelay: 0
      });

      const app = new sap.m.App({
        pages: page
      });

      return app;
    }
  });

  function addItem(event) {
    const page = sap.ui.getCore().byId("page");
    page.setBusy(true);
    const timeline = sap.ui.getCore().byId("timeline");
    const binding = timeline.getBinding("content");
    const context = binding.create({
      _id: "newComment",
      userName: event.getParameter("userName"),
      text: event.getParameter("comment"),
      time: Date.now()
    });
    context.created().then(() => {
      binding.attachEventOnce("dataReceived", () => page.setBusy(false));
      binding.refresh();
    });
  }

  function timelineItemFactory(id, context) {
    return new sap.suite.ui.commons.TimelineItem({
      userName: "{data>userName}",
      text: "{data>text}",
      dateTime: {
        path: "data>time",
        formatter: hammertime => new Date(hammertime)
      }
    });
  }
});
