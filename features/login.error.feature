Feature: Login Error message

  Scenario Outline: check login error message with empty fields
    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then this <message> is displayed

    Examples:
      | message                                                            |
      | Epic sadface: Username is required |
