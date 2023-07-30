import { useState } from 'react';

const GoodButton = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <span className="likeButton" onClick={handleClick}>
                ❤️{count}
            </span>
        </>
    );
};

export default GoodButton;
