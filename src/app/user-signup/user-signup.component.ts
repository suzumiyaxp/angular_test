import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers: [TimerService],
})
export class UserSignupComponent {
  timerService: TimerService
  constructor(timerService: TimerService) {
    this.timerService = timerService
  }
  count = 0

  signUp() {
    let count = this.count++
    this.timerService.start('注册', count)
    console.log('开始注册..');
    console.log('服务器响应: 注册成功');
    this.timerService.end('注册', count)
  }

}
