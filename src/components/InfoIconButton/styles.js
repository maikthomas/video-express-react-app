import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  list: {
    width: 350
  },
  button: {
    margin: theme.spacing(1)
  },
  infoButton: {
    position: 'absolute',
    left: '0',
    bottom: '10px',
    margin: theme.spacing(1),
    borderRadius: '5em',
    height: '50px',
    width: '50px',
    backgroundColor: '#32353A',
    color: '#fff'
  },
  toolTip: {
    position: 'absolute',
    left: '0',
    bottom: '10px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: 'auto',
    marginTop: '6px'
  },
  versionLabel: {
    marginLeft: '15px'
  },
  listItem: {
    paddingTop: '2px'
  }
}));
