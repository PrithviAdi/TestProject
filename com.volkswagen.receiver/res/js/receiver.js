define([ "sap/designstudio/sdk/component", "css!../css/receiver.css", "d3" ],
function(Component, css, d3) {
	Component.subclass("com.volkswagen.receiver.Receiver",
	function() {

		/* Comment block */
		// use jquery. or $. for JQuery Library
		// use d3. for D3 Library
		// use _. for underscore Library

		"use strict"
		var self = this;
		
		// Constants
		const CSSCLASS = {
			"COMPONENT":		"vw-receiver"
		};

		// Properties
		var _data;
		var _backgroundColor = "blue";
		var _parameterData = [];
		
		// Variables
		var componentId;

		// Object definitions

		// Lifecycle functions
		this.init = function() {
			// Do something on application startup
			componentId = this.$().attr('id');
			$().addClass(CSSCLASS.COMPONENT);
		};
		this.beforUpdate = function() {
			// Do something before new property values are posted
		};
		// Now the GetSet would be get and set the new values around the app
		this.afterUpdate = function() {
			// Do something after new property values are arrived
			buildDOM();
		};
		
		function buildDOM() {
			getParameters();
			
		} 
		
		function firePropertiesChanged() {
			self.firePropertiesChanged(["parameterData"]);
		};
		
		function getParameters() {
			
//			var retrievedObj = localStorage.getItem(_parameterData);
//			console.log(retrievedObj, JSON.parse(retrievedObj));
			var test = {
				     'address':[
						{
						'city': 'Hamburg', 'pin':'22085', 'country':'Deutschland'
						
	
						}
					]
			};
			localStorage.setItem(test, JSON.stringify(test));
			
			var retrievedObj = _parameterData;
			console.log("From set DS:" +retrievedObj);
			
			retrievedObj = localStorage.getItem(test);
			localStorage.getItem("Local storage: ", JSON.parse(retrievedObj));
			console.log(retrievedObj);
			
			
		}

		// GetSet functions
		this.data = function(value) {
			if (value === undefined) {
				return _data;
			} else {
				_data = value;
				return this;
			};
		};
		this.backgroundColor = function(value) {
			if (value === undefined) {
				return _backgroundColor;
			} else {
				_backgroundColor = value;
				return this;
			};
		};
		this.parameterData = function(value) {
			if (value === undefined) {
				return _parameterData;
			} else {
				_parameterData = value;
				return this;
			};
		};
		this.filterValue = function(value) {
			if (value === undefined) {
				return _filterValue;
			} else {
				_filterValue = value;
				return this;
			};
		};
		this.keyValue = function(value) {
			if (value === undefined) {
				return _keyValue;
			} else {
				_keyValue = value;
				return this;
			};
		};
	});
});
