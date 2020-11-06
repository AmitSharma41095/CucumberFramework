$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp 1/eclipse-workspace/CucumberFramework/CucumberFrameworkPractice/src/main/java/featureFile/UserSteps.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM functionality",
  "description": "",
  "id": "free-crm-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login functionality",
  "description": "",
  "id": "free-crm-functionality;free-crm-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User verifies the title of page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters \"amitsharma41095@yahoo.com\" and \"Test@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CodeFile.user_is_on_Login_page()"
});
formatter.result({
  "duration": 127594596560,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.user_verifies_the_title_of_page()"
});
formatter.result({
  "duration": 14227448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amitsharma41095@yahoo.com",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 45
    }
  ],
  "location": "CodeFile.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3157532591,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 215050130,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.user_verifies_the_Home_page()"
});
formatter.result({
  "duration": 15461880,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.close_the_browser()"
});
formatter.result({
  "duration": 61264161144,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Contacts Functionality",
  "description": "",
  "id": "free-crm-functionality;contacts-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters \"amitsharma41095@yahoo.com\" and \"Test@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User navigates to Contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters First Name: \"\u003cFirstName\u003e\" and Last Name: \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the Company Name: \"\u003cCompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Selects Category: \"\u003cCategory\u003e\" and Status: \"\u003cStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Address - Street Address: \"\u003cStreetadress\u003e\", City: \"\u003cCity\u003e\" , State: \"\u003cState\u003e\" ,Pincode: \"\u003cZipcode\u003e\" and Country: \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User saves the contact",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "free-crm-functionality;contacts-functionality;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "CompanyName",
        "Category",
        "Status",
        "Streetadress",
        "City",
        "State",
        "Zipcode",
        "Country"
      ],
      "line": 24,
      "id": "free-crm-functionality;contacts-functionality;;1"
    },
    {
      "cells": [
        "Amit",
        "Sharma",
        "LTI",
        "Lead",
        "New",
        "D-29",
        "Delhi",
        "Delhi",
        "110059",
        "Australia"
      ],
      "line": 25,
      "id": "free-crm-functionality;contacts-functionality;;2"
    },
    {
      "cells": [
        "Virat",
        "Kohli",
        "RCB",
        "Contact",
        "Active",
        "A-251",
        "Bangalore",
        "Karnataka",
        "416027",
        "India"
      ],
      "line": 26,
      "id": "free-crm-functionality;contacts-functionality;;3"
    },
    {
      "cells": [
        "Kamlesh",
        "Nagarkoti",
        "KKR",
        "Customer",
        "Inactive",
        "F-20",
        "Shimla",
        "Jammu",
        "784584",
        "South"
      ],
      "line": 27,
      "id": "free-crm-functionality;contacts-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Contacts Functionality",
  "description": "",
  "id": "free-crm-functionality;contacts-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters \"amitsharma41095@yahoo.com\" and \"Test@12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User navigates to Contacts tab",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters First Name: \"Amit\" and Last Name: \"Sharma\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the Company Name: \"LTI\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Selects Category: \"Lead\" and Status: \"New\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Address - Street Address: \"D-29\", City: \"Delhi\" , State: \"Delhi\" ,Pincode: \"110059\" and Country: \"Australia\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User saves the contact",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CodeFile.user_is_on_Login_page()"
});
formatter.result({
  "duration": 103183090082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amitsharma41095@yahoo.com",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 45
    }
  ],
  "location": "CodeFile.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 4622638273,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1046227944,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.User_navigates_to_Contacts_tab()"
});
formatter.result({
  "duration": 23528744178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 25
    },
    {
      "val": "Sharma",
      "offset": 47
    }
  ],
  "location": "CodeFile.user_enters_FirstName_and_LastName(String,String)"
});
formatter.result({
  "duration": 17804389988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LTI",
      "offset": 31
    }
  ],
  "location": "CodeFile.user_enters_the_CompanyName(String)"
});
formatter.result({
  "duration": 8105437130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lead",
      "offset": 24
    },
    {
      "val": "New",
      "offset": 43
    }
  ],
  "location": "CodeFile.user_Selects_Category_and_Status(String,String)"
});
formatter.result({
  "duration": 3776248946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D-29",
      "offset": 39
    },
    {
      "val": "Delhi",
      "offset": 53
    },
    {
      "val": "Delhi",
      "offset": 70
    },
    {
      "val": "110059",
      "offset": 88
    },
    {
      "val": "Australia",
      "offset": 110
    }
  ],
  "location": "CodeFile.user_enters_Address_Street_adress_City_State_Zip_code_and_Country(String,String,String,String,String)"
});
formatter.result({
  "duration": 10766564472,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.user_saves_the_contact()"
});
formatter.result({
  "duration": 1023619060,
  "status": "passed"
});
formatter.match({
  "location": "CodeFile.close_the_browser()"
});
