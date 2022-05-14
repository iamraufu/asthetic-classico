import './Featured.css';
import React from 'react';
import logo from '../../Folder/logo.png';
import welcome from '../../Folder/Welcome to.svg';

const Featured = () => {
    return (
        <section className='font-brand featured'>
            <div className="container fw-bold">
            <img src={welcome} alt="" className="img-fluid m-auto d-block pt-5" />
                <img src={logo} alt="" width='200' className="img-fluid m-auto d-block" />
                <p className="P">
                A well-known online-based International platform for cultural segments like singing,  dance, poem writing, recitation, painting, videography/cinematography, photography, filmmaking, playing instruments, and any other form of art.
                </p>
            </div>
        </section>
    );
};

export default Featured;