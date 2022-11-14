Feature: My feature

@user1 @web
Scenario: login ok
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click in sign in
  Then I expect see dashboard page "http://localhost:3001/ghost/#/dashboard"