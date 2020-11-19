@Regression

Feature: To test the comments endpoint


  @Sanity
  Scenario Outline: Verify that the comments endpoint gives success response

    Given a request is made to comments endpoint with <filter> as <value>
    Then I should get status code 200 correctly

  #valid postId
  Examples:
      | filter  | value | 
      | postId  | 1     |    
      
  @Comments
  Scenario Outline: Verify that the comments enpoint gives success response with valid response body when valid parameters are provided

    Given a request is made to comments endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array
    And the reponse should consist of mandatory field id
    And the reponse should consist of mandatory field <filter>
    And the reponse should consist of mandatory field email

  #valid postId
  Examples:
      | filter  | value | 
      | postId  | 1     | 
 
  @Comments
  Scenario Outline: Verify that an empty response is received from posts call when invalid userId is provided

    Given a request is made to comments endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get an empty array

  #invalid userId
  Examples:
      | filter  | value | 
      | postId  | a     | 


  @Comments
  Scenario Outline: Verify that posts list is non empty when an invalid filter key is provided

    Given a request is made to comments endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array

  #invalid filterparam
  Examples:
      | filter  | value | 
      | dummy   | 1     | 
