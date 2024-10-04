import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Категории</h4>
                    <ul>
                        <li>Малярные товары</li>
                        <li>Электрооборудование</li>
                        <li>Спецодежда</li>
                        <li>Для дачи и дома</li>
                        <li>Сезонное</li>
                        <li>Инструмент</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Компания</h4>
                    <ul>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>Новинки</li>
                        <li>Хиты сезона</li>
                        <li>Распродажи</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <ul>
                        <li>+380 095 55-37-913</li>
                        <li>+380 095 55-37-913</li>
                    </ul>
                    <div className="social-icons">
                        <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
                        <a href="#"><img src="vk-icon.png" alt="VK" /></a>
                        <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
                    </div>
                    <p>Соглашение пользователя</p>
                    <p>&copy; Название 2024</p>
                </div>
            </div>
        </footer>
    );
}
