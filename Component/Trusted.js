import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { urlFor } from '../sanity'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        textAlign: 'center'
    },
    title: {
        fontWeight: '600',
        paddingBottom: "20px"
    },
    grid: {
        padding: '10px'
    }
})

const Trusted = ({trusted}) => {
    const classes = useStyles()
    
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant='h5' className={classes.title}>
                    Trusted by top brands, local businesses, and agencies alike
                </Typography>
                <Grid container>
                    {
                        trusted.map(trust => (
                            <Grid item xs={6} md={2} key={trust.id} className={classes.grid}>
                                <img src={urlFor(trust.mainImage).url()} alt='trusted team' width={200} height={150} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}


export default Trusted;