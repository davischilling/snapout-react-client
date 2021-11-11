import React from 'react'

type ticket = {
  name: string
  isSoldOut: boolean
  ticketUrl: string
}

type Props = {
  subtitle: string
  date: string
  locationSubtitle: string
  locationUrl: string
  locationText: string
  tickets?: ticket[]
}

export const Event: React.FC<Props> = ({
  subtitle,
  date,
  locationSubtitle,
  locationUrl,
  locationText,
  tickets
}: Props) =>
  <div className="events-row">
    {
      tickets
        ? (
        <>
          <div className="events-date-container events-cell">
              <span className="event-subtitle">{subtitle}</span>
              <span className="event-date">{date}</span>
          </div>
          <div className="events-location-container events-cell">
              <span className="event-subtitle">{locationSubtitle}</span>
              <span className="event-location"><a href={locationUrl}>{locationText}</a></span>
          </div>
          {
            tickets.map(({ name, isSoldOut, ticketUrl }: ticket) => (
              <div className="events-buttons events-cell" key={name}>
                {
                  !isSoldOut
                    ? (
                    <a href={ticketUrl} className="btn">
                        <span className="event-subtitle">{name}</span>
                        <span>Get tickets</span>
                    </a>
                      )
                    : (
                    <div className="events-sold-out">
                        <span className="event-subtitle">{name}</span>
                        <span>Sold out</span>
                    </div>
                      )
                }
              </div>
            ))
          }
        </>
          )
        : (
        <div style={{ marginLeft: '30%' }}>
          <div className="events-date-container events-cell">
            <span className="event-subtitle">{subtitle}</span>
            <span className="event-date">{date}</span>
            </div>
          <div className="events-location-container events-cell">
              <span className="event-subtitle">{locationSubtitle}</span>
              <span className="event-location"><a href={locationUrl}>{locationText}</a></span>
          </div>
        </div>
          )
    }
  </div>
