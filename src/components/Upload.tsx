import React, { Dispatch, SetStateAction } from "react";

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>,
}

export const Upload = ({setOpen}: Props) => {
    return(
        <div>Upload</div>
    )
}