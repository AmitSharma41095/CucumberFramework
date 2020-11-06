Feature: Free CRM functionality

Scenario: Free CRM login functionality
Given User is on Login page
Then User verifies the title of page
When User enters "amitsharma41095@yahoo.com" and "Test@12345"
And User clicks on login button
Then User verifies the Home page
And close the browser

Scenario Outline: Contacts Functionality
Given User is on Login page
When User enters "amitsharma41095@yahoo.com" and "Test@12345"
And User clicks on login button
Then User navigates to Contacts tab
And User enters First Name: "<FirstName>" and Last Name: "<LastName>"
And User enters the Company Name: "<CompanyName>"
And User Selects Category: "<Category>" and Status: "<Status>"
And User enters Address - Street Address: "<Streetadress>", City: "<City>" , State: "<State>" ,Pincode: "<Zipcode>" and Country: "<Country>"
Then User saves the contact
And close the browser

Examples:
|FirstName	|LastName	|CompanyName	|Category	|Status	|Streetadress|City	|State	|Zipcode	|Country	|
|Amit		|Sharma		|LTI			|Lead		|New	|D-29		 |Delhi	|Delhi	|110059		|Australia	|
|Virat		|Kohli		|RCB			|Contact	|Active	|A-251	|Bangalore|Karnataka|416027		|India		|
|Kamlesh	|Nagarkoti	|KKR			|Customer	|Inactive|F-20	|Shimla	|Jammu	|784584			|South		|

