import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";


export const MovieDetails = () => {
    const {id} = useParams()

    return (
        <Box>
            {id}
        </Box>
    )
}