import { useState } from "react";

export default function Intro() {
    return (
        <>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder="Please, enter your name:"/>
            </div>
            <div>
                <label htmlFor="purpose">Purpose of writing: </label>
                <input type="text" placeholder="Please, enter the purpose for writing this letter:"/>
            </div>
        </>
    )
}