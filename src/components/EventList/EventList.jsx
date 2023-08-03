import { useEffect, useState } from "react";
import { EventListItem } from "../EventListItem/EventListItem";
import { fetchEvents } from "./../../services/EventApi"
import { images } from "../../images/images";
export const EventList = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchEvents()
            setEvent(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div>
                {event.map(({ id,date, time, location, title, description }) => (
                    <EventListItem
                        key={id}
                        id={id}
                        photo={images[id]}
                        date={date}
                        time={time}
                        location={location}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </>

    )
}