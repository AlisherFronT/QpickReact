import React from 'react';
import './map.scss'

const Map = () => {
    return (
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7085288302405!2d74.59343961574642!3d42.87899581016328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb73ef59391dd%3A0xd9a25f1216632551!2zSVQtUlVOIC0g0LDQutCw0LTQtdC80LjRjyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyDQvNC10LbQtNGD0L3QsNGA0L7QtNC90L7Qs9C-INGB0YLQsNC90LTQsNGA0YLQsA!5e0!3m2!1sen!2skg!4v1655889044763!5m2!1sen!2skg"
                    width="475" className='map' height="200" style={{ border: '0', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    );
};

export default Map;