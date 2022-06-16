import React, { useState } from "react";

const useButtonAmd = (active:any = false) => {
    const[isActive, setIsActive] = useState(active);

    return [isActive, setIsActive];
}

export default useButtonAmd;