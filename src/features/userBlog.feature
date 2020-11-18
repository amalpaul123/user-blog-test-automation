@Sanity

Feature: To test the blogging functionality

  @SubTest
  Scenario Outline: Verify that the blogging feature workflow is working as expected

    Given the user details are feched successfully with statusCode <statusCode>
    Examples:
    | userName    | statusCode |
    | Delphine    | 200        |