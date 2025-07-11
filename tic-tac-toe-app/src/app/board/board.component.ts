import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  // FIXME: string and null ???
  squares: any[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;


  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get currentPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.currentPlayer);
      this.xIsNext = !this.xIsNext;
    }
  }


}
