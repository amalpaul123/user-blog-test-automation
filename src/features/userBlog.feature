@Sanity

Feature: To test the blogging functionality

  @SubTest
  Scenario: Verify that the blogging feature workflow is working as expected

    Given the userId is fetched successfully for the user with username as Delphine
    And the posts are fetched successfully for the user using the userId
    And validate if the emails in the comment section are in the proper format for each post
