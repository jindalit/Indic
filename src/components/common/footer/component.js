import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
    render() {
        return (
            <footer class="sticky-footer">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col-lg-6 col-sm-6">
                            <p class="mt-1 mb-0">&copy; Copyright 2020 <strong class="text-dark">Indic-AI</strong>. All Rights Reserved<br />

                            </p>
                        </div>
                        <div class="col-lg-6 col-sm-6 text-right">
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}