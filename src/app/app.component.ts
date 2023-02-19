import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OtherPic';
  photos =[
    {
      url:"https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao.jpg",
      description:"Leão selvagem"
    },
    {
      url:"https://www.petz.com.br/blog/wp-content/uploads/2022/01/curiosidades-sobre-leao2-1280x720.jpg",
      description:"Leão com fundo preto"
    }
  ]
}
