import { Component } from '@angular/core';
import { TimerService } from './../timer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  timerService: TimerService
  constructor(timerService: TimerService) {
    this.timerService = timerService
  }
  count = 0
  signIn() {
    let count = this.count++
    this.timerService.start('登陆',count)
    console.log('开始登陆..');
    setTimeout(() => {
      console.log('服务器响应: 登陆成功');
      this.timerService.end('登陆',count)
    }, 3000)

  }
  signUp() {
    let count = this.count++
    this.timerService.start('注册',count)
    console.log('开始注册..');
    console.log('服务器响应: 注册成功');
    this.timerService.end('注册',count)
  }

}
