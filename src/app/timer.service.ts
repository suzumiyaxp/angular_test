import { Injectable } from '@angular/core';

// @Injectable({
//    providedIn: 'root'
// })
@Injectable()
export class TimerService {

  nameTimeMap = new Map<string, number>();
  constructor() {
    console.log('创建对象'/* , this */);
  }

  start(name: string, num: number) {
    let startTime = new Date().getTime()
    this.nameTimeMap.set(JSON.stringify([name, num]), startTime)

  }
  end(name: string, num: number) {
    let startTime = (this.nameTimeMap.has(JSON.stringify([name, num])) ? this.nameTimeMap.get(JSON.stringify([name, num])) : 0) as number
    let endTime = new Date().getTime()
    console.log(name + ' 操作耗时:', endTime - startTime);

  }
}
