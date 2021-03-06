import { makeStyles } from '@material-ui/core/styles'
import VideoDisplay from 'components/Layout/VideoDisplay'
import Loading from 'components/Loading'
import useVideoPlayer from 'hooks/useVideoPlayer'
import { useRouter } from 'next/router'
import { visitorPlaylist } from 'utils/video'
// import { samplePlaylist } from 'utils/video'

const useStyles = makeStyles(() => ({
  root: {
    '& .video-js.vjs-fill': {
      display: 'block'
    },
  },
}))

const Home = () => {
  const router = useRouter()
  const classes = useStyles()
  const { ref, player } = useVideoPlayer(() => {
    router.push('/signup')
  }, visitorPlaylist())
  return (
    <>
      {!player && (
        <Loading />
      )}
      <VideoDisplay>
        <div className={classes.root} data-testid="videoplayer">
          <div data-vjs-player>
            <video ref={ref} className="video-js vjs-default-skin" />
          </div>
        </div>
      </VideoDisplay>
    </>
  )
}

export default Home