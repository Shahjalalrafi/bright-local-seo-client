import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { urlFor } from '../sanity';

const useStyles = makeStyles({
    root: {
        padding: '40px 0',
        backgroundColor: '#EBF3F3',
        textAlign: "center"
    },
    grid: {
        padding: '20px 60px '
    },
    star: {
        height: "100%",
        width:'100%'
    },
    title: {
        fontWeigth: '600'
    }
})

const Ratings = ({ratings}) => {
    const classes = useStyles()
    return ( 
        <main className={classes.root}>
            <Container>
                <Grid container>
                    {
                        ratings.map(rating => (
                            <Grid key={rating._id} item  xs = {12} md={3} className = {classes.grid}>
                                <img src={urlFor(rating.mainImage).url()} alt='trusted team' width={250} height={120} className={classes.img}/>
                                <img src={urlFor(rating.star).url()} alt='trusted team'   width={250} height={50} className={classes.img} />
                                <Typography variant="h6" className={classes.title}>
                                    {rating.rating} star out of 5
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
     );
}
 
export default Ratings;

