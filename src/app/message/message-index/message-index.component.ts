import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Pusher from 'pusher-js';
import { AccountService } from 'src/app/service/AccountService';
import { MessageService } from 'src/app/service/MessageService';
import { ShareService } from 'src/app/service/ShareService';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastrcustomService } from 'src/app/service/toastrcustom';

@Component({
  selector: 'app-message-index',
  templateUrl: './message-index.component.html',
  styleUrls: ['./message-index.component.scss']
})
export class MessageIndexComponent {
  detailItem: any = {};
  slug: any = '';
  sendmess: string = '';
  messages: any = [];
  constructor(
    private LoadingService: LoadingService,
    // private LessonService: LessonService,
    private route: ActivatedRoute,
    // private sanitizer: DomSanitizer,
    private MessageService: MessageService,
    private ToastrcustomService: ToastrcustomService,
    private ShareService: ShareService,
    private accountService: AccountService
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.getMessages()
    const userInfo = this.accountService.getUserInfo();
   
    Pusher.logToConsole = true;

    // var pusher = new Pusher('75863e98639024fd7f30', {
    //   cluster: 'ap1'
    // });

    // var pusher = new Pusher("app_key", { channelAuthorization: { endpoint: "/pusher_auth.php"}  });
    var pusher = new Pusher("75863e98639024fd7f30", {
      authEndpoint: `http://127.0.0.1:8000/api/channels/authorize`,
      cluster: 'ap1',
      // 'encrypted': 'true',

      auth: {
        headers: {
          "Authorization": "Bearer " + userInfo.token,
          "Access-Control-Allow-Origin": "*"
        }
      }
    });
    
    var channel = pusher.subscribe('presence-chat');
    channel.bind('send-message', function(data: any) {
            alert(JSON.stringify(data));

    });

    // var presenceChannel = pusher.subscribe("presence-example");
    // presenceChannel.bind("pusher:subscription_succeeded", function () {
    //   var me = presenceChannel.members.me;
    //   var userId = me.id;
    //   var userInfo = me.info;
      
    // });

    
    // var channel = pusher.subscribe('private-room2');

    // channel.bind('message', function(data: any) {
    //   alert(JSON.stringify(data));
    // });


    // channel.bind('pusher:subscription_succeeded', function(data: any) {
    //   alert(JSON.stringify(data));
    // });

   
  }

  getMessages() {

    this.LoadingService.setValue(true);
    this.MessageService.getMessageRoom().subscribe((response: any) => {
      this.detailItem = response;
      console.log('this.detailItem', this.detailItem);
      
      this.LoadingService.setValue(false);
    });
  }


  onSubmit() {
    this.LoadingService.setValue(true);
    let item = {
      'content': this.sendmess
    }
    this.MessageService.createMessage(item).subscribe((data: any) => {
      // if (data.statusCode == 200) {
        this.ToastrcustomService.showSuccess('Thêm bình luận thành công !!!');
        this.detailItem.push(data.message)
       console.log('this.detailItem1232', this.detailItem);
       
        this.LoadingService.setValue(false);
      // } else {
      //   this.ToastrcustomService.showSuccess(data.message);
      //   this.LoadingService.setValue(false);

      // }

    });
  }

}
