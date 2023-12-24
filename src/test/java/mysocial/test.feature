Feature: aaa

  Background:
    * configure driver = {type: 'android' , start: false, webDriverPath: '/wd/hub' , showProcessLog: true, httpConfig :  { readTimeout :  120000}}
    * driver {webDriverSession: { desiredCapabilities: '#(androidConfig)'}}

  Scenario: aaa
    * screenshot()
    * waitFor("#btnRegister").click()
    * delay(3000)
    * screenshot()
    * delay(3000)



