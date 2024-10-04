import React from 'react';
import './Header.css'; // Make sure you create or update the CSS file

export default function Header() {
    return (
        <header>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-left">
                    <span>Время работы: 10:00—20:00</span>
                </div>
                <div className="top-bar-right">
                    <a href="tel:+74951203214">+380 095-55-37-913</a>
                    <a href="/callback">Заказать звонок</a>
                </div>
            </div>

            {/* Main Header */}
            <div className="main-header">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="Logo" />
                </div>
                <nav className="main-navigation">
                    <a href="/catalog" className="catalog-btn">
                        <span>Каталог товаров</span>
                    </a>
                    <a href="/about">О компании</a>
                    <a href="/sales">Акции</a>
                    <a href="/hits">Хиты сезона</a>
                    <a href="/new">Новинки</a>
                </nav>

                {/* Right Icons */}
                <div className="header-icons">
                    <a href="/wishlist" className="icon-heart">♡</a>
                    <a href="/compare" className="icon-compare">⎬</a>
                    <a href="/account" className="icon-user">👤</a>
                    <a href="/cart" className="icon-cart">
                        🛒
                        <span>Товаров на сумму</span>
                        <span className="cart-total">2000 грн</span>
                    </a>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Поиск по каталогу" />
                </div>

                {/* Login and Registration buttons */}
                <div className="auth-buttons">
                    <a href="/login" className="login-btn">Вход</a>
                    <a href="/register" className="register-btn">Регистрация</a>
                </div>
            </div>

            {/* Breadcrumb (if needed below) */}
            <nav className="breadcrumb">
                <a href="/">Главная</a> / <a href="/catalog">Каталог</a> / <a href="/category">Farbitex</a>
            </nav>
        </header>
    );
}
