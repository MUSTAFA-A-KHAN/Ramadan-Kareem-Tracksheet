let totalQuranPages = parseInt(localStorage.getItem("totalQuranPages")) || 0;
document.getElementById("totalQuranPages").innerText = totalQuranPages;

// Update Quran progress and store it
function updateQuranProgress() {
    const pages = document.getElementById("quranPages").value;
    if (pages) {
        totalQuranPages += parseInt(pages);
        localStorage.setItem("totalQuranPages", totalQuranPages);
        document.getElementById("totalQuranPages").innerText = totalQuranPages;
        document.getElementById("quranPages").value = "";
    }
}

// Reset Salah checkboxes and clear storage
function resetSalah() {
    const checkboxes = document.querySelectorAll(".salah-checkboxes input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    localStorage.removeItem("salahProgress");
}

// Save Salah checkbox states
function saveSalahProgress() {
    const checkboxes = document.querySelectorAll(".salah-checkboxes input[type='checkbox']");
    let salahProgress = [];
    checkboxes.forEach((checkbox, index) => {
        salahProgress[index] = checkbox.checked;
    });
    localStorage.setItem("salahProgress", JSON.stringify(salahProgress));
}

// Load Salah progress
function loadSalahProgress() {
    let savedProgress = JSON.parse(localStorage.getItem("salahProgress"));
    if (savedProgress) {
        const checkboxes = document.querySelectorAll(".salah-checkboxes input[type='checkbox']");
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = savedProgress[index] || false;
        });
    }
}

// Add Good Deed and store it
function addGoodDeed() {
    const goodDeed = document.getElementById("goodDeed").value;
    if (goodDeed) {
        let goodDeeds = JSON.parse(localStorage.getItem("goodDeeds")) || [];
        goodDeeds.push(goodDeed);
        localStorage.setItem("goodDeeds", JSON.stringify(goodDeeds));

        displayGoodDeeds();
        document.getElementById("goodDeed").value = "";
    }
}

// Load and display saved Good Deeds
function displayGoodDeeds() {
    let goodDeeds = JSON.parse(localStorage.getItem("goodDeeds")) || [];
    const list = document.getElementById("goodDeedsList");
    list.innerHTML = "";

    goodDeeds.forEach((deed, index) => {
        const li = document.createElement("li");
        li.innerText = deed;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            removeGoodDeed(index);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

// Remove Good Deed and update storage
function removeGoodDeed(index) {
    let goodDeeds = JSON.parse(localStorage.getItem("goodDeeds")) || [];
    goodDeeds.splice(index, 1);
    localStorage.setItem("goodDeeds", JSON.stringify(goodDeeds));
    displayGoodDeeds();
}

// Load saved data on page load
document.addEventListener("DOMContentLoaded", function () {
    loadSalahProgress();
    displayGoodDeeds();

    // Add event listeners to save Salah progress when checkboxes are clicked
    const checkboxes = document.querySelectorAll(".salah-checkboxes input[type='checkbox']");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", saveSalahProgress);
    });
});
