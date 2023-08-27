import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/service/ExamService';
import { LessonService } from 'src/app/service/LessonService';
import { LoadingService } from 'src/app/service/loading.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommentService } from 'src/app/service/CommentService';
import { ToastrcustomService } from 'src/app/service/toastrcustom';
import { ShareService } from 'src/app/service/ShareService';
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
  boxComment: number[] = [];
  username: string = '';
  comment: string = '';
  sendComment = {
    id: null,
    title: '',
    lesson_id: 0,
    comment_id: null,
  }
  isCreate: boolean = true;
  test: any = [];
  constructor(
    private LoadingService: LoadingService,
    private LessonService: LessonService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private CommentService: CommentService,
    private ToastrcustomService: ToastrcustomService,
    private ShareService: ShareService,
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getDetail();
    this.username = JSON.parse(localStorage.getItem('setUserInfo') || 'null').username;
    // this.ShareService.pageMain.subscribe(response => this.test = response);
    this.test = this.ShareService.getData();
    console.log('this.data', this.test);
    
  }

  formatCode() {
    this.sendComment = {
      id: null,
      title: '',
      lesson_id: 0,
      comment_id: null,
    }
  }
  getDetail() {

    this.LoadingService.setValue(true);
    this.CommentService.getComment(this.slug).subscribe((response: any) => {
      this.detailItem = response;
      this.listComment = this.detailItem.comments;
      this.sortListComment = this.sortComment();
      this.sendComment.lesson_id = response.id;

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

  togglebBoxComment(id: any, isCreate: boolean) {
    this.isCreate = isCreate;
    if (this.boxComment.includes(id)) {
      const index = this.boxComment.indexOf(id);
      this.boxComment.splice(index, 1);

    } else {
      this.boxComment.push(id);
    }
  }

  sortComment() {

    var arr = [];
    for (let i = 0; i < this.listComment.length; i++) {
      if (!this.listComment[i].comment_id) {
        this.listComment[i]['child'] = this.getCommentChild(this.listComment[i].id);
        arr.push(this.listComment[i]);
      }
    }
    return arr;
  }

  getCommentChild(id: number) {
    var arr = [];
    for (let i = 0; i < this.listComment.length; i++) {
      if (this.listComment[i].comment_id == id) {
        arr.push(this.listComment[i])
      }
    }
    return arr;
  }

  hendleComment(value: string) {
    this.sendComment.title = value;
  }

  hendleCommentEdit(value: string, id: any) {
    this.sendComment.title = value;
    if (this.isCreate == false) {
      this.sendComment.id = id;
    }
  }

  onAnswer(id: any) {
    if (this.isCreate) {
      this.sendComment.comment_id = id;
      this.onSubmit();
    } else {
      this.editComment();

    }
    this.togglebBoxComment(id, true);
  }

  onSubmit() {
    this.LoadingService.setValue(true);

    this.CommentService.createComment(this.sendComment).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Thêm bình luận thành công !!!');
        this.getDetail();
        this.formatCode();
        this.togglebBoxComment(this.sendComment.id, true);
        
        this.LoadingService.setValue(false);
      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);

      }

    });
  }

  editComment() {
    this.LoadingService.setValue(true);

    this.CommentService.updateComment(this.sendComment).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Thêm bình luận thành công !!!');
        this.getDetail();
        this.formatCode();
        this.LoadingService.setValue(false);
        this.togglebBoxComment(this.sendComment.id, true);

      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);

      }

    });
  }

  deleteItem(id: number){
    this.LoadingService.setValue(true);

    this.CommentService.deleteComment(id).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Xóa bình luận thành công !!!');
        this.getDetail();
        this.LoadingService.setValue(false);
      } else {
        this.ToastrcustomService.showSuccess(data.message);
        this.LoadingService.setValue(false);
      }
    });
  }
}
