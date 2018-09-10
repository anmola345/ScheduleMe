sap.ui.controller("skedme.myAppointments", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skedme.myAppointments
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skedme.myAppointments
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skedme.myAppointments
*/
	onAfterRendering: function() {
		//sap.ui.getCore().byId("myappnts").setText();

		 gapi.client.setApiKey("AIzaSyBipEj4Vu9VEkt_YuFgthDxPypCJQPPAok");
	        gapi.auth.authorize(
	          {
	            'client_id': "770135276203-b38f28kar7hkba3uks7dl5litj9diskq.apps.googleusercontent.com",
	            'scope': "https://www.googleapis.com/auth/calendar.readonly",
	            'immediate': true
	          }, this.loadCalendarApi());
	
	},
	loadCalendarApi:function() {
        gapi.client.load('calendar', 'v3', this.listUpcomingEvents);
      },

     listUpcomingEvents:function(){
        var request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }); 

        request.execute(function(resp) {
        	var strMesg="";
        	for(var i=0;i<resp.items.length;i++){
        		//strMesg = strMesg + resp.items[i].summary;
        		/*content:new sap.suite.ui.commons.TimelineItem({
    				dateTime:"Date(1407049200000)",
    				text:"{summary}"*/
        		sap.ui.getCore().byId("timeline").addContent(new sap.suite.ui.commons.TimelineItem({
        			title:"From: "+resp.items[0].start.dateTime+" to "+resp.items[0].end.dateTime,
    				text:resp.items[i].summary
        		}));
        	}
        	//sap.ui.getCore().byId("myappnts").setText(strMesg);
        	/*         	var events = resp.items;
            appendPre('Upcoming events:');

            if (events.length > 0) {
              for (i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                  when = event.start.date;
                }
                appendPre(event.summary + ' (' + when + ')')
              }
            } else {
              appendPre('No upcoming events found.');
            } */
        });
     }

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skedme.myAppointments
*/
//	onExit: function() {
//
//	}

});