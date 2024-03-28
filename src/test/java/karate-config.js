function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'int';
  }
  var config = {
    env: env,
    myVarName: 'someValue',
    postService: 'https://jsonplaceholder.typicode.com'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
    config.postService = 'http://localhost:3000'
  } else if (env == 'int') {
    // customize
    config.postService = 'https://jsonplaceholder.typicode.com'
  }
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);


  var valueConfig = "default";
  var configAndroid = read("classpath:config/androidConfig.json");
  config.androidConfig = configAndroid[valueConfig];
  return config;
}

[
  {
    "line": 2,
    "elements": [
      {
        "line": 56,
        "name": "[SIT][API][Update Refund Status]Verify API update refund status in case status on MULE \u003d DENIED",
        "description": "",
        "id": "update-refund-status;[sit][api][update-refund-status]verify-api-update-refund-status-in-case-status-on-mule-\u003d-denied",
        "type": "scenario",
        "keyword": "Scenario",
        "steps": [
          {
            "result": {
              "duration": 95681489,
              "status": "passed"
            },
            "line": 57,
            "name": "user create a random tcbRefundTransId",
            "match": {
              "location": "MerchantAcquisitionServicesDefs.userCreateARandomTcbRefundTransId()"
            },
            "keyword": "When "
          },
          {
            "result": {
              "duration": 108429498,
              "status": "passed"
            },
            "line": 58,
            "name": "user verify API response code display equals 200",
            "match": {
              "arguments": [
                {
                  "val": "200",
                  "offset": 45
                }
              ],
              "location": "CommonDefs.verifyResponseCode(int)"
            },
            "keyword": "Then "
          },
          {
            "result": {
              "duration": 570280864,
              "status": "passed"
            },
            "line": 59,
            "name": "user send request to update refund status from TCBPAY with {VALID} token and valid information as below",
            "match": {
              "arguments": [
                {
                  "val": "{VALID}",
                  "offset": 59
                },
                {
                  "val": "valid information",
                  "offset": 77
                }
              ],
              "location": "MerchantAcquisitionServicesDefs.userSendRequestToUpdateRefundStatusFromTCBPAYWithVALIDTokenAndValidInformationAsBelow(String,String,DataTable)"
            },
            "rows": [
              {
                "cells": [
                  "Key",
                  "Value"
                ]
              },
              {
                "cells": [
                  "tcbRefundTransId",
                  "{GET_tcbRefundTransId_CREATE_BEFORE}"
                ]
              },
              {
                "cells": [
                  "partnerRefundTransId",
                  "valid"
                ]
              },
              {
                "cells": [
                  "fundTransfer",
                  "FT21144098185126"
                ]
              },
              {
                "cells": [
                  "paymentChannel",
                  "NAPAS_ACH"
                ]
              },
              {
                "cells": [
                  "currency",
                  "VND"
                ]
              },
              {
                "cells": [
                  "status",
                  "DENIED"
                ]
              },
              {
                "cells": [
                  "receiveBankStatus",
                  "AUTH"
                ]
              },
              {
                "cells": [
                  "errorCode",
                  "COMPLETED"
                ]
              },
              {
                "cells": [
                  "errorMessage",
                  "Thành công"
                ]
              }
            ],
            "keyword": "When "
          },
          {
            "result": {
              "duration": 1676831,
              "status": "passed"
            },
            "line": 70,
            "name": "user verify API response code display equals 200",
            "match": {
              "arguments": [
                {
                  "val": "200",
                  "offset": 45
                }
              ],
              "location": "CommonDefs.verifyResponseCode(int)"
            },
            "keyword": "Then "
          },
          {
            "result": {
              "duration": 37900285,
              "status": "passed"
            },
            "line": 71,
            "name": "user verify API response json data with information as below",
            "match": {
              "location": "CommonDefs.userVerifyResponseJsonDataWithInformationAsBelow(DataTable)"
            },
            "rows": [
              {
                "cells": [
                  "customerId",
                  "code",
                  "message"
                ]
              },
              {
                "cells": [
                  "10202852",
                  "0000",
                  "Success"
                ]
              }
            ],
            "keyword": "Then "
          },
          {
            "result": {
              "duration": 1149245138,
              "status": "passed"
            },
            "line": 74,
            "name": "users check status in DB merchant refund request",
            "match": {
              "arguments": [
                {
                  "val": "merchant refund request",
                  "offset": 25
                }
              ],
              "location": "MerchantAcquisitionServicesDefs.usersCallToDatabaseGetToken(String,DataTable)"
            },
            "rows": [
              {
                "cells": [
                  "REFUND_STATUS"
                ]
              },
              {
                "cells": [
                  "DENIED"
                ]
              }
            ],
            "keyword": "Then "
          }
        ],
        "tags": [
          {
            "name": "@DORDB-192453"
          }
        ]
      }
    ],
    "name": "Update Refund Status",
    "description": "",
    "id": "update-refund-status",
    "keyword": "Feature",
    "uri": "src/test/resources/features/apis/external-api/merchant-acquisition-services/Refund/3_UpdateRefundStatus.feature",
    "tags": [
      {
        "name": "DOB1-671",
        "type": "Tag",
        "location": {
          "line": 1,
          "column": 1
        }
      }
    ]
  }
]
