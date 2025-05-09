let questionCount = 0;
const questionContainer = document.getElementById('questionContainer');
const sidebar = document.getElementById('sidebar');

function addSidebarButton(index) {
    const btn = document.createElement('button');
    btn.textContent = index;
    btn.onclick = () => scrollToQuestion(index);
    sidebar.insertBefore(btn, sidebar.querySelector('.add-btn') || null);
}

function updateSidebarButtons() {
    sidebar.innerHTML = '';
    for (let i = 1; i <= questionCount; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.onclick = () => scrollToQuestion(i);
        sidebar.appendChild(btn);
    }

    const plus = document.createElement('button');
    plus.textContent = '+';
    plus.onclick = addQuestion;
    sidebar.appendChild(plus);

    const minus = document.createElement('button');
    minus.textContent = '-';
    minus.onclick = removeLastQuestion;
    sidebar.appendChild(minus);
}

function toggleSidebar(visible) {
    const sidebar = document.getElementById('sidebar');
    if (visible) {
        sidebar.style.visibility = 'visible';
        sidebar.style.opacity = '1';
        sidebar.style.pointerEvents = 'auto';
    } else {
        sidebar.style.opacity = '0';
        sidebar.style.visibility = 'hidden';
        sidebar.style.pointerEvents = 'none';
    }
}

function scrollToQuestion(index) {
    const el = document.getElementById(`question-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('toggle-question').addEventListener('change', function () {
    const isChecked = this.checked;
    const questionBlocks = document.querySelectorAll('.question-block');
    const headers = document.querySelectorAll('.question-header');

    headers.forEach(header => {
        header.style.display = isChecked ? 'flex' : 'none';
    });

    questionBlocks.forEach((block, index) => {
        if (isChecked || index === 0) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

    toggleSidebar(isChecked);
});

function toggleQuestionHeaders() {
    const isChecked = document.getElementById('toggle-question').checked;
    const headers = document.querySelectorAll('.question-header input');

    headers.forEach(input => {
        input.style.display = isChecked ? 'block' : 'none';
    });
}

function addQuestion() {
    questionCount++;
    const id = `textarea-${Date.now()}`;
    const isChecked = document.getElementById('toggle-question')?.checked;

    const block = document.createElement('div');
    block.className = 'question-block';
    block.id = `question-${questionCount}`;

    block.innerHTML = `
        <div class="question-header" style="display: ${isChecked ? 'flex' : 'none'};">
            <label style = "font-size: bold">문항 ${questionCount}</label>
            <input type="text" placeholder="지원 동기, 입사 후 포부 등 입력"
            style="display: ${document.getElementById('toggle-question')?.checked ? 'block' : 'none'};"/>
        </div>
        <textarea class="content" id="${id}" maxlength="500" oninput="updateCharCount('${id}')"
          placeholder="내용을 입력해주세요 (최대 500자)"></textarea>
        <div class="char-count" id="${id}-count">0 / 500자</div>
    `;

    questionContainer.appendChild(block);
    updateSidebarButtons();

    block.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function removeLastQuestion() {
    const questions = questionContainer.querySelectorAll('.question-block');
    if (questions.length > 1) {
        questionContainer.removeChild(questions[questions.length - 1]);
        questionCount--;
        updateSidebarButtons();
    }
}

function updateCharCount(id) {
    const textarea = document.getElementById(id);
    const countDiv = document.getElementById(`${id}-count`);
    const length = textarea.value.length;
    countDiv.textContent = `${length} / 500자`;
}

window.onload = () => {
    addQuestion();
}

function openLoadModal() {
    document.getElementById('loadModal').classList.remove('hidden');
}

function closeLoadModal() {
    document.getElementById('loadModal').classList.add('hidden');
}

function toggleSaveMenu() {
    const modal = document.getElementById('saveModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleExportOptions() {
    const options = document.getElementById('export-options');
    options.classList.toggle('hidden');
}