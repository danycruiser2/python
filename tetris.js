!DOCTYPE html>
<html>
<head>
  <title>Tetris</title>
  <style>
    canvas {
      border: 1px solid #000;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <canvas id="tetrisCanvas" width="240" height="400"></canvas>
  <script>
    const canvas = document.getElementById("tetrisCanvas");
    const context = canvas.getContext("2d");
    const grid = createGrid(10, 20, 20);

    function drawSquare(x, y, color) {
      context.fillStyle = color;
      context.fillRect(x, y, 19, 19);
      context.strokeStyle = "black";
      context.strokeRect(x, y, 19, 19);
    }

    function drawGrid() {
      grid.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          drawSquare(colIndex * 20, rowIndex * 20, col);
        });
      });
    }

    function createGrid(width, height, defaultValue) {
      return Array.from({length: height}, () => Array(width).fill(defaultValue));
    }

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
    }

    function update() {
      // Update game logic here
    }

    function gameLoop() {
      draw();
      update();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();
  </script>
</body>
</html>
