@Regression

Feature: To test the users endpoint

  @Sanity @Users
  Scenario Outline: Verify that user enpoint gives success response

    Given a request is made to users endpoint with <filter> as <value>
    Then I should get status code 200 correctly

  #valid users
  Examples:
      | filter    | value        | 
      | username  | Delphine     | 

  @Users
  Scenario Outline: Verify that user enpoint gives success response with mandatory response fields

    Given a request is made to users endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array
    And the reponse should consist of mandatory field username
    And the reponse should consist of mandatory field id

  #valid users
  Examples:
      | filter    | value        | 
      | username  | Delphine     | 
 
  @Users
  Scenario Outline: Verify that an empty response is recevied from users endpoint when invalid username is provided

    Given a request is made to users endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get an empty array

  #invalid users
  Examples:
      | filter    | value     | 
      | username  | Dummy     | 


  @Users
  Scenario Outline: Verify that a userlist in non empty array is returned from users endpoint when an invalid filter key is provided

    Given a request is made to users endpoint with <filter> as <value>
    Then I should get status code 200 correctly
    And I should get a non empty array

  #invalid key and valid user
  Examples:
      | filter    | value        | 
      | dummy     | Delphine     | 