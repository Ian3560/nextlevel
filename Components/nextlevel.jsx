import React, { useState, useEffect } from "react";
import "../App.css";

const List = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className="ian-container">
            <div className="ian-card">
                <h2 className="ian-title">Dynamic List Manager</h2>
                <div className="ian-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter an item"
                        className="ian-input"
                    />
                    <button onClick={addItem} className="ian-button">Add Item</button>
                </div>
                <div className="ian-list">
                    {items.length === 0 ? (
                        <p>No Activity added</p>
                    ) : (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
