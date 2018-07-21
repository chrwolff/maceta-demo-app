"use strict";
/**
 * Initialization Code and shared classes of library maceta.lib
 */
sap.ui.define(
  // library dependency
  ["jquery.sap.global", "sap/ui/core/library", "sap/m/library"],
  function() {
    //use below if style classes are onboard
    sap.ui.getCore().includeLibraryTheme("maceta.lib");

    // delegate further initialization of this library to the Core
    sap.ui.getCore().initLibrary({
      name: "maceta.lib",
      version: "0.0.1",
      dependencies: ["sap.ui.core", "sap.m"],
      types: [],
      interfaces: [],
      controls: ["maceta.lib.PostBox"],
      elements: []
    });
    return maceta.lib;
  },
  false
);
