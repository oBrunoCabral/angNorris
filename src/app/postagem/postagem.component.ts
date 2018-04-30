import { Component, OnInit, OnChanges } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Joke } from '../shared/Jokes.model';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
  providers:[ JokesService ]

})
export class PostagemComponent implements OnInit {

  public jokes: Joke[];
  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    //console.log(this.jokesService.getJokes())

    this.jokesService.getJokes()
      .then((jokes: Joke[])=>{
        this.jokes = jokes;
        console.log(this.jokes)
      })
      .catch((param: any)=>{
        console.log('catch')
      })
  }

  ngOnChanges(){}
  


  // this.jokesService.getJokes()
  //   .then((jokes: Joke[])=>{
  //     this.jokes = jokes;
  //   })
  //   .catch((param:any)=>{
  //     console.log(param);
  //   })

}
