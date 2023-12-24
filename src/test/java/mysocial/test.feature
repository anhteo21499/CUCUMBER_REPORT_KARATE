@ANDROID
Feature: aaa

  Background:
    * configure driver = {type: 'android' , start: false, webDriverPath: '/wd/hub' , showProcessLog: true, httpConfig :  { readTimeout :  120000}}
    * driver {webDriverSession: { desiredCapabilities: '#(androidConfig)'}}

    @TEST
  Scenario: aaa
    * screenshot()
    * waitFor("#btnRegisterd").click()
    * delay(3000)
    * screenshot()
    * delay(3000)



