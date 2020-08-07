import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

// import {HEROES} from '../mock-heroes';

//导入HeroService服务
import {HeroService} from '../hero.service';

@Component({

  //selector用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件。
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})

export class HeroesComponent implements OnInit {

  //这是一句简单的声明
  heroes: Hero[];

  //参数heroService同时做了两件事，1.声明一个私有属性，2.把它标记为一个HeroService的注入点
  //当angular创建HeroesComponent时，依赖注入系统就会把heroService参数设置为HeroService的单例对象
  constructor(private heroService: HeroService) {
    
  }

  //ngOnInit是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
  ngOnInit(): void {
    this.getHeroes();
  }

  //右边的这个Hero表示的是数据类型。
  selectedHero : Hero;

  onSelect(hero:Hero): void{this.heroService.getHeroes();
    this.selectedHero = hero;
  }

  //创建一个方法，方法里边通过heroService实例调用了HeroService服务里边的getHeroes()方法。
  getHeroes(): void{
    //this.heroService.getHeroes()的结果是一个Observable<Hero>的对象。
    //subscribe()方法把这个英雄数组传给这个回调函数，改函数把英雄数组赋值给组件的this.heroes属性。
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
