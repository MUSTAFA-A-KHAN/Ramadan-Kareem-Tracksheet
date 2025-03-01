let totalQuranPages = 0;

function updateQuranProgress() {
    const pages = document.getElementById('quranPages').value;
    if (pages) {
        totalQuranPages += parseInt(pages);
        document.getElementById('totalQuranPages').innerText = totalQuranPages;
        document.getElementById('quranPages').value = '';
    }
}

function resetSalah() {
    const checkboxes = document.querySelectorAll('.salah-checkboxes input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function addGoodDeed() {
    const goodDeed = document.getElementById('goodDeed').value;
    if (goodDeed) {
        const li = document.createElement('li');
        li.innerText = goodDeed;
        document.getElementById('goodDeedsList').appendChild(li);
        document.getElementById('goodDeed').value = '';
    }
}
