import React from 'react'

import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h5 className="mt-2">
                    <i className="far fa-moon"></i>
                    <span> Matías Báez</span>
                </h5>

                <button className="btn text-white">Logout</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}
