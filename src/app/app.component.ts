import { Component } from '@angular/core';
import { threadId } from 'node:worker_threads';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'table-loop';
  filteredResult: any;// results after being filtered
  counter = 0
  spancheck = 0 // to count main piller index 
  headers = ["Main Element", "Sub Element", "Question Title", "Questions", "Attached Doc", "Entity Rating", "CSE Rating", "CSE Feedback"];
  columns = ["mainPiller", "surveySubPillers", "surveyQuestions"]
  result = [{ "mainPiller": "main piller 1", "surveySubPillers": [{ "subPiller": "subPiller 1", "surveyMainPillerId": 6, "isDeleted": false, "surveyQuestions": [{ "question": "Reiciendis nostrum s" }, { "question": "Reiciendis 2" }, { "question": "Reiciendis 3" }], "id": 1 }, { "subPiller": "sub Piller2", "surveyMainPillerId": 6, "isDeleted": false, "surveyQuestions": [{ "question": "Reiciendis nostrum s" }, { "question": "Reiciendis nostrum s" }], "id": 2 }, { "subPiller": "sub piller 3", "surveyMainPillerId": 6, "isDeleted": false, "surveyQuestions": [], "id": 3 }], "id": 6 }, { "mainPiller": "main 2", "surveySubPillers": [{ "subPiller": "الخدمات الأساسية والمساندة", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [], "id": 4 }, { "subPiller": "رأس المال البشري", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [{ "question": "Reiciendis nostrum s", "answerOne": "<p>In aut fugiat, culpa.</p>", "answerTwo": "<p>Tempor unde quas mol.</p>", "answerThree": "<p>Illum, aliquid dolor.</p>", "answerFour": "<p>Est et do culpa dolo.</p>", "answerFive": "<p>Consequuntur eos nih.</p>", "requiredDocOne": "<p>Sit unde qui dolores.</p>", "requiredDocTwo": "<p>Iusto minim officia .</p>", "requiredDocThree": "<p>Et ut nulla consequa.</p>", "requiredDocFour": "<p>Aut pariatur? Et dol.</p>", "requiredDocFive": "<p>Et ut est nemo maxim.</p>", "cardId": 123, "card": { "surveyId": 68, "type": "isDraft", "title": "Sed porro aperiam au", "pillerId": 7, "id": 123 }, "subPillerId": 5, "surveyResponseAnswers": null, "uploadFiles": null, "id": 138 }], "id": 5 }, { "subPiller": "عقود والمشتريات", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [], "id": 6 }, { "subPiller": "المشاريع الرأسمالية", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [], "id": 7 }, { "subPiller": "مبادرات تحقيق الرؤية", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [], "id": 8 }, { "subPiller": "التحول الرقمي والمشاريع التقني", "surveyMainPillerId": 7, "isDeleted": false, "surveyQuestions": [], "id": 9 }], "id": 7 }, { "mainPiller": "القدرات", "surveySubPillers": [{ "subPiller": "بناء القدرات", "surveyMainPillerId": 8, "isDeleted": false, "surveyQuestions": [], "id": 10 }], "id": 8 }, { "mainPiller": "المبادرات", "surveySubPillers": [{ "subPiller": "تصميم المبادرات", "surveyMainPillerId": 9, "isDeleted": false, "surveyQuestions": [], "id": 11 }, { "subPiller": "محفظة المبادرات", "surveyMainPillerId": 9, "isDeleted": false, "surveyQuestions": [], "id": 12 }, { "subPiller": "تنفيذ المبادرات", "surveyMainPillerId": 9, "isDeleted": false, "surveyQuestions": [], "id": 13 }], "id": 9 }, { "mainPiller": "النتائج والأثر", "surveySubPillers": [{ "subPiller": "الأثر المالي", "surveyMainPillerId": 10, "isDeleted": false, "surveyQuestions": [], "id": 14 }, { "subPiller": "مشاركة التجارب", "surveyMainPillerId": 10, "isDeleted": false, "surveyQuestions": [], "id": 15 }], "id": 10 }]
  constructor()
  {
    this.filterResult();
    console.log("after filter", this.result)
  }


  filterResult()
  {
    this.result.forEach(function (value)
    {
      let count = 0
      console.log(value, "this is result")
      value.surveySubPillers.forEach(element =>
      {
        element['pillerSpan'] = element.surveyQuestions.length //rowspan for each subpiller
        count = count + element.surveyQuestions.length
      });

      value["mainSpan"] = count //rowspan for each mainpiller

    
    }
    );

  }
  // method to check if index is < rowspan then dont show that td of mainpiller
  showMain(i, span)
  {
    console.log(i, span)
    this.spancheck++
    if (this.spancheck == 1)
    {
      console.log("first")
      return true
    }
    else if (this.spancheck > span)
    {
      this.spancheck = 0
      return true

    }
    else
    {
      console.log(this.spancheck)
      return false
    }
  }
  // method to check if index is !=0 '0 means the very first index' then dont show that td  of subpiller
  showSub(i, span)
  {
    // console.log(i,span)
    if (i == 0)
    {
      return true
    }
    else
    {
      return false

    }
  }


}
