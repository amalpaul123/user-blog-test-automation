@Sanity

Feature: To test the blogging functionality

  @SubTest
  Scenario Outline: Verify that the blogging feature workflow is working as expected

    Given the userId is fetched successfully for the username <userName>
    Then the posts by the user <userName> are fetched successfuly
    Examples:
    | userName    | statusCode |
    | Delphine    | 200        |