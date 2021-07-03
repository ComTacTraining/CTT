import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { H6 } from 'mui/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    left: 0,
    bottom: 0,
    top: 'auto',
    left: 'auto',
    zIndex: 999,
    padding: '1rem',
    color: 'white',
    textAlign: 'left'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(1)
  },
  item: {
    padding: 0
  },
  icon: {
    color: 'white',
    fontSize: 'small'
  },
}))

const groups = ['Fire Attack', 'Ventilation', 'Exposure', 'RIC', 'Medical']

const Overlay = () => {
  const classes = useStyles()
  const { threeSixtyAssessmentCompleted, faceToFaceRequested } = useSelector(state => state.ai)

  return threeSixtyAssessmentCompleted && !faceToFaceRequested && (
    <div className={classes.root}>
      <div className={classes.backdrop}>
        <H6>Assignments</H6>
        <Divider />
        <List dense={true}>
          {groups.map(group => (
            <ListItem className={classes.item}>
              <ListItemIcon style={{ minWidth: '24px' }}>
                <FiberManualRecordIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={group} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}
export default Overlay