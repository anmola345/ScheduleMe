sap.ui.controller("skedme.schedular", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf skedme.schedular
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf skedme.schedular
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf skedme.schedular
*/
	onAfterRendering: function() {
		 var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly","https://www.googleapis.com/auth/calendar"];
		 gapi.client.setApiKey("AIzaSyBipEj4Vu9VEkt_YuFgthDxPypCJQPPAok");
	        gapi.auth.authorize(
	          {
	            'client_id': "770135276203-b38f28kar7hkba3uks7dl5litj9diskq.apps.googleusercontent.com",
	            'scope':  SCOPES.join(' '),
	            'immediate': true
	          }, this.loadCalendarApi());
	},

	loadCalendarApi:function() {
        gapi.client.load('calendar', 'v3', this.listFreeBusy);
      },

     listFreeBusy:function(){
    	var calID = "saar.c77@gmail.com";
        var request = gapi.client.calendar.freebusy.query({
        	"timeMin": "2015-12-13T00:00:00Z",
        	"timeMax": "2015-12-14T00:00:00Z", 
        	  "timeZone": "America/Toronto",
        	  "items": [
        	    {
        	      "id": "saar.c77@gmail.com"
        	    }
        	  ]
        });
        
        request.execute(function(resp) {
        	var calID = "saar.c77@gmail.com";
        	
        	var mesgApps;
        	var entries = resp.calendars["saar.c77@gmail.com"].busy.length;
        	//for(var i=0;i<entries;i++){
        		//mesgApps=mesgApps+resp.calendars["saar.c77@gmail.com"].busy[i].start+" to "+resp.calendars["saar.c77@gmail.com"].busy[i].end+"  ";
        	//}
        	var slots = sap.ui.getCore().byId("timeSlotsList").getAggregation("items").length;
        	for(var i=0;i<slots;i++){
        		for(var j=0;j<entries;j++){
        			if(sap.ui.getCore().byId("timeSlotsList").getAggregation("items")[i].getBindingContext().getObject().slot == (new Date(resp.calendars["saar.c77@gmail.com"].busy[j].start).getHours()+1)){
        				sap.ui.getCore().byId("timeSlotsList").getAggregation("items")[i].addStyleClass("disabledTimeSlot");
        				
        			}
        		}
        		//new Date(resp.calendars["saar.c77@gmail.com"].busy[0].start).getHours()
        		//sap.ui.getCore().byId("__list2").getAggregation("items")[0].addStyleClass("sapUiMediumMargin")
        	}
        });
      },
      fnSetMeUp:function(e){
    	  var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly","https://www.googleapis.com/auth/calendar"];
    	  gapi.client.setApiKey("AIzaSyBipEj4Vu9VEkt_YuFgthDxPypCJQPPAok");
	      gapi.auth.authorize(
	          {
	            'client_id': "770135276203-b38f28kar7hkba3uks7dl5litj9diskq.apps.googleusercontent.com",
	            'scope':  SCOPES.join(' '),
	            'immediate': true
	          },this.bookCalendar);
      },
      /*loadBookingAPI:function(){
    	  gapi.client.load('calendar', 'v3', this.bookCalendar);
      },*/
      bookCalendar:function(){
    	 // var slot = e.getParameter("listItem").getBindingContext().getObject().slot;
    	  var slot = sap.ui.getCore().byId("timeSlotsList").getSelectedItem().getBindingContext().getObject().slot;
    	  var event = {
    			  'summary': 'SkedMe - Invite for '+slot+" Slot",
    			  //'location': '800 Howard St., San Francisco, CA 94103',
    			  'description': 'Pleas schedule me for my doctor\'s appointment for '+slot+" Slot",
    			  'start': {
    			    'dateTime': new Date().getFullYear()+"-"+(Number(new Date().getMonth())+1).toString()+"-"+new Date().getDate()+"T"+slot+":00:00-04:00",//'2015-05-28T09:00:00-07:00',
    			    'timeZone': 'America/Toronto'
    			  },
    			  'end': {
    			    'dateTime': new Date().getFullYear()+"-"+(Number(new Date().getMonth())+1).toString()+"-"+new Date().getDate()+"T"+(Number(slot)+1).toString()+":00:00-04:00",//'2015-05-28T17:00:00-07:00',
    			    'timeZone': 'America/Toronto'
    			  },
    			  /*'recurrence': [
    			    'RRULE:FREQ=DAILY;COUNT=2'
    			  ],*/
    			  'attendees': [
    			    {'email': 'saar.c77@gmail.com'}
    			  ],
    			  'reminders': {
    			    'useDefault': false,
    			    'overrides': [
    			      {'method': 'email', 'minutes': 24 * 60},
    			      {'method': 'popup', 'minutes': 10}
    			    ]
    			  }
    			};
    	  var request = gapi.client.calendar.events.insert({
    		  'sendNotifications':'true',
    		  'calendarId': 'primary',
    		  'resource': event
    		});

    		request.execute(function(event) {
    		  if(event.status=="confirmed"){
    			sap.m.MessageToast.show("You have been scheduled successfully.");  
    		  }else
    			  sap.m.MessageToast.show("There was an error in scheduling."); 
    		});
      }
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf skedme.schedular
*/
//	onExit: function() {
//
//	}

});