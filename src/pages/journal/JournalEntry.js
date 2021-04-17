import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url('https://wallpapercave.com/wp/wp5633980.jpg')"
                }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Lorem Ipsum</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit, amet consectetur
                </p>
            </div>

            <div className="jornal__entry-date-box">
                <span>Monday</span>
                <h4>25/dec</h4>
            </div>
        </div>
    )
}
