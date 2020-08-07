import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes'; 
import {Observable,of} from 'rxjs';

//@Injectable把这个类标记为依赖注入系统的参与者之一
@Injectable({
  //ng generate service命令会通过给@Injectable()装饰器添加provideIn: 'root'元数据的形式，用根注入器将你的服务注册成为提供者。
  providedIn: 'root'
})
//HeroService可以从任何地方获取数据（web服务、本地储存或者一个模拟的数据源）
//HeroService类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖。
export class HeroService {

  constructor() { }

  //用来返回模拟的英雄列表
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]>{
    //of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    return of(HEROES);
  }
}


//注：当你在顶层提供该服务时，angular就会为HeroService创建一个单一的、共享的实例，并把它注册到任何想要它的类上。
