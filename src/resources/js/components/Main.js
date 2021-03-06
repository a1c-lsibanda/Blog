import React, { Component } from 'react'

export class Main extends Component {
    render() {

        var greeting = "";
        var dt = new Date();
        var hour = dt.getHours();
        if (hour >= 1 && hour < 12) {
            greeting = "Good Morning!!";
        }
        if (hour >= 12 && hour < 19) {
            greeting = "Good Afternoon!!";
        } else {
            greeting = "Good Evening!!";
        }

        return (
            <main class="h-full overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">{greeting}</h2>
                     content
                </div>
            </main>
        )
    }
}

export default Main
