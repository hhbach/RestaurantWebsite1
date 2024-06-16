import React, { useContext } from 'react';
import './Contact.css'
import { UserContext } from '../App.js';

const Contact = () => {

    const { isEnglish } = useContext(UserContext); 

    

    return (
        <div className="contact-container">
            {isEnglish && <h1>Contact Us</h1>}
            {!isEnglish && <h1>Liên Hệ</h1>}
            {isEnglish && <h2>Address</h2>}
            {!isEnglish && <h2>Địa Chỉ</h2>}
            <p><a href="https://maps.app.goo.gl/UFwkJntV7Qk5vVbZA">4055 S Arizona STE 8 <br/> Chandler, AZ 85248</a></p>
            <br/>
            <br/>
            {isEnglish && <h2>Phone</h2>}
            {!isEnglish && <h2>Điện Thoại</h2>}

            <p><a href="tel:(480)895-9090">(480)895-9090</a></p>

            <br/>
            {isEnglish && 
            <div>
                <h2>Opening Hours</h2>
                <p>Monday: 11AM - 8PM</p>
                <p>Tuesday: 11AM - 8PM</p>
                <p>Wednesday: 11AM - 8PM</p>
                <p>Thursday: 11AM - 8PM</p>
                <p>Friday: 11AM - 8PM</p>
                <p>Saturday: 11AM - 8PM</p>
                <p>Sunday: 11AM - 8PM</p>
                </div>
            }
            {!isEnglish &&
            <div>
                <h2>Giờ Mở Cửa</h2>
                <p>Thứ Hai: 11AM - 8PM</p>
                <p>Thứ Ba: 11AM - 8PM</p>
                <p>Thứ Tư: 11AM - 8PM</p>
                <p>Thứ Năm: 11AM - 8PM</p>
                <p>Thứ Sáu: 11AM - 8PM</p>
                <p>Thứ Bảy: 11AM - 8PM</p>
                <p>Chủ Nhật: 11AM - 8PM</p>
            </div>
            }

            <p/>
            <p/>
            {isEnglish && <p>For any inquiries, please contact us at:</p>}
            {!isEnglish && <p>Để biết thêm thông tin, vui lòng liên hệ với chúng tôi qua:</p>}
            <p>Email: <a href="mailto:t.huynh1987@gmail.com">t.huynh1987@gmail.com</a></p>
        </div>
    );
}
export default Contact;