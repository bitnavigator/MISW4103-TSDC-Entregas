Feature: Edit member GHOST

@user1 @web
Scenario: My scenario 1
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sing in
  And I wait for 3 seconds
  And I click members
  And I wait for 2 seconds
  And I click a member
  And I wait for 2 seconds  
  And I enter name "<MEMBER_NAME>"
  And I click save
  And I wait for 3 seconds
  And I click members
  And I wait for 2 seconds
  Then I see new ghost member 