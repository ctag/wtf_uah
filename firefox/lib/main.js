/*
 * Chevaline Alpha
 * A Firefox extension
 * By: Christopher [ctag] Bero
 * 
 * I hope you find it utilitous!
 */

/*
 * SDK tools
 */
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var favicons = require("sdk/places/favicon");
var timers = require("sdk/timers");
var urlRequest = require("sdk/request");
var simplePrefs = require('sdk/simple-prefs');
var ss = require('sdk/simple-storage');
const {XMLHttpRequest} = require("sdk/net/xhr");

/*
 * Global Vars
 */
var year = simplePrefs.prefs['year'];
var semester = simplePrefs.prefs['semester'];

if (!ss.courses)
{
	//
}

tabs.open("http://catalog.uah.edu/content.php?catoid=11&navoid=212");

var menuitem = require("menuitems").Menuitem({
	id: "clickme",
	menuid: "menu_ToolsPopup",
	label: "Chevaline Alpha",
	onCommand: function() {
		alert("here!");
	},
	insertbefore: "menu_pageInfo"
});

pageMod.PageMod({
	include: "*.uah.edu",
	contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("courses.js"), self.data.url("uah_page.js")]
});






