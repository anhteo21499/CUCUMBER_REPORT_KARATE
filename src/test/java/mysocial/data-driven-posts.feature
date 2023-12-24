@ANDROID
Feature: Verify posts api for mysocial

  Background:
    * configure driver = {type: 'android' , start: false, webDriverPath: '/wd/hub' , showProcessLog: true, httpConfig :  { readTimeout :  120000}}
    * driver {webDriverSession: { desiredCapabilities: '#(androidConfig)'}}

  @TEST
  Scenario Outline: Verify /post/<postId> works
    * screenshot()
    * waitFor("#btnLogin").click()
    * delay(3000)
    * screenshot()
    * delay(3000)


    Examples:
      | postId |
      | 1      |


