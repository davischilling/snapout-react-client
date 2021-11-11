// import { MediaModel } from '@/domain/models'
import { MediaModel } from '@/domain/models'
import {
  appState,
  PageContent, PageTitle
} from '@/presentation/components'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { ReactYouTubeLite } from 'react-youtube-lite'

export const VideoGridSection: React.FC = () => {
  const { medias, sections } = useRecoilValue(appState)
  const mediaSection = sections.find(section => section.entityName === 'medias')

  return (
        <div id="media">
            <br/>
            <br/>
            <PageTitle
                title={mediaSection?.sectionTitle}
                pageStyle={'01'}
                pageTitle={'01'}
            />
            <PageContent>
            {
                medias?.map(({
                  id,
                  youtubeUrlId,
                  videoTitle
                }: MediaModel) => (
                    <div className="col-md-6 col-xs-12 mb-0" key={id} style={{
                      marginBottom: 20, paddingBottom: 30
                    }}>
                        <div className="video-item">
                            <div className="video-media">
                                <div className="yt-lite">
                                    <ReactYouTubeLite
                                        url={`https://www.youtube.com/embed/${youtubeUrlId}`}
                                        title={videoTitle}
                                    />
                                </div>

                            </div>
                            <h2>{videoTitle}</h2>
                        </div>
                    </div>
                ))
            }
            </PageContent>
        </div>
  )
}
