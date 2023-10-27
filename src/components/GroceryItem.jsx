import React, { useState, useEffect } from 'react';

export function GroceryItem({ item, onDelete, onCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(() => {
    const storedCheckedState = localStorage.getItem(`isChecked_${item.id}`);
    return storedCheckedState ? JSON.parse(storedCheckedState) : item.done || false;
  });

  useEffect(() => {
    localStorage.setItem(`isChecked_${item.id}`, JSON.stringify(isChecked));
    if (onCheckboxChange) {
      onCheckboxChange(item.id, isChecked);
    }
  }, [isChecked, item.id, onCheckboxChange]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <li>
        <div>
          <input
            type="checkbox"
            name=""
            id={item.id}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={item.id} style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
            {item.product}
          </label>
        </div>
        <button className="delete" onClick={() => onDelete(item.id)}>
          <i className="fa fa-trash"></i>
        </button>
      </li>
    </div>
  );
}
