import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/ExamService';
import { LessonService } from 'src/app/service/LessonService';
import { LoadingService } from 'src/app/service/loading.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentService } from 'src/app/service/CommentService';
@Component({
  selector: 'app-video-index',
  templateUrl: './video-index.component.html',
  styleUrls: ['./video-index.component.scss']
})
export class VideoIndexComponent {
  detailItem: any = {};
  slug: any = '';
  listComment: any = [];
  sortListComment: any = [];
  safeUrl!: SafeResourceUrl;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  visibleComments: number[] = [];
  constructor(
    private LoadingService: LoadingService,
    private LessonService: LessonService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private CommentService: CommentService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getDetail();
  }

getDetail() {
  
  this.LoadingService.setValue(true);
  this.CommentService.getComment(this.slug).subscribe((response: any) => {
    this.detailItem = response;
    this.listComment = this.detailItem.comments;
    this.sortListComment = this.sortComment();
    console.log('this.listComment', this.sortListComment);
    
    this.LoadingService.setValue(false);
  });
}

toggleVisibleComments(item: any) {
  
  if (this.visibleComments.includes(item.id)) {
    const index = this.visibleComments.indexOf(item.id);
    this.visibleComments.splice(index, 1);
    
  } else {
    this.visibleComments.push(item.id);
  }
}

sortComment(){
  
  var arr = [];
  for (let i = 0; i < this.listComment.length; i++) {
    if (!this.listComment[i].comment_id) {
      this.listComment[i]['child'] = this.getCommentChild(this.listComment[i].id);
      arr.push(this.listComment[i]);
    }    
  }
  return arr;
}

getCommentChild(id: number){
  var arr = [];
  for (let i = 0; i < this.listComment.length; i++) {
    if (this.listComment[i].comment_id == id) {
      arr.push(this.listComment[i])
    }    
  }
  return arr;
}

onSubmit(){

}
}
