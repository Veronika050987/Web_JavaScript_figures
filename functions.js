// JavaScript source code

//1. square//
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

//2.leftBottomCornerRightAngledTriangle//

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

//3.Upper left right-angled triangle//

function upperLeftRightAngledTriangle()
{
    const height = document.getElementById('upper-left-and-right-angled-triangle-height').value;
    const resultDiv = document.getElementById('upper-left-and-right-angled-triangle-result');
    
    let result = '';

    // Рисуем первый треугольник
    for (let i = height; i > 0; i--) 
    {
        result += '* '.repeat(i) + '\n';
    }
    result += '\n'; // добавляем пустую строку между треугольниками

    // Рисуем второй треугольник
    for (let i = 0; i < height; i++) 
    {
        result += ' '.repeat(i * 2) + '* '.repeat(height - i) + '\n';
    }

    resultDiv.textContent = result;
}

    //4.Bottom right right-angled triangle//
function bottomRightRightAngledTriangle() 
{
    const rows = document.getElementById('triangle-rows').value;
    const triangleDiv = document.getElementById('triangle');
    let triangle = '';

    // Генерация треугольника
    for (let i = 0; i < rows; i++)
    {
        // Добавление пробелов перед звездочками
        const spaces = ' '.repeat(rows - i - 1);
        const stars = '*'.repeat(i + 1);
        triangle += spaces + stars + '\n';
    }

    // Обновление вывода
    triangleDiv.textContent = triangle;
}