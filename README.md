Tech Task LuxQuality (Cucumber)

The automation for the https://www.saucedemo.com 
Scenario:
- Given User is located on the main page of saucedemo website
- When User click “Login” button
- Then User should see “Epic sadface: Username is required” error message
  
Follow these steps to set up the project on your local machine and run tests

Clone the Repository To get a local copy of the repository, run the following command: git clone https://github.com/OlgaKuzia/LuxQualityCucumber.git

Navigate to the Project Directory Once cloned, go into the project directory: cd LuxQualityCucumber

Install Dependencies: npm install

Running Tests Run tests: npx wdio --spec features/login.error.feature
