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

//4.rhombus 1//

document.addEventListener('DOMContentLoaded', function () {
    const sideInput = document.getElementById('rhombus-side');
    const rhombusContainer = document.getElementById('rhombus');

    // 1. Определяем функцию drawRhombus так же, как вы определили свою для треугольника
    function drawRhombus() {
        // Получаем размер (сторона = половина высоты ромба)
        let side = parseInt(sideInput.value);

        // Проверка ввода
        if (isNaN(side) || side < 1 || side > 20) {
            rhombusContainer.textContent = "Invalid side length.";
            return;
        }

        let rhombusString = '';
        const char = '*'; // Символ для рисования

        // --- 1. Верхняя половина ромба (включая самую широкую строку) ---
        for (let i = 1; i <= side; i++) {
            // Пробелы: уменьшаются (side - i)
            const spaces = ' '.repeat(side - i);
            // Звезды: увеличиваются (2 * i - 1)
            const stars = char.repeat(2 * i - 1);

            rhombusString += spaces + stars + '\n';
        }

        // --- 2. Нижняя половина ромба (исключая самую широкую строку) ---
        for (let i = side - 1; i >= 1; i--) {
            // Пробелы: увеличиваются (side - i)
            const spaces = ' '.repeat(side - i);
            // Звезды: уменьшаются (2 * i - 1)
            const stars = char.repeat(2 * i - 1);

            rhombusString += spaces + stars + '\n';
        }

        // Обновление вывода
        rhombusContainer.textContent = rhombusString;
    }

    // Делаем функцию доступной глобально, чтобы ее мог вызвать HTML (через onchange="drawRhombus()")
    window.drawRhombus = drawRhombus;

    // Выполнить функцию при первой загрузке
    drawRhombus();
});

//4.rhombus 2//
document.addEventListener('DOMContentLoaded', function () {
    const sideInput = document.getElementById('rhombus-2-side');
    const rhombusContainer = document.getElementById('rhombus-result');

    function drawRhombus2() {
        let side = parseInt(sideInput.value);

        if (isNaN(side) || side < 2 || side > 20) {
            rhombusContainer.textContent = "Please enter a side value between 2 and 20.";
            return;
        }

        let rhombusString = '';
        const spaceChar = ' ';

        // ------------------------------------------------------
        // 1. ВЕРХНЯЯ ПОЛОВИНА (ВКЛЮЧАЯ САМУЮ ШИРОКУЮ СТРОКУ)
        // i идет от 1 до side.
        // ------------------------------------------------------
        for (let i = 1; i <= side; i++) {
            // Пробелы перед символами (уменьшаются)
            const leadingSpaces = spaceChar.repeat(side - i);

            let line = '';

            if (i === 1) {
                // Самая верхняя точка: /\
                line = leadingSpaces + '/' + '\\' + '\n';
            } else {
                // Промежуточные строки и центр: /....\
                // Внутренние пробелы: 2 * (i - 2) + 2, что упрощается до 2 * (i - 1)
                const innerSpaces = spaceChar.repeat(2 * (i - 1));
                line = leadingSpaces + '/' + innerSpaces + '\\' + '\n';
            }

            rhombusString += line;
        }

        // ------------------------------------------------------
        // 2. НИЖНЯЯ ПОЛОВИНА (ОТСТРАНЕНИЕ ОТ ЦЕНТРА)
        // i идет от side - 1 до 1. (Исключаем центральную строку, которая уже нарисована)
        // ------------------------------------------------------
        for (let i = side; i >= 1; i--) {
            // Пробелы перед символами (увеличиваются, т.к. i уменьшается)
            const leadingSpaces = spaceChar.repeat(side - i);

            let line = '';

            if (i === 1) {
                // Самая нижняя точка: \/
                line = leadingSpaces + '\\' + '/' + '\n';
            } else {
                // Промежуточные строки: \..../
                // Пробелы внутри зеркально соответствуют верхней половине
                const innerSpaces = spaceChar.repeat(2 * (i - 1));
                line = leadingSpaces + '\\' + innerSpaces + '/' + '\n';
            }

            rhombusString += line;
        }

        // Обновление вывода
        rhombusContainer.textContent = rhombusString;
    }

    // Делаем функцию доступной глобально
    window.drawRhombus2 = drawRhombus2;
});

/*  chessboard*/
document.addEventListener('DOMContentLoaded', function () {
    const sizeInput = document.getElementById('board-size');
    const boardContainer = document.getElementById('checkerboard');

    // Функция для рисования шахматной доски (N x N)
    function drawCheckerboard() {
        let size = parseInt(sizeInput.value);

        if (isNaN(size) || size < 2 || size > 20) {
            boardContainer.textContent = "Please enter a size between 2 and 20.";
            return;
        }

        let boardString = '';
        const char1 = '+';
        const char2 = '-';

        // Итерируем по строкам (i)
        for (let i = 0; i < size; i++) {
            let rowString = '';

            // Итерируем по столбцам (j)
            for (let j = 0; j < size; j++) {

                // Ключевая логика: Если сумма индексов четная, используем char1, иначе char2
                if ((i + j) % 2 === 0)
                {
                    rowString += char1 + ' '; // Добавляем пробел для разделения символов
                } 
                else
                {
                    rowString += char2 + ' ';
                }
            }

            // Убираем лишний пробел в конце строки
            boardString += rowString.trimEnd() + '\n';
        }

        // Обновление вывода
        boardContainer.textContent = boardString;
    }

    // Делаем функцию доступной глобально
    window.drawCheckerboard = drawCheckerboard;
});

/*PascalsPyramid*/

function printPascalsPyramid()
{
    const rows = document.getElementById("rows").value; // Получаем значение строк
    const triangleContainer = document.getElementById("Pascal_Triangle"); // Находим контейнер для треугольника
    triangleContainer.innerHTML = ''; // Очищаем контейнер перед добавлением нового

    for (let i = 0; i < rows; i++)
    {
        let output = '';
        for (let j = 0; j <= i; j++) 
        {
            output += pascalNumber(i, j) + ' ';
        }
        // Создаем новый элемент абзаца и добавляем его в контейнер
        const p = document.createElement('p');
        p.textContent = output;
        triangleContainer.appendChild(p);
    }
}

function pascalNumber(row, column)
{
    if (column === 0 || column === row)
    {
        return 1;
    }
    else
    {
        return pascalNumber(row - 1, column - 1) +
            pascalNumber(row - 1, column);
    }
}