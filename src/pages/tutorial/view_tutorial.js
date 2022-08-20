import {CompCoverPage} from "../../comps/comp_cover_page";
import React from 'react'
import ReactPlayer from 'react-player/youtube'
export const ViewTutorial = props => {
    return(<>
        <CompCoverPage>
            <ReactPlayer url='https://www.youtube.com/watch?v=6QzcF3xdoF8&ab_channel=PetWard' />
        </CompCoverPage>
    </>);
}