import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-exam-form',
  templateUrl: './lesson-exam-form.component.html',
  styleUrls: ['./lesson-exam-form.component.scss']
})
export class LessonExamFormComponent {
  @Output() senData = new EventEmitter();
  @Input() index: number = 0;

  listItem: any = {
    'question': '',
    'type': 0,
    'answers': [{
      'title': '',
      'correct': 0
    },{
      'title': '',
      'correct': 0
    },{
      'title': '',
      'correct': 0
    },{
      'title': '',
      'correct': 0
    }]
  }

  constructor(){}

  hendleQuestion(value:string){
    this.listItem.question = value;
    this.senData.emit(this.listItem);

  }
  
  hendleType(value:string){
    this.listItem.type = value;
    this.senData.emit(this.listItem);

  }

  hendleCheckbox(index: number){
    this.listItem.answers[index].correct = this.listItem.answers[index].correct == 1 ? 0 : 1;
    this.senData.emit(this.listItem);

  }

  hendleAnswer(value:string, index: number){
    let item = {
      'title': value,
      'correct':  this.listItem.answers[index].correct
    }
    this.listItem.answers[index] = item;
    this.senData.emit(this.listItem);
    console.log('item1', item);
    
  }

}
