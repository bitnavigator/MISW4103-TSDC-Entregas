Feature: Borrar GHOST TAG

@user1 @web
Scenario: Como  usuario 1 inicio sesion web GHOST y edito nombre de TAG
  Given I navigate to page "<URL1>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in->
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  Then I don´t see New Ghost Tag "<TAG_NAME>"
  
  

  

 


 