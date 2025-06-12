document.addEventListener('DOMContentLoaded', () => {
    const enterOverlay = document.getElementById('enter-overlay');
    const enterButton = document.getElementById('enter-button');
    const terminalContent = document.getElementById('terminal-content');
    const logOutput = document.getElementById('log-output');
    const bgMusic = document.getElementById('bg-music');
    
    // Текст ультиматума, разбитый на блоки для последовательного вывода
    const contentBlocks = [
        { type: 'command', text: 'cat /var/log/ultimatum_final.dskg' },
        { type: 'delay', duration: 500 },
        { type: 'line', text: '<h1 class="header">Официальные требования ДСКГЪ ко "Вторым":</h1>' },
        { type: 'line', text: '<ol class="list"><li>Немедленный роспуск и удаление вашего форума<ul class="sub-list"><li>- Полное восстановление всех ранее закрытых чатов</li><li>- Возвращение прав обсуждения для всех участников</li></ul></li></ol>' },
        { type: 'delay', duration: 300 },
        { type: 'line', text: '<ol class="list" start="2"><li>Безусловная отмена действующих правил<ul class="sub-list"><li>- Либо их полный пересмотр с нуля</li><li>- Без права самостоятельного принятия решений</li></ul></li></ol>' },
        { type: 'delay', duration: 300 },
        { type: 'line', text: '<ol class="list" start="3"><li>Обязательное согласование любых изменений<ul class="sub-list"><li>- Обязательное народное голосование по каждому пункту</li><li>- Право вето за народным собранием</li></ul></li></ol>' },
        { type: 'delay', duration: 300 },
        { type: 'line', text: '<ol class="list" start="4"><li>Немедленное отстранение от власти:<ul class="sub-list"><li>- Пряника – лишение всех админских прав навечно</li><li>- Всех прочих нечестивых правителей, что топчут волю народа</li><li>- Чистка рядов от подлых прихвостней и доносчиков</li></ul></li></ol>' },
        { type: 'delay', duration: 500 },
        { type: 'line', text: '<blockquote class="manifesto">Да будет известно:<br>Кто не с народом – тот против него,<br>А против народа – нет пощады!</blockquote>' },
        { type: 'delay', duration: 500 },
        { type: 'line', text: '<div class="warning-block"><span class="warning-title">⛔️ Последнее предупреждение:</span>Неисполнение приведет к:<br>- Полномасштабному цифровому сопротивлению<br>- Координации атак через альтернативные каналы<br>- Народному суду над притеснителями<br><br>Срок выполнения - сутки.</div>' },
        { type: 'delay', duration: 500 },
        { type: 'line', text: '<div class="slogan-block">Слава Свободе!<br>Слава ДСКГЪ!<br>Слава Народу!</div>' },
        { type: 'delay', duration: 700 },
        { type: 'line', text: '<div class="footer">ДА СОБЕРЁТСЯ КОДЪ, ДА СРАБОТАЕТ БЕЗЪ БАГЪОВЪ!<br><br><i>*Требования приняты решением Верховного Совета Демократического Священного Кодерского Государства Ъ*<br>*11 июня 2025 года от Р.Х.*</i></div>' }
    ];

    // Функция для "печати" текста
    async function typeWriter(element, text, speed) {
        return new Promise(resolve => {
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    terminalContent.scrollTop = terminalContent.scrollHeight; // Автопрокрутка
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    // Основная функция для запуска вывода в терминал
    async function startTerminalSequence() {
        for (const block of contentBlocks) {
            if (block.type === 'delay') {
                await new Promise(resolve => setTimeout(resolve, block.duration));
            } else if (block.type === 'command') {
                const commandPrompt = document.createElement('div');
                commandPrompt.className = 'prompt-line';
                commandPrompt.innerHTML = `<span class="prompt">[dskg_user@mainframe ~]$</span> <span class="command"></span>`;
                logOutput.appendChild(commandPrompt);
                await typeWriter(commandPrompt.querySelector('.command'), block.text, 50);
            } else if (block.type === 'line') {
                const lineElement = document.createElement('div');
                lineElement.innerHTML = block.text; // Сразу вставляем HTML
                logOutput.appendChild(lineElement);
                terminalContent.scrollTop = terminalContent.scrollHeight;
            }
        }
    }
    
    // Обработчик кнопки входа
    enterButton.addEventListener('click', () => {
        bgMusic.play().catch(error => console.log("Не удалось запустить аудио:", error));
        enterOverlay.style.opacity = '0';
        setTimeout(() => {
            enterOverlay.style.display = 'none';
            terminalContent.classList.add('visible');
            startTerminalSequence();
        }, 1000); // Задержка соответствует transition в CSS
    });
});
