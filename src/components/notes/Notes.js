import React from 'react'

import { NotesAppBar } from './NotesAppBar'

export const Notes = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Lorem ipsum..."
                        className="form-control notes__title-input" />
                </div>

                <div className="form-group">
                    <textarea
                        className="form-control notes__textarea"
                        placeholder="What's happend today?"></textarea>
                </div>

                <div className="notes__image">
                    <img src="https://siaguanta.com/wp-content/uploads/2020/05/que-es-wallpaper1.jpg" />
                </div>
            </div>
        </div>
    )
}
