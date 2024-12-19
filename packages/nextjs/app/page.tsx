"use client";

import React from 'react';

const ERC20TokenPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>Взаимозаменяемый токен (ERC20)</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Взаимозаменяемые токены стали основой для управления блокчейн-проектами и переноса ценности внутри
        экосистемы Ethereum. В 2015 году Виталиком Бутериным и Фабианом Фогельштеллером был разработан стандарт
        ERC20, описывающий функционал таких токенов. Мой проект реализует токен стандарта ERC20 без
        использования сторонних библиотек.
      </p>

      <h2 style={{ color: '#4A90E2' }}>Информация о токене</h2>
      <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <li><strong>Имя токена:</strong> "my_erc20_token"</li>
        <li><strong>Тикер токена:</strong> "MET"</li>
        <li><strong>Размерность:</strong> 10<sup>18</sup></li>
      </ul>

      <p style={{ fontSize: '18px', lineHeight: '1.6', fontWeight: 'bold', color: '#D9534F' }}>
        !!! Учитывайте размерность токена !!!
        <br />
        (Для создания/перевода/сжигания 1 токена value должно быть равно 10<sup>18</sup>)
      </p>

      <h2 style={{ color: '#4A90E2' }}>Функционал</h2>

      <h3 style={{ color: '#4A90E2' }}>Минт токенов:</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <code>mint(recipient, value)</code>
        <br />
        recipient - адрес получателя,
        <br />
        value - количество токенов
      </p>

      <h3 style={{ color: '#4A90E2' }}>Перевод токенов:</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <code>transfer(to, value)</code>
        <br />
        to - адрес получателя,
        <br />
        value - количество токенов
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <code>transferFrom(from, to, value)</code> (при наличии разрешения у исполнителя, см. предоставление разрешения)
        <br />
        from - адрес списания,
        <br />
        to - адрес получателя,
        <br />
        value - количество токенов
      </p>

      <h3 style={{ color: '#4A90E2' }}>Предоставление разрешения:</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <code>approve(spender, value)</code>
        <br />
        spender - адрес пользователя, которому предоставляется разрешение,
        <br />
        value - количество токенов, которые может переводить spender
      </p>

      <h3 style={{ color: '#4A90E2' }}>Сжигание токенов:</h3>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <code>burn(account, value)</code> (Может вызвать только владелец контракта)
        <br />
        account - адрес, с которого сожгутся токены,
        <br />
        value - количество сжигаемых токенов
      </p>

      <h3 style={{ color: '#4A90E2' }}>Получение информации:</h3>
      <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
        <li><code>name</code> - возвращает имя токена</li>
        <li><code>symbol</code> - возвращает тикер токена</li>
        <li><code>decimals</code> - возвращает размерность токена</li>
        <li><code>tokenSupply</code> - общее количество выпущенных токенов</li>
        <li><code>balanceOf(owner)</code> - баланс пользователя с адресом owner</li>
        <li><code>allowance(owner, spender)</code> - количество токенов пользователя с адресом owner, которыми может распоряжаться пользователь с адресом spender</li>
      </ul>
    </div>
  );
};

export default ERC20TokenPage;