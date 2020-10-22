/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.1/120", "192.168.0.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				maximumEntries: 7,
				showLocation: true,
				tableClass: "xsmall",
				titleReplace: {
					"'s birthday": "'s birthday"
				},
				timeFormat: "absolute",
				calendars: [
					{
						symbol: "glass-cheers",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/teejay22%40gmail.com/private-09ab1445f16d90a075a4fe03853ec4d1/basic.ics"
					},
					{
						symbol: "birthday-cake",
						url: "https://calendar.google.com/calendar/ical/2vppgkgcemhpv1sffpk8mqtubc%40group.calendar.google.com/private-ea2106bad21b3406d47a9a42252d5083/basic.ics",
						repeatingCountTitle: "Birthday"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				remoteFile: 'https://raw.githubusercontent.com/tjay22/MagicMirror-config/main/compliments.json'
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Hope Valley",
				locationID: "5222665", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "2867a1fed998b01eb552578c66df09fd"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Hope Valley",
				locationID: "5222665", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "2867a1fed998b01eb552578c66df09fd"
			}
		},
		{
			module: "mmm-systemtemperature",
			position: "bottom_left",	// This can be any of the regions.
			classes: "small dimmed", // Add your own styling. Optional.
			config: {
				unit: "f"
			}
		},
		{
			module: "MMM-connection-status",
			position: "bottom_left", // Or any valid MagicMirror position.
			config: {
					// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-homeassistant-sensors",
			header: "3D Printer",
			position: "bottom_right",
			config: {
				host: "192.168.0.160",
				port: "8123",
				https: false,
				token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmYzI4NjU4NWY0YWU0YTFjOWVhMWI4NzZkOTk4NmQ0ZSIsImlhdCI6MTYwMzM0MTQ3OCwiZXhwIjoxOTE4NzAxNDc4fQ.OuuvY0BLcA7JdZ3_KSVHLL3VYR4WRLptzFSsY-VFiFA",
				displaySymbol: false,
				values: [
					{
						sensor: "sensor.ender_3_pro_actual_bed_temp",
					},
					{
						sensor: "sensor.ender_3_pro_actual_tool0_temp",
					},
					{
						sensor: "sensor.ender_3_pro_job_percentage",
					},
					{
						sensor: "sensor.ender_3_pro_time_elapsed",
					},
					{
						sensor: "sensor.ender_3_pro_time_remaining",
					},
				]
			}
		},	
		{
			module: "MMM-ip",
			position: "bottom_right",
			config: {
				fontSize: "10",
				showFamily: "IPv4",
				showType: "wlan0",
				startHidden: false		
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-Remote-Control',
			// uncomment the following line to show the URL of the remote control on the mirror
			//position: 'bottom_left',
			// you can hide this module afterwards from the remote control itself
			config: {
					customCommand: { 
						monitorOnCommand: 'vcgencmd display_power 1', 
						monitorOffCommand: 'vcgencmd display_power 0', 
						monitorStatusCommand: 'if vcgencmd display_power | grep 1 >/dev/null 2>&1; then echo true; else echo false; fi'
					},
					customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
					showModuleApiMenu: true, // Optional, Enable the Module Controls menu
					apiKey: "",         // Optional, See API/README.md for details
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
