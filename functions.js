// JavaScript source code

//square//
   document.addEventListener('DOMContentLoaded', function() {
    const sizeInput = document.getElementById('squareSizeInput');
    const drawButton = document.getElementById('drawButton');
    const resultContainer = document.getElementById('square-result');

    function drawCharacterSquare() 
    {
        let numRowsCols = parseInt(sizeInput.value);

      
        resultContainer.innerHTML = '';

        const canvas = document.createElement('canvas');
        
        // --- Настройки для лучшей видимости ---
        const fontSize = 18; // Размер символа
        const padding = 15;  // Отступ от краев
        
        // Расчет размера Canvas
        canvas.width = (fontSize * numRowsCols) + (padding * 2);
        canvas.height = (fontSize * numRowsCols) + (padding * 2);
        
        resultContainer.appendChild(canvas);

        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            // Настройка шрифта
            ctx.font = `${fontSize}px monospace`;
            ctx.fillStyle = 'green';
            ctx.textBaseline = 'top'; // Устанавливаем базовую линию вверху (более предсказуемо для сетки)

            // Начальная позиция для первого символа (верхний левый угол)
            const startX = padding;
            const startY = padding; 
            
            // 4. Рисуем сетку символов
            for (let row = 0; row < numRowsCols; row++) 
            {
                for (let col = 0; col < numRowsCols; col++) 
                {
                    // Вычисляем позицию: умножаем индекс на размер шрифта
                    const textX = startX + (col * fontSize);
                    const textY = startY + (row * fontSize);
                    
                    ctx.fillText('*', textX, textY);
                }
            }

        } else 
            resultContainer.innerHTML = '<p>Ваш браузер не поддерживает Canvas.</p>';
    }

    drawButton.addEventListener('click', drawCharacterSquare);
});

//leftCornerEquilateralTriangle//

function bottomLeftRightAngledTriangle() 
{
    const heightInput = document.getElementById('bottom-left-right-angled-triangle-height');
    const resultDiv = document.getElementById('bottom-left-right-angled-triangle-result');
    const height = parseInt(heightInput.value, 10);

    if (isNaN(height) || height < 1) 
    {
      resultDiv.textContent = '';
      return;
    }

    // Построение треугольника слева: строки с 1, 2, ..., height звездочек
    let lines = [];
    for (let i = 1; i <= height; i++) 
    {
      const stars = Array(i).fill('*').join(' ');
      lines.push(stars);
    }
    resultDiv.textContent = lines.join('\n');
 }

    //rightCornerEquilateralTriangle//

    function makeRow(i) 
 {
    return Array(i).fill('*').join(' ');
 }

    function drawLeftAlignedTriangle(height) {
    const lines = [];
    for (let i = 1; i <= height; i++) {
      lines.push(makeRow(i));
    }
    return lines.join('\\n');
  }

    function drawLeftAlignedTriangleResult() {
    const heightInput = document.getElementById('triangle-height-left');
    const height = parseInt(heightInput.value, 10);
    const leftDiv = document.getElementById('triangle-left-result');

    if (isNaN(height) || height < 1) {
      leftDiv.textContent = '';
      shiftedDiv.textContent = '';
      return;
    }

    leftDiv.textContent = drawLeftAlignedTriangle(height);
  }