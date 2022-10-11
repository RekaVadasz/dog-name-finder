// source: https://codepen.io/madesh-mahadev/pen/LYNLMvN 

import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <div class="loader">
            <div class="loader-dog">

                <div class="loader-dog-body">
                    <div class="loader-dog-tail">
                        <div class="loader-dog-tail">
                            <div class="loader-dog-tail">
                                <div class="loader-dog-tail">
                                    <div class="loader-dog-tail">
                                        <div class="loader-dog-tail">
                                            <div class="loader-dog-tail">
                                                <div class="loader-dog-tail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="loader-dog-torso"></div>
                
                <div class="loader-dog-head">

                    <div class="loader-dog-ears">
                        <div class="loader-dog-ear"></div>
                        <div class="loader-dog-ear"></div>
                    </div>

                    <div class="loader-dog-eyes">
                        <div class="loader-dog-eye"></div>
                        <div class="loader-dog-eye"></div>
                    </div>

                    <div class="loader-dog-muzzle">
                        <div class="loader-dog-tongue"></div>
                    </div>

                </div>

            </div>
        </div>
    )
}
