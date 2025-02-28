import React from 'react';
import "./Spinner.css";
const Spinner = () => {
    return (
        <div>
            <div class="loader">
                <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;