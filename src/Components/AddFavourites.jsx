import React from 'react'

function AddFavourite() {
  return (
    <div>
        <span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="red" 
                class="bi bi-heart-fill" 
                viewBox="0 0 16 16"
            >
                <path 
                    fill-rule="evenodd" 
                    d="M8 14s-5-3.5-5-6c0-2.21 1.79-4 4-4 1.343 0 2.605.66 3.464 1.5C10.395 4.66 11.657 4 13 4c2.21 0 4 1.79 4 4 0 2.5-5 6-5 6z"
                />
            </svg>
        </span>
    </div>
  );
};

export default AddFavourite;