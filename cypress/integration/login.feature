Feature: User Login

    Scenario: User logs in on Laserhub
        Given visitor is on the laserhub login page
        When visitor types the credentials
        And clicks on submit button
        Then visitor logs in successfully 
    