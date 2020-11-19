@Sanity

Feature: To test the blogging functionality

  @SubTest
  Scenario: Verify that the blogging feature workflow is working as expected

    Given the userId is fetched successfully with status code 200 for the user with username as Delphine
    And the posts are fetched successfully with status code 200 for the user using the userId
    And get comments successfully with status code 200 and validate if the emails in the comment section are in the proper format for each post
