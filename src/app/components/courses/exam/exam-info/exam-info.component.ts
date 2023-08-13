import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExamService } from 'src/app/service/ExamService';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-exam-info',
  templateUrl: './exam-info.component.html',
  styleUrls: ['./exam-info.component.scss']
})
export class ExamInfoComponent {
  @Input() slug: string = '';
  detailItem: any = {};
  constructor(
    private LoadingService: LoadingService,
    private ExamService: ExamService,
    public dialogRef: MatDialogRef<ExamInfoComponent>,

  ) {}

  ngOnInit(): void {
      this.getDetail();
    }

  getDetail() {
    
    this.LoadingService.setValue(true);
    this.ExamService.getDetail(this.slug).subscribe((response: any) => {
      this.detailItem = response;
      this.LoadingService.setValue(false);
      console.log(this.detailItem);
      
    });
  }


  onSubmit(){

  }

  Close(){
    
  }
}
