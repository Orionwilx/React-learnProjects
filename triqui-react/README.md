# Triqui (Tic-Tac-Toe) React Game

A classic Tic-Tac-Toe game built with React and Vite. This project demonstrates the fundamentals of React hooks, state management, and responsive game design.

![Triqui Game Screenshot](./Screenshot%202025-04-06%20134408.png)

## 🎮 Features

- **Interactive Game Board**: Click to place X and O marks
- **Turn Indicator**: Visual display of which player's turn it is
- **Win Detection**: Algorithm to detect winning combinations
- **Draw Detection**: Detects when the game ends in a tie
- **Winner Modal**: Shows the winner or draw with a confetti celebration animation
- **Game Reset**: Button to start a new game at any point
- **Local Storage**: Game state persists across browser refreshes

## 🚀 Technologies Used

- **React 19**: Latest version with hooks for state management
- **Vite**: Fast build tool and development server
- **Local Storage API**: For persisting game state
- **Canvas Confetti**: For victory celebration animations
- **CSS3**: For responsive layout and game styling

## 🛠️ Technical Implementation Details

### Component Structure

- **App.jsx**: Main component that orchestrates the game
- **Square.jsx**: Reusable component for each square on the board
- **WinnerModal.jsx**: Modal displayed when the game ends

### Custom Logic

- **GameLogic.js**: Custom hook handling game state and logic
- **board.js**: Functions for detecting winners and game end
- **useLocalStorage.js**: Custom hook for persistent storage

### State Management

The game manages several pieces of state:

- Board state (array of 9 elements representing the game board)
- Turn state (X or O)
- Winner state (X, O, null for ongoing, or false for a draw)

## 🏃‍♀️ How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`

## 🎯 How to Play

1. The game starts with X's turn
2. Click on an empty square to place your mark
3. Players alternate turns placing X's and O's
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled and no player has 3 in a row, the game ends in a draw
6. Click "Reset el Juego" at any time to start over

## 📚 Key Learnings

- React hooks (`useState`, `useCallback`, `useEffect`) for state management
- Custom React hooks for reusable logic
- Browser Local Storage for persistent data
- Conditional rendering patterns in React
- Game state management and win detection algorithms

## 🔍 Future Improvements

- Add settings to customize player names and marks
- Implement a score tracking system
- Add sound effects for game events
- Add animations for mark placements
- Create an AI opponent with adjustable difficulty

## 📝 License

This project is open-source and available under the MIT License.

---

Created with ❤️ by Wilman Zuleta (orionwilx)

---

# Triqui (Tres en Raya) - Juego en React

Un clásico juego de Tres en Raya construido con React y Vite. Este proyecto demuestra los fundamentos de los hooks de React, gestión de estado y diseño de juegos responsivo.

## 🎮 Características

- **Tablero de Juego Interactivo**: Haz clic para colocar las marcas X y O
- **Indicador de Turno**: Muestra visualmente de qué jugador es el turno
- **Detección de Victoria**: Algoritmo para detectar combinaciones ganadoras
- **Detección de Empate**: Detecta cuando el juego termina en empate
- **Modal de Ganador**: Muestra el ganador o empate con una animación de confeti
- **Reinicio de Juego**: Botón para comenzar un nuevo juego en cualquier momento
- **Almacenamiento Local**: El estado del juego persiste a través de recargas del navegador

## 🚀 Tecnologías Utilizadas

- **React 19**: Última versión con hooks para gestión de estado
- **Vite**: Herramienta de compilación rápida y servidor de desarrollo
- **API de Local Storage**: Para persistencia del estado del juego
- **Canvas Confetti**: Para animaciones de celebración de victoria
- **CSS3**: Para diseño responsivo y estilo del juego

## 🏃‍♀️ Cómo Ejecutar

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en `http://localhost:5173`

## 🎯 Cómo Jugar

1. El juego comienza con el turno de X
2. Haz clic en un cuadrado vacío para colocar tu marca
3. Los jugadores alternan turnos colocando X y O
4. El primer jugador en conseguir 3 marcas en una fila (horizontal, vertical o diagonal) gana
5. Si todos los cuadrados están llenos y ningún jugador tiene 3 en fila, el juego termina en empate
6. Haz clic en "Reset el Juego" en cualquier momento para volver a empezar

## 📚 Aprendizajes Clave

- Hooks de React (`useState`, `useCallback`, `useEffect`) para la gestión del estado
- Hooks personalizados de React para lógica reutilizable
- Almacenamiento Local del navegador para datos persistentes
- Patrones de renderizado condicional en React
- Gestión del estado del juego y algoritmos de detección de victoria

## 🔍 Mejoras Futuras

- Añadir configuraciones para personalizar nombres de jugadores y marcas
- Implementar un sistema de seguimiento de puntuación
- Añadir efectos de sonido para eventos del juego
- Añadir animaciones para colocación de marcas
- Crear un oponente IA con dificultad ajustable

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

Creado con ❤️ por Wilman Zuleta (orionwilx)
