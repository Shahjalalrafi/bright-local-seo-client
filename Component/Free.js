import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/web.module.css'

const useStyles = makeStyles({
    btn: {
        textAlign: "center",
        color: "white",
        width: '350px',
        backgroundColor: "#9ABB54",
        padding: '10px 0px',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: "18px",
        backgroundImage: "linear-gradient(-180deg,#accf60 4%,#a3c559 18%,#93b24f 59%,#83a044 100%)",
        marginBottom: '60px',
        marginTop: '50px'
    },
    title: {
        color: 'white',
        marginTop: '40px'
    },
    desc: {
        color: 'white',
    }
})

const Free = () => {
    const classes = useStyles()
    return ( 
        <main>
            <Container>
                <div className={styles.free}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" className={classes.title}>
                            Try BrightLocal free for 14 days
                            </Typography>
                            <Typography variant="h6" className={classes.desc}>
                            All features · Unlimited access · No card required
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button className={classes.btn}>
                                START YOUR TRAIL
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </main>
     );
}
 
export default Free;