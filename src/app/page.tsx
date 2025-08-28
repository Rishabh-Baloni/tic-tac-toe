"use client";

import React, { useState } from "react";
import MainMenu from "../components/MainMenu";
import GameBoard from "../components/GameBoard";
import TurnIndicator from "../components/TurnIndicator";
import StatusBanner from "../components/StatusBanner";
import ScoreTracker from "../components/ScoreTracker";
import { useGameContext } from "../context/GameContext";
import { checkWinner, checkDraw } from "../utils/gameLogic";
import { getBestMove } from "../utils/minimax";
// ...existing code...
import MarkerSelect from "../components/MarkerSelect";
import Modal from "../components/Modal";
import Confetti from "../components/Confetti";
import AIThinking from "../components/AIThinking";
import PlayerNameForm from "../components/PlayerNameForm";

export default function Home() {
  const {
    mode,
    setMode,
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    status,
    setStatus,
    winningLine,
    setWinningLine,
  } = useGameContext();

  const [aiThinking, setAiThinking] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [xMarker, setXMarker] = useState("✖️");
  const [oMarker, setOMarker] = useState("⭕");
  const [selectingMarkers, setSelectingMarkers] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [xName, setXName] = useState("Player X");
  const [oName, setOName] = useState("Player O");
  const [enteringNames, setEnteringNames] = useState(false);

  React.useEffect(() => {
    if (mode === "pvai" && currentPlayer === "O" && !status) {
      setAiThinking(true);
      setTimeout(() => {
        const move = getBestMove([...board]);
        handleCellClick(move);
        setAiThinking(false);
      }, 500);
    }
    // eslint-disable-next-line
  }, [currentPlayer, mode, status]);

  React.useEffect(() => {
    if (status === "X") setXScore(xScore + 1);
    if (status === "O") setOScore(oScore + 1);
    // eslint-disable-next-line
  }, [status]);

  React.useEffect(() => {
    if (status && status !== "draw") {
      setShowModal(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1200);
    } else if (status === "draw") {
      setShowModal(true);
    }
  }, [status]);

  function handleCellClick(idx: number) {
    if (board[idx] || status || aiThinking) return;
    if (window.navigator.vibrate) {
      window.navigator.vibrate(30);
    }
    const newBoard = [...board];
    newBoard[idx] = currentPlayer;
    setBoard(newBoard);
    const { winner, line } = checkWinner(newBoard);
    if (winner) {
      setStatus(winner);
      setWinningLine(line);
    } else if (checkDraw(newBoard)) {
      setStatus("draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }

  function handlePlayAgain() {
    setShowModal(false);
    setMode(mode);
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setStatus(null);
    setWinningLine(null);
  }

  function handleMainMenu() {
    setShowModal(false);
    setMode(null);
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setStatus(null);
    setWinningLine(null);
  }

  function handleResetScore() {
    setXScore(0);
    setOScore(0);
  }

  if (!mode) {
    return <MainMenu onSelectMode={(mode) => { setMode(mode); setEnteringNames(true); }} />;
  }

  if (enteringNames) {
    return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0C0A1D] via-[#0C0A1D] to-[#1a093e]" style={{background: 'linear-gradient(120deg, #0C0A1D 0%, #0C0A1D 60%, #1a093e 100%)'}}>
  <h1 className="text-5xl font-extrabold mb-8 text-black drop-shadow-[0_2px_6px_white] dark:text-white dark:drop-shadow-[0_2px_6px_black]">
          Tic-Tac-Toe
        </h1>
        <PlayerNameForm
          isAI={mode === "pvai"}
          onSubmit={(x, o) => {
            setXName(x);
            setOName(o);
            setEnteringNames(false);
          }}
        />
      </div>
    );
  }

  if (selectingMarkers) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0C0A1D] via-[#0C0A1D] to-[#1a093e]" style={{background: 'linear-gradient(120deg, #0C0A1D 0%, #0C0A1D 60%, #1a093e 100%)'}}>
        <h1 className="text-6xl font-extrabold font-sans mb-8 tracking-wide text-white drop-shadow-lg">Tic-Tac-Toe</h1>
        <div className="flex flex-col gap-8 items-center w-full max-w-2xl">
          <MarkerSelect player="X" selected={xMarker} onSelect={setXMarker} />
          <MarkerSelect player="O" selected={oMarker} onSelect={setOMarker} />
        </div>
        <button
          className="mt-10 px-10 py-5 bg-gradient-to-r from-[#00F6FF] to-[#FF00C1] text-white text-2xl font-bold rounded-2xl shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300"
          onClick={() => setSelectingMarkers(false)}
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
  <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-2xl mx-auto px-4 py-8 overflow-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0C0A1D] via-[#0C0A1D] to-[#1a093e]" style={{background: 'linear-gradient(120deg, #0C0A1D 0%, #0C0A1D 60%, #1a093e 100%)'}}>
    <Confetti show={showConfetti} />
  <h1 className="text-4xl font-extrabold font-sans mb-4 tracking-wide text-white drop-shadow-lg text-center">Tic-Tac-Toe</h1>
  <div className="w-full max-w-md flex flex-col items-center gap-4">
      <ScoreTracker
  xScore={xScore}
  oScore={oScore}
  onReset={handleResetScore}
  xName={xName}
  oName={oName}
      />
      <TurnIndicator
  currentPlayer={currentPlayer}
  xMarker={xMarker}
  oMarker={oMarker}
  name={currentPlayer === "X" ? xName : oName}
      />
      <GameBoard
        board={board}
        onCellClick={handleCellClick}
        winningLine={winningLine}
        disabled={!!status || (mode === "pvai" && currentPlayer === "O")}
  xMarker={xMarker}
  oMarker={oMarker}
  currentPlayer={currentPlayer}
      />
      {mode === "pvai" && currentPlayer === "O" && aiThinking && <AIThinking show={true} />}
      <StatusBanner
        status={status}
        marker={
          status === "X"
            ? xMarker
            : status === "O"
            ? oMarker
            : undefined
        }
        name={status === "X" ? xName : status === "O" ? oName : undefined}
      />
    </div>
    <Modal
      open={showModal}
      title={
        status === "draw"
          ? "It's a Draw!"
          : `${status === "X" ? xName : oName} Wins!`
      }
      onClose={handlePlayAgain}
    >
      <div className="flex gap-6 justify-center w-full">
        <button
          className="px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#0096c7] text-white rounded-2xl shadow-xl border-2 border-[#00F6FF] hover:scale-105 hover:brightness-110 active:scale-95 transition font-bold text-xl"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
        <button
          className="px-8 py-4 bg-gradient-to-r from-[#FF00C1] to-[#c700ff] text-white rounded-2xl shadow-xl border-2 border-[#FF00C1] hover:scale-105 hover:brightness-110 active:scale-95 transition font-bold text-xl"
          onClick={handleMainMenu}
        >
          Main Menu
        </button>
      </div>
    </Modal>
  </div>
  );
}
