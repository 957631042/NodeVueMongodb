define({ "api": [
  {
    "type": "post",
    "url": "api/users/login",
    "title": "登陆接口",
    "description": "<p>登陆接口</p>",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-response:",
          "content": "res.send({\n     code: '10000', // 随你喜欢自己设置\n     message: '请先完善您的信息'\n   })\nres.send({\n     code: '10888', // 随你喜欢自己设置\n     message: '登陆成功'\n   })\n   res.send({\n       code: '10808',\n       message: '用户还未注册'\n     })\n   res.send({\n           code: '10101',\n           message: '密码错误'\n         })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "api/user.js",
    "groupTitle": "users",
    "name": "PostApiUsersLogin"
  },
  {
    "type": "post",
    "url": "api/users/register",
    "title": "注册接口",
    "description": "<p>注册接口</p>",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-response:",
          "content": "res.send({\n     code: '10000', // 随你喜欢自己设置\n     message: '请先完善您的信息'\n   })\nres.send({\n     code: '10666', // 随你喜欢自己设置\n     message: '注册成功'\n   })\n   res.send({\n     code: '10606', // 随你喜欢自己设置\n     message: '该用户已注册'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "api/user.js",
    "groupTitle": "users",
    "name": "PostApiUsersRegister"
  }
] });
