Цель('loginCP');

Сценарий('test something',  ({ Я }) => {

});

// in this file you can append custom step methods to 'I' object
Цель('Тестирование сайта хрустальные пазлы');

Сценарий('Вход под тренером', ({ I }) => {
  I.amOnPage('/login');
  Я.вижу('Войти Ваш e-mail Пароль Забыли пароль? Подтверждая, вы соглашаетесь на обработку персональных данных и c политикой конфиденциальности Войти Нет аккаунта? Зарегистрироваться');
  I.fillField('#root > div > div > div > form > div:nth-child(1) > input', "trainer@crystal.com")
  I.fillField('#root > div > div > div > form > div:nth-child(2) > input', 'trainerpass')
  I.click('#checkbox')
  I.click('Войти')
  I.see('ТРЕНЕР')
});
Сценарий('Изменение аватарки', ({ I }) => {
  I.amOnPage('/login');
  I.see('Войти Ваш e-mail Пароль Забыли пароль? Подтверждая, вы соглашаетесь на обработку персональных данных и c политикой конфиденциальности Войти Нет аккаунта? Зарегистрироваться');
  I.fillField('#root > div > div > div > form > div:nth-child(1) > input', "trainer@crystal.com")
  I.fillField('#root > div > div > div > form > div:nth-child(2) > input', 'trainerpass')
  I.click('#checkbox')
  I.click('Войти')

  I.see('Главная страница')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > div:nth-child(3) > div:nth-child(1) > span')
  I.see('Изменить аватарку')
  I.see('Сохранить')
  I.see('Изменить')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > nav > div > svg')
});
Сценарий('Уведомления', ({ I }) => {
  I.amOnPage('/login');
  I.see('Войти Ваш e-mail Пароль Забыли пароль? Подтверждая, вы соглашаетесь на обработку персональных данных и c политикой конфиденциальности Войти Нет аккаунта? Зарегистрироваться');
  I.fillField('#root > div > div > div > form > div:nth-child(1) > input', "trainer@crystal.com")
  I.fillField('#root > div > div > div > form > div:nth-child(2) > input', 'trainerpass')
  I.click('#checkbox')
  I.click('Войти')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > nav > div > svg')
  I.click('#root > div > div > div.Sidebar_wrapper__Wvnnl > aside > nav > ul > li:nth-child(1) > a')
  I.seeInCurrentUrl('/notifications')
});
