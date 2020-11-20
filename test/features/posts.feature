@Regression

Feature: To test the posts endpoint
      
  @Sanity @Users
  Scenario Outline: Verify that the post enpoint gives success response 

    Given a request is made to posts endpoint with <filter> as <value>
    Then I should get status code 200 correctly

  #valid userId
  Examples:
      | filter  | value | 
      | userId  | 1     | 
   
  @Users
  Scenario Outline: Verify that the posts enpoint gives success response with valid response body when valid parameters are provided

    Given a request is made to posts endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array
    And the reponse should consist of mandatory field userId
    And the reponse should consist of mandatory field id

  #valid userId
  Examples:
      | filter  | value | 
      | userId  | 1     | 
 
  @Users
  Scenario Outline: Verify that an empty response is received from posts call when invalid userId is provided

    Given a request is made to posts endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get an empty array

  #invalid userId
  Examples:
      | filter  | value | 
      | userId  | a     | 

  @Users
  Scenario Outline: Verify that posts list is non empty when an invalid filter key is provided

    Given a request is made to users endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array

  #invalid filterparam
  Examples:
      | filter  | value | 
      | dummy   | 1     | 
