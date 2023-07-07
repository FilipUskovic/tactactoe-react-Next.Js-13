"use client";
import React from "react";
import { useState } from "react";
import layount from "./loyout.css";


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
    <div className="root">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}







// kORAK 1
{
    /*value pohranjuje vrijednost, a setValue je funkcija koja se može koristiti za promjenu vrijednosti.
   Null proslijeđena useState-u koristi se kao početna vrijednost za ovu varijablu stanja, 
   tako da vrijednost ovdje počinje jednakom null-u.
   */
  }

   // KORAK 1

   {
    /*Sada ćete promijeniti kvadrat tako da prikazuje "X" kada se klikne.
 Zamijenite konzolu.log("kliknuto!"); rukovatelj događajima sa setValue('X');. S
ada vaša Square komponenta izgleda ovako: */
  }

  // KORAK 2.1

{
  /*
Zatim ćete urediti kvadratnu komponentu kako biste primili vrijednost prop od komponente ploče. 
To će zahtijevati uklanjanje vlastitog praćenja stanja vrijednosti Square komponente i onClick potpore gumba: */
}



// KORAK 3.1

// Next, you’ll add the onSquareClick function to the Square component’s props: (KORAK 3)


 // KORAK 3.3
  //Lastly, you will define the handleClick function inside the Board component to update the squares array holding your board’s state:

  //KORAK 3.4

  // Pozivanje funkcije setSquares daje Reactu do znanja da se stanje komponente promijenilo.
  // To će pokrenuti ponovno renderiranje komponenti koje koriste stanje kvadrata (ploča), kao i njenih podređenih komponenti (komponente kvadrata koje čine ploču).


          {/* KORAK 3.2
       
       /Sada ćete povezati onSquareClick prop s funkcijom u komponenti Board koju ćete nazvati handleClick.
Da biste spojili onSquareClick na handleClick, proslijedite funkciju na onSquareClick prop prve Square komponente: */}



{/* 
// KORAK 4
primijetite novu () => sintaksu. Ovdje je () => handleClick(0) 
funkcija strelice, što je kraći način za definiranje funkcija. Kada se klikne na kvadrat, pokrenut će se kod iza => “strelice” pozivajući handleClick(0).
Sada morate ažurirati ostalih osam kvadrata da biste pozvali handleClick iz funkcija strelica koje prosljeđujete. 
Provjerite odgovara li argument za svaki poziv handleClick indeksu ispravnog kvadrata: */}



  // Korak 5 You’ll set the first move to be “X” by default. Let’s keep track of this by adding another piece of state to the Board component:

  //   X je prebrisan slovom O!
// Kada označite kvadrat s X ili O, ne provjeravate prvo ima li kvadrat već vrijednost X ili O. To možete popraviti ranim povratkom. 
// Provjerit ćete ima li kvadrat već X ili O. Ako je kvadrat već popunjen, vratit ćete se funkciji handleClick ranije — prije nego što pokuša ažurirati stanje ploče.

    // Korak 5.1 
    // Svaki put kada se igrač pomakne, xIsNext (booleov) će se okrenuti kako bi se odredilo koji igrač ide sljedeći i stanje igre će biti spremljeno. 
    // 


     // KORAK 6 
//   Sada kada se igrači mogu izmjenjivati, htjet ćete pokazati kada je igra dobivena i kada više nema poteza. 
//   Da biste to učinili, dodajte pomoćnu funkciju nazvanu calculateWinner koja uzima niz od 9 kvadrata, provjerava pobjednika i vraća 'X', 'O' 
//   ili null prema potrebi. Nemojte se previše brinuti o funkciji calculateWinner; nije specifično za React:


// REACP DO KORAK 5
//1.1 Podsjetimo što se događa kada korisnik klikne gornji lijevi kvadrat na vašoj ploči kako bi mu dodao X:
//1.2 Klikom na gornji lijevi kvadrat pokreće se funkcija koju je gumb primio kao svoj onClick prop od Squarea.
//1.3 Square komponenta je primila tu funkciju kao svoj onSquareClick prop od ploče. Komponenta Board definirala je tu funkciju izravno u JSX-u. Poziva handleClick s argumentom 0.
//2 handleClick koristi argument (0) za ažuriranje prvog elementa polja kvadrata iz null u X.
//2.1 Stanje kvadrata komponente ploče je ažurirano, pa se ploča i sva njezina djeca ponovno prikazuju. To uzrokuje promjenu vrijednosti prop komponente Square s indeksom 0 iz null u X.
// Korak 3 Na kraju korisnik vidi da se gornji lijevi kvadrat promijenio iz praznog u X nakon što ga klikne.
