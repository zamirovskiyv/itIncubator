import React from "react";

type RatingPropsType = {
    value: 0|1|2|3|4|5;
}

export function Rating(props: RatingPropsType) {
    console.log('Rating === ', props);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(<Star key={i} selected={(props.value >= i) && (props.value <= 5)}/>);
    }

    return (
        <div>
            {stars}
        </div>
    );
}

type StarPropsType={
    selected: boolean;
}

function Star(props: StarPropsType) {
    console.log('Star === ', props);
    if (props.selected) {
        return <span>⭐️ </span>;
    } else {
        return <span>🌟 </span>;
    }
}

// export default Rating;
