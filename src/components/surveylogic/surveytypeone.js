import React from 'react';
import 'survey-react/survey.css';
import '../../App.css';
import * as Survey from 'survey-react';
import Json from '../surveys/questionsone';
import axios from 'axios';





const Surveyone = ()=>{

    var defaultThemeColors = Survey
        .StylesManager
        .ThemeColors["default"];

    defaultThemeColors["$main-color"] = "#FC0600";
    defaultThemeColors["$main-hover-color"] = "#D3201B";
    defaultThemeColors["$text-color"] = "#000";
    defaultThemeColors["$header-color"] = "#000";
    // defaultThemeColors["$header-background-color"] = "#FF7975";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

    Survey
        .StylesManager
        .applyTheme();


    const sendDataToServer = (rawData) => {

        let questions = [];
        let questionValues = [];
        let rawDataString = JSON.stringify(rawData)

        // insert amount of questions in condition expression of loop
        // n <= amount of questions
        for (let n = 1; n <= 27; n++) {
            let question=`question${n}`;
            questions.push(question)
        }
        
        // pushing awnsers into google sheet
        questions.forEach(question => {
            if(rawData.hasOwnProperty(question)) {
                const value = rawData[question];
                console.log(value);
                questionValues.push(JSON.stringify(value));      
            }
            else {
                questionValues.push('N/D')// pusing N/D for no-awnser
            }
            // alert(questionValues)
        })

        // API call to google sheet
        axios({
            method: 'post',
            url: 'https://v1.nocodeapi.com/markymarcsons/google_sheets/DNVIYetdgiiDWEzW?tabId=Sheet1', 
            data: [[new Date().toLocaleString(), rawDataString].concat(questionValues)],
            params: {}

        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
       
    }
    
    return(
        <div className='surveyContainer'>
            <div className='surveyText'>
                <Survey.Survey
                showCompletedPage= {true}
                json={Json}
                // passing data object onComplete
                onComplete={(data) => {sendDataToServer(data.valuesHash)}}
                />
            </div>
        </div>
    )

}

export default Surveyone;


