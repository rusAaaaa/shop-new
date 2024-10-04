import React, { useState } from 'react';
import './CartPage.css';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Краска Farbitex',
            price: 500,
            quantity: 1,
            image: '/images/farbitex.jpg',
        },
        {
            id: 2,
            name: 'Кисть малярная',
            price: 100,
            quantity: 2,
            image: '/images/brush.jpg',
        }
    ]);

    // Увеличение количества товара
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Уменьшение количества товара
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    // Удаление товара из корзины
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Подсчет общей суммы корзины
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Цена: {item.price} грн</p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                                <button className="remove-item-btn" onClick={() => removeItem(item.id)}>Удалить</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h2>Итого: {calculateTotal()} грн</h2>
                    <button
                        className="checkout-btn"
                        disabled={cartItems.length === 0}
                    >
                        Оформить заказ
                    </button>
                </div>
            )}
        </div>
    );
}
