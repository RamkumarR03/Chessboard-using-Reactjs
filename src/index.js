import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pawn from './blackpawn.png';
import WhitePawn from './whitepawn.png';
import Blackhorse from './blackhorse.png';
import Whitehorse from './whitehorse.png';
import Blackelephant from './blackele.png';
import Whiteelephant from './whiteele.png';
import Blackbishop from './blackbishop.png';
import Whitebishop from './whitebishop.png';
import Blackqueen from './blackqueen.png';
import Whitequeen from './whitequeen.png';
import Blackking from './blackking.png';
import Whiteking from './whiteking.png';


function Chessboard(){
  return(
    <div className='chess-container'>
       <h1>ChessBoard</h1>
      <table>
        <tr>
          <td className='odd'><img src={Blackelephant} alt=''></img></td>
          <td className='even'><img src={Blackhorse} alt=''></img></td>
          <td className='odd'><img src={Blackbishop} alt=''></img></td>
          <td className='even'><img src={Blackqueen} alt=''></img></td>
          <td className='odd'><img src={Blackking} alt=''></img></td>
          <td className='even'><img src={Blackbishop} alt=''></img></td>
          <td className='odd'></td>
          <td className='even'><img src={Blackelephant} alt=''></img></td>
        </tr>

        <tr> 
          <td className='even'><img src={Pawn} alt=''></img></td>
          <td className='odd'><img src={Pawn} alt=''></img></td>
          <td className='even'><img src={Pawn} alt=''></img></td>
          <td className='odd'></td>
          <td className='even'><img src={Pawn} alt=''></img></td>
          <td className='odd'><img src={Pawn} alt=''></img></td>
          <td className='even'><img src={Pawn} alt=''></img></td>
          <td className='odd'></td>
        </tr>

       <tr>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'><img src={Pawn} alt=''></img></td>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'></td>
       </tr>

       <tr>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'></td>
       </tr>

       <tr>
        <td className='odd'></td>
        <td className='even'></td>
        <td className='odd'><img src={Whitebishop} alt=''></img></td>
        <td className='even'></td>
        <td className='odd'></td>
        <td className='even'><img src={Pawn} alt=''></img></td>
        <td className='odd'><img src={Blackhorse} alt=''></img></td>
        <td className='even'></td>
       </tr>

       <tr>
        <td className='even'></td>
        <td className='odd'> </td>
        <td className='even'> </td>
        <td className='odd'> </td>
        <td className='even'><img src={WhitePawn} alt=''></img> </td>
        <td className='odd'> </td>
        <td className='even'> </td>
        <td className='odd'> </td>
       </tr>

       <tr> 
          <td className='odd'><img src={WhitePawn} alt=''></img></td>
          <td className='even'><img src={WhitePawn} alt=''></img></td>
          <td className='odd'><img src={WhitePawn} alt=''></img></td>
          <td className='even'><img src={WhitePawn} alt=''></img></td>
          <td className='odd'></td>
          <td className='even'><img src={WhitePawn} alt=''></img></td>
          <td className='odd'><img src={WhitePawn} alt=''></img></td>
          <td className='even'><img src={WhitePawn} alt=''></img></td>
        </tr>

       <tr> 
       <td className='even'><img src={Whiteelephant} alt=''></img></td>
          <td className='odd'><img src={Whitehorse} alt=''></img></td>
          <td className='even'><img src={Whitebishop} alt=''></img></td>
          <td className='odd'><img src={Whitequeen} alt=''></img></td>
          <td className='even'><img src={Whiteking} alt=''></img></td>
          <td className='odd'></td>
          <td className='even'><img src={Whitehorse} alt=''></img></td>
          <td className='odd'><img src={Whiteelephant} alt=''></img></td>
        </tr>



      </table>
    </div>
  )
}
ReactDOM.render(<Chessboard/>,document.getElementById("root"));
