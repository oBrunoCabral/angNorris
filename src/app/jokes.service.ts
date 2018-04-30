import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Joke} from './shared/Jokes.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JokesService {
    
    // public getJokes(): Array<string>{
    //     let jokes = ['joke1','joke2','joke3'];
    //     return jokes;
    // }

    constructor (private http:Http){}

    public getJokes(): Promise<Joke[]>{
        return this.http.get('https://api.chucknorris.io/jokes/random')
            .toPromise()
            .then((resposta:any)=>resposta.json())
            
    }
}