
const json = {


        "title": "Survey",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question1",
            "title": "Gender",
            "isRequired": true,
            "choices": [
             {
              "value": "M",
              "text": "Male "
             },
             {
              "value": "F",
              "text": "Female"
             },
             {
              "value": "O",
              "text": "Other"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question2",
            "title": "Which of the following platforms did you use?",
            "isRequired": true,
            "choices": [
             "Patreon",
             "OnlyFans",
             "Kickstarter",
             "GoFundMe",
             "Other",
             {
              "value": "None",
              "text": "None"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question3",
            "title": "What kind of content are you interested in?",
            "isRequired": true,
            "choices": [
             {
              "value": "edu",
              "text": "Educational"
             },
             {
              "value": "ent",
              "text": "Entertainment"
             },
             {
              "value": "expl",
              "text": "Explicit Content"
             },
             {
              "value": "life",
              "text": "Lifestyle / Trends"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question4",
            "title": "Age",
            "isRequired": true,
            "choices": [
             {
              "value": "24",
              "text": "24 and younger"
             },
             {
              "value": "35",
              "text": "25 - 35 "
             },
             {
              "value": "45",
              "text": "36 - 45"
             },
             {
              "value": "60",
              "text": "45 - 60"
             },
             {
              "value": "60+",
              "text": "60 and older"
             }
            ]
           }
          ]
         },
         {
          "name": "page2 (quant1)",
          "elements": [
           {
            "type": "rating",
            "name": "question5",
            "title": "I would subscribe to creators to receive rewards that i can use to play with",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question6",
            "title": "I would subscribe to creators to receive content related rewards",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question7",
            "title": "I would subscribe to creators to get access to additional content",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question8",
            "title": "I would subscribe to creators to get a special badge next to my username",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question9",
            "title": "I would subscribe to creators to receive acknowledgement from the creator i am supporting ",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question10",
            "title": "I would subscribe to creators to communicate my relationship to this project on social media sites",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question11",
            "title": "I would subscribe to creators to back good content and give creators the opportunity to retain control of their projects ",
            "isRequired": true,
            "rateMax": 7
           }
          ],
          "description": "please rate the following questions on a scale from strongly disagree[1] to strongly agree[7]"
         },
         {
          "name": "page3 (quant2)",
          "elements": [
           {
            "type": "rating",
            "name": "question12",
            "title": "I would subscribe to creators Because i appreciate the quality of content",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question14",
            "title": "I would subscribe to content creators for philanthropic reasons",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question15",
            "title": "I would subscribe to creators because i want to help creators with good content, without expecting any compensation ",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question16",
            "title": "I would subscribe to creators because i deeply enjoy helping creators on subscription based crowdfunding plattforms – even if I have to make sacrifices ",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question17",
            "title": "I would subscribe to creators because i enjoy the feeling of belonging to a community of other backers",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question18",
            "title": "I would subscribe to creators because i enjoy interacting with the online community of backers and offer my advice about the project",
            "isRequired": true,
            "rateMax": 7
           },
           {
            "type": "rating",
            "name": "question19",
            "title": "I would not subscribe to creators",
            "isRequired": true,
            "rateMax": 7
           }
          ],
          "description": "please rate the following questions on a scale from strongly disagree[1] to strongly agree[7] "
         },
         {
          "name": "page4 (qual)",
          "elements": [
           {
            "type": "comment",
            "name": "question20",
            "title": "How do rewards affect your decision to subscribe to a creator ?"
           },
           {
            "type": "comment",
            "name": "question21",
            "title": "How does does acknowledgement of the creator affect your descion to subscribe to a creator ?"
           },
           {
            "type": "comment",
            "name": "question22",
            "title": "What reasons would make you stop supporting a creator? "
           },
           {
            "type": "comment",
            "name": "question23",
            "title": "In what way does the creator's content affect your decision wether to keep or stop subscribing to a creator ?"
           },
           {
            "type": "comment",
            "name": "questio24",
            "title": "in what way does the community affect your decision wether to keep or stop subscribing to a creator ?"
           },
           {
            "type": "comment",
            "name": "question25",
            "title": "What reasons make you subscribe to creators on crowdfunding platforms (e.g Patreon) ?"
           }
          ]
         }
        ]
       };



export default json;
