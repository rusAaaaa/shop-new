import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function HomePage() {
    const [inCart, setInCart] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [selectedImage, setSelectedImage] = useState("/images/farbitex.jpg");
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);
    const [showSpecs, setShowSpecs] = useState(false);
    const navigate = useNavigate();

    const relatedProducts = [
        { id: 1, name: 'Краска Farbitex 2', price: '600 грн', image: '/images/related1.jpg' },
        { id: 2, name: 'Краска Farbitex 3', price: '700 грн', image: '/images/related2.jpg' },
    ];

    const handleAddToCart = () => {
        setInCart(true);
        alert(`Товар добавлен в корзину! Количество: ${quantity}`);
    };

    const handleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const handleThumbnailClick = (image) => {
        setSelectedImage(image); // Updates the main product image
    };

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddReview = () => {
        const review = {
            text: newReview,
            rating: rating,
        };
        setReviews([...reviews, review]);
        setNewReview('');
        setRating(0);
    };

    const handleNotifyMe = () => {
        alert('Вы будете уведомлены, когда товар появится в наличии.');
    };

    return (
        <div>
            <Header />
            <div className="product-page">
                <nav className="breadcrumb">
                    <a href="/">Главная</a> / <a href="/catalog">Каталог</a> / <a href="/category">Садово-огородный инвентарь</a> / Farbitex
                </nav>

                <div className="product-details">
                    <div className="product-image">
                        <img src={selectedImage} alt="Краска Farbitex" />
                        <div className="thumbnails">
                            <img src="/images/farbitex-thumbnail1.jpg" alt="Краска Farbitex 1" onClick={() => handleThumbnailClick('/images/farbitex-thumbnail1.jpg')} />
                            <img src="/images/farbitex-thumbnail2.jpg" alt="Краска Farbitex 2" onClick={() => handleThumbnailClick('/images/farbitex-thumbnail2.jpg')} />
                            <img src="/images/farbitex-thumbnail3.jpg" alt="Краска Farbitex 3" onClick={() => handleThumbnailClick('/images/farbitex-thumbnail3.jpg')} />
                        </div>
                    </div>

                    <div className="product-info">
                        <h1>Краска Farbitex Для садовых деревьев</h1>
                        {isAvailable ? (
                            <p className="availability">В наличии</p>
                        ) : (
                            <div className="availability">
                                <p>Нет в наличии</p>
                                <button onClick={handleNotifyMe}>Уведомить меня</button>
                            </div>
                        )}
                        <p className="description">
                            Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка, светостойкая, термостойкая, защита от вредителей.
                        </p>
                        <div className="price">
                            <span className="current-price">500 грн</span>
                            <span className="old-price">720 грн</span>
                        </div>

                        <div className="quantity-selector">
                            <label htmlFor="quantity">Количество:</label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>

                        <button
                            className={`add-to-cart-btn ${inCart ? 'in-cart' : ''}`}
                            onClick={handleAddToCart}
                            disabled={inCart}
                        >
                            {inCart ? 'В корзине' : 'В корзину'}
                        </button>

                        <div className="product-actions">
                            <button
                                className={`wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
                                onClick={handleWishlist}
                            >
                                {isWishlisted ? '♥' : '♡'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="product-extra">
                    <h3 onClick={() => setShowSpecs(!showSpecs)}>
                        Характеристики {showSpecs ? '▲' : '▼'}
                    </h3>
                    {showSpecs && (
                        <table className="product-specs">
                            <tbody>
                                <tr>
                                    <td>Расход:</td>
                                    <td>от 0.15 до 0.18 кг/м2</td>
                                </tr>
                                <tr>
                                    <td>Назначение:</td>
                                    <td>Для деревьев</td>
                                </tr>
                                <tr>
                                    <td>Тип работ:</td>
                                    <td>Наружное</td>
                                </tr>
                                <tr>
                                    <td>Упаковка:</td>
                                    <td>Ведро</td>
                                </tr>
                                <tr>
                                    <td>Время высыхания:</td>
                                    <td>1ч</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="related-products">
                    <h3>Похожие товары</h3>
                    <div className="related-products-list">
                        {relatedProducts.map((product) => (
                            <div key={product.id} className="related-product">
                                <img src={product.image} alt={product.name} />
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <button onClick={() => navigate(`/product/${product.id}`)}>Посмотреть</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reviews-section">
                    <h3>Отзывы</h3>
                    <div className="reviews-list">
                        {reviews.map((review, index) => (
                            <div key={index} className="review">
                                <p>Оценка: {review.rating} звезды</p>
                                <p>{review.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="add-review">
                        <label>
                            Оценка:
                            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                                <option value="0">Выберите оценку</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <textarea
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            placeholder="Напишите отзыв"
                        />
                        <button onClick={handleAddReview}>Добавить отзыв</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
