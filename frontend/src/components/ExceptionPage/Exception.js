import React, { useState, useEffect } from "react";
import style from './Exception.module.scss';

const Exception = () => {
    return (
        <section className={style.exception_body}>
            <p className={style.text}>Oops..something went wrong</p>
            <div className={style.container}>
                <div className={style.bg}>
                    <div className={style.light}></div>
                </div>
                <div className={style.ufo}>
                    <div className={style.ufo_bottom}></div>
                    <div className={style.ufo_top}></div>
                    <div className={style.ufo_glass}>
                        <div className={style.alien}>
                            <div className={style.alien_eye}></div>
                        </div>
                    </div>
                </div>
                <div className={style.bed}>
                    <div className={style.mattress}></div>
                </div>
                <div className={style.man}>
                    <div className={style.foot}></div>
                    <div className={style.head}>
                        <div className={style.face}></div>
                        <div className={style.hair}></div>
                    </div>
                    <div className={style.man_body}></div>
                    <div className={style.arm}></div>
                </div>
            </div>  
        </section>
    );
}

export default Exception;