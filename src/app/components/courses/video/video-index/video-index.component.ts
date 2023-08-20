import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/ExamService';
import { LessonService } from 'src/app/service/LessonService';
import { LoadingService } from 'src/app/service/loading.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-index',
  templateUrl: './video-index.component.html',
  styleUrls: ['./video-index.component.scss']
})
export class VideoIndexComponent {
  detailItem: any = {};
  slug: any = '';
  safeUrl!: SafeResourceUrl;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(
    private LoadingService: LoadingService,
    private LessonService: LessonService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getDetail();
  }

getDetail() {
  
  this.LoadingService.setValue(true);
  this.LessonService.getDetail(this.slug).subscribe((response: any) => {
    this.detailItem = response;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(response.link);

    this.LoadingService.setValue(false);
    console.log(this.detailItem);
    
  });
}


onSubmit(){

}
}
