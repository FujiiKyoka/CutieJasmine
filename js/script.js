document.addEventListener('DOMContentLoaded', () => {
  const tagButtons = document.querySelectorAll('.tag-button');
  const recipeCards = document.querySelectorAll('.recipe-card');

  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      // ボタンのアクティブ切り替え
      tagButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedTag = button.dataset.tag;
      recipeCards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        // ALL または タグ一致で表示
        if (selectedTag === 'ALL' || tags.includes(selectedTag)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 初期表示で ALL タグを選択
  const allBtn = document.querySelector('.tag-button[data-tag="ALL"]');
  if (allBtn) allBtn.click();
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton1");
  const checklist = document.getElementById("checklist1");

  toggleButton.addEventListener("click", () => {
    const isVisible = checklist.style.display === "block";
    checklist.style.display = isVisible ? "none" : "block";
    toggleButton.textContent = isVisible ? "2日目プラン 🙈" : "2日目プラン 🙉";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton2");
  const checklist = document.getElementById("checklist2");

  toggleButton.addEventListener("click", () => {
    const isVisible = checklist.style.display === "block";
    checklist.style.display = isVisible ? "none" : "block";
    toggleButton.textContent = isVisible ? "持ち物 🙈" : "持ち物 🙉";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton3");
  const checklist = document.getElementById("checklist3");

  toggleButton.addEventListener("click", () => {
    const isVisible = checklist.style.display === "block";
    checklist.style.display = isVisible ? "none" : "block";
    toggleButton.textContent = isVisible ? "買う物 🙈" : "買う物 🙉";
  });
});



