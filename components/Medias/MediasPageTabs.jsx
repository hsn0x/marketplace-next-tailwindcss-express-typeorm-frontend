import { Card, Tabs } from "flowbite-react";
import React from "react";
import MediasBox from "./MediasBox";
import { useSelector } from "react-redux";

const MediasPageTabs = ({ authUser }) => {
    const profile = useSelector(({ auth }) => auth.profile);

    return (
        <div>
            {profile && (
                <Card>
                    <Tabs.Group aria-label="Pills" style="pills">
                        <Tabs.Item active={true} title="All">
                            <div className="grid grid-cols-4 gap-2">
                                <MediasBox
                                    title="Profile Covers"
                                    medias={profile.images || []}
                                />
                                <MediasBox
                                    title="Profile Avatars"
                                    medias={profile.avatars || []}
                                />
                                <MediasBox
                                    title="Markets Covers"
                                    mediasName="images"
                                    medias={profile.Markets || []}
                                />
                                <MediasBox
                                    title="Markets Avatars"
                                    mediasName="avatars"
                                    medias={profile.Markets || []}
                                />
                                <MediasBox
                                    title="Products Images"
                                    mediasName="images"
                                    medias={profile.Products || []}
                                />
                            </div>
                        </Tabs.Item>
                        <Tabs.Item active={true} title="Images">
                            <div className="grid grid-cols-4 gap-2">
                                <MediasBox
                                    title="Profile Covers"
                                    medias={profile.images || []}
                                />
                                <MediasBox
                                    title="Markets Covers"
                                    mediasName="images"
                                    medias={profile.Markets || []}
                                />
                                <MediasBox
                                    title="Products Images"
                                    mediasName="images"
                                    medias={profile.Products || []}
                                />
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Videos">Videos</Tabs.Item>
                        <Tabs.Item title="Avatars">
                            <div className="grid grid-cols-4 gap-2">
                                <MediasBox
                                    title="Profile Avatars"
                                    medias={profile.avatars || []}
                                />
                                <MediasBox
                                    title="Markets Avatars"
                                    mediasName="avatars"
                                    medias={profile.Markets || []}
                                />
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                </Card>
            )}
        </div>
    );
};

export default MediasPageTabs;
