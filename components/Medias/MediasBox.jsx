import { Card } from "flowbite-react";
import React from "react";
import MediaBox from "../Media/MediaBox";

const MediasBox = ({ title, mediasName, medias }) => {
    function MediasBoxLoop({ medias }) {
        return medias.map((media) => (
            <>
                <MediaBox title={title} media={media} />
            </>
        ));
    }

    return (
        <>
            {medias && mediasName ? (
                medias.map((media) => (
                    <>
                        <MediasBoxLoop medias={media[mediasName]} />
                    </>
                ))
            ) : (
                <>
                    <MediasBoxLoop medias={medias} />
                </>
            )}
        </>
    );
};

export default MediasBox;
