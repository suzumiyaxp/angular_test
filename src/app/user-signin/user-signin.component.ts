import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
  providers: [TimerService],
})
export class UserSigninComponent {
  timerService: TimerService
  constructor(timerService: TimerService) {
    this.timerService = timerService
  }
  count = 0
  signIn() {
    let count = this.count++
    this.timerService.start('登陆', count)
    console.log('开始登陆..');
    setTimeout(() => {
      console.log('服务器响应: 登陆成功');
      this.timerService.end('登陆', count)
    }, 3000)

  }

}
