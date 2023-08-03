/* eslint-disable react/prop-types */
import { images } from "../../images/images"

export const EventListItem = ({id,date,time,location,title,description}) => {
    return (
        <>
            <img src={images[id]} alt="photo"></img>
            <p>{date}{time}{location}</p>
            <h4>{title}</h4>
            <p>{description}</p>
        </>
    )
}