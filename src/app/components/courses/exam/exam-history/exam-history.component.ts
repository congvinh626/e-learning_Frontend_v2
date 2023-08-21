import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/ExamService';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-exam-history',
  templateUrl: './exam-history.component.html',
  styleUrls: ['./exam-history.component.scss']
})
export class ExamHistoryComponent {
  id: any = '';
  detailItem: any = [];
  constructor(
    private LoadingService: LoadingService,
    private ExamService: ExamService,
    private route: ActivatedRoute

  ) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetail();
  }

  getDetail() {
    this.LoadingService.setValue(true);

    this.ExamService.getHistory(this.id).subscribe((response: any) => {
      this.detailItem = response.data;
      this.LoadingService.setValue(false);
    
    });
  }
}
