@Regression

Feature: To test the blogging end to end functionalities

  @e2e @email
  Scenario Outline: Verify that the email addresses in comments on a post by a valid user are in proper format

    Given the userId is fetched successfully with status code 200 for the user with <filter> as <value>
    And the posts are fetched successfully with status code 200 for the user using the userId
    Then validate if the emails in the comment section fetched successfully with status code 200 are in the proper format for each post
  
  Examples:
      | filter    | value     | 
      | username  | Delphine  | 
      
      