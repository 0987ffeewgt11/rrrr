// Можно добавить дополнительную логику здесь
console.log("Mini App запущена!");

// Пример обработки данных от Telegram
window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
    alert('Main button clicked!');
});
