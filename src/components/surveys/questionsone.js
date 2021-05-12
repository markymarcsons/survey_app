
const json = {


        "title": "Subscription Based Crowdfunding Survey --- Page {pageno} of {pagecount}",
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
              "value": 0,
              "text": "Male "
             },
             {
              "value": 1,
              "text": "Female"
             },
             {
              "value": 2,
              "text": "Other"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question2",
            "title": "Which of the following crowdfunding platforms have you ever used?",
            "isRequired": true,
            "hasComment": true,
            "choices": [
             "Patreon",
             "OnlyFans",
             "Subscribestar",
             "Steady",
             "Other",
             "I have never used a crowdfunding platform"
            ],
           },

           {
                "type": "radiogroup",
                "name": "question3",
                "title": "Age",
                "isRequired": true,
                "choices": [
                        {
                        "value": 0,
                        "text": "17 or younger"
                        },
                        {
                        "value": 1,
                        "text": "18 - 20"
                        },
                        {
                        "value": 2,
                        "text": "21 - 29 "
                        },
                        {
                        "value": 3,
                        "text": "30 - 39"
                        },
                        {
                        "value": 4,
                        "text": "40 - 49"
                        },
                        {
                        "value": 5,
                        "text": "50 - 59"
                        },
                        {
                        "value": 6,
                        "text": "60 or older"
                        }
                ]
                },
        
           {
            "type": "checkbox",
            "name": "question4",
            "title": "What kind of content (creators) are you interested in?",
            "isRequired": true,
            "hasComment": true,
        //     "description": "Other (describe)",
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
            ],
            "hasNone": true,
           },           
           

        {
                "type": "rating",
                "name": "question5",
                "title": "Income after taxes in USD",
                "isRequired": true,
                "rateValues": [
                        {
                        "value": 1,
                        "text": "less than 20k"
                        },
                        {
                        "value": 2,
                        "text": "20k-35k"
                        },
                        {
                        "value": 3,
                        "text": "35k-50k"
                        },
                        {
                        "value": 4,
                        "text": "50k-65k"
                        },
                        {
                        "value": 5,
                        "text": "65k-80k"
                        },
                        {
                        "value": 6,
                        "text": "80k-95k"
                        },
                        {
                        "value": 7,
                        "text": "more than 95k "
                        }
                ],
                "rateMax": 7
                
                },
                {
                "type": "radiogroup",
                "name": "question6",
                "title": "What is the highest level of school you have completed or the highest degree you have received?",
                "isRequired": true,
                "choices": [
                        {
                        "value": 1,
                        "text": "Less than high school degree"
                        },
                        {
                        "value": 2,
                        "text": "High school degree or equivalent (e.g., GED)"
                        },
                        {
                        "value": 3,
                        "text": "Some college but no degree"
                        },
                        {
                        "value": 4,
                        "text": "Bachelor degree"
                        },
                        {
                        "value": 5,
                        "text": "Graduate degree"
                        }
                ]
        }
        ]
        },
                      
         
        {
          "name": "page2 (quant1)",
          "title": "Instruction: Please rate the following statements on a scale from strongly disagree [1] to strongly agree [7]",
          "elements": [
           {
            "type": "rating",
            "name": "question7",
            "title": "To receive rewards that I can use to play with",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question8",
            "title": "To receive content related rewards",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question9",
            "title": "To get access to additional content",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question10",
            "title": "To get a special badge next to my username",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question11",
            "title": "To receive acknowledgement from the creator I am supporting ",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question12",
            "title": "To communicate my relationship to this project on social media sites",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question13",
            "title": "To back good content and give creators the opportunity to retain control of their projects",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           }
          ],
          "description": "I would subscribe to creators..."
         },
         {
          "name": "page3 (quant2)",
          "title": "Instruction: Please rate the following statements on a scale from strongly disagree [1] to strongly agree [7]",
          "requiredText": "I would subscribe to creators...",
          "elements": [
           {
            "type": "rating",
            "name": "question14",
            "title": "Because I appreciate the quality of the content",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question15",
            "title": "For philanthropic reasons",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question16",
            "title": "Because I want to help creators with good content, without expecting any compensation ",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question17",
            "title": "Because I deeply enjoy helping creators on subscription based crowdfunding plattforms – even if I have to make sacrifices ",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question18",
            "title": "Because I enjoy the feeling of belonging to a community of other backers",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question19",
            "title": "Because I enjoy interacting with the online community of backers and offer my advice about the project",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           },
           {
            "type": "rating",
            "name": "question20",
            "title": "I would never subscribe to creators",
            "isRequired": true,
            "rateMax": 7,
            "minRateDescription": "(strongly disagree)",
            "maxRateDescription": "(strongly agree)"
           }
          ],
          "description": "I would subscribe to creators..."
         },
         {
          "name": "page4 (qual)",
          "elements": [
           {
            "type": "comment",
            "name": "question21",
            "isRequired": true,
            "title": "How do rewards affect your decision to subscribe to a creator ?"
           },
           {
            "type": "comment",
            "name": "question22",
            "isRequired": true,
            "title": "How does acknowledgement of the creator affect your decision to subscribe to a creator?"
           },
           {
                "type": "comment",
                "name": "question23",
                "isRequired": true,
                "title": "What reasons make you subscribe to creators on crowdfunding platforms (e.g Patreon) ?"
           },
           {
            "type": "comment",
            "name": "question24",
            "isRequired": true,
            "title": "In what ways does the creator's content affect your decision whether to keep or stop subscribing to a creator ?"
           },
           {
            "type": "comment",
            "name": "question25",
            "isRequired": true,
            "title": "In what ways does the community affect your decision whether to keep or stop subscribing to a creator ?"
           },
           {
            "type": "comment",
            "name": "question26",
            "isRequired": true,
            "title": "What reasons would make you stop supporting a creator? "
           }
          ]
         },
        //  {
        //   "name": "pre-test",
        //   "elements": [
        //           {
        //                   "type": "comment",
        //                   "name": "question27",
        //                   "title": "You made it, the survey is almost over! Please fill out the box below for any suggestions or insightful remarks e.g.: Could you understand all the quesitions? Do you think the order of the questions is logical? Anything else that can be improved?  " 
        //           }
        //   ]
        //  }

        ]
       };



export default json;
