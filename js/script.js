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
