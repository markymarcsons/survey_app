
const json = {

        "title": "Survey",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "checkbox",
            "name": "question1",
            "title": "which of the following fits your description?",
            "choices": [
             {
              "value": "A",
              "text": "I am a creator "
             },
             {
              "value": "B",
              "text": "I support creator(s) on a regular basis"
             }
            ],
            "hasOther": true,
            "otherText": "None of the above"
           },
           {
            "type": "comment",
            "name": "question2",
            "title": "What makes you subscribe to creators on crowdunding plattform ?"
           },
           {
            "type": "comment",
            "name": "question3",
            "title": "How do the rewards effect your decision of supporting a creator"
           }
          ]
        },
    {
        "name": "page2",
        "elements": [
            {
            "type": "rating",
            "name": "question4",
            "title": "on scale of 1-7 what is your willingness to support a creator if you don't receive anything in return?",
            "rateMax": 7
         },
         {
          "type": "rating",
          "name": "question5",
          "title": "on scale of 1-7 what is your willingness to support a creator if you receive a signed merchandising item (eg.T-shirt) ",
          "rateMax": 7
         },
         {
          "type": "rating",
          "name": "question6",
          "title": "on scale of 1-7 what is your willingness to support a creator if you receive a 1-on-1 meeting with the creator?",
          "rateMax": 7
         },
         {
          "type": "rating",
          "name": "question7",
          "title": "on scale of 1-7 what is your willingness to support a creator to be part of the community",
          "rateMax": 7
         }
        ]
       }
      ]
      };



export default json;
