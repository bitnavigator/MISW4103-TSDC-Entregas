Feature: Borrar Tag GHOST 

@user1 @web
Scenario: Como  usuario 1 inicio sesion web GHOST y borro TAG existente
  Given I navigate to page "<URL1>"
  And I wait for 4 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click Sign in->
  And I wait for 2 seconds
  And I click Tags
  And I wait for 2 seconds
  And I Click to edit Tag "<TAG_NAME>"
  And I wait for 2 seconds
  And I click Delete Tag Name
  And I wait for 2 seconds
  And I click Delete to Confirm
  And I click list Tags
  And I wait for 3 seconds
  Then I don´t see New Ghost Tag "<TAG_NAME>"
  
  

  

 


 