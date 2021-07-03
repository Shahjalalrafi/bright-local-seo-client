import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ratings1 from '../public/images/ratings1.png'
import ratings2 from '../public/images/ratings2.png'
import ratings3 from '../public/images/ratings3.png'
import ratings4 from '../public/images/ratings4.png'
import star from '../public/images/star.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        backgroundColor: '#EBF3F3',
        textAlign: "center"
    },
    grid: {
        padding: '40px '
    },
    img: {
        height: "100%",
        width:'100%',
        paddign: '30px 0'
    },
    star: {
        height: "100%",
        width:'100%'
    },
    title: {
        fontWeigth: '600'
    }
})

const Ratings = () => {
    const classes = useStyles()
    const ratings = [
        {
            id: 1,
            img: ratings1,
            star: star,
            display: '4.4 stars'
        },
        {
            id: 2,
            img: ratings2,
            star: star,
            display: '4.8 stars'
        },
        {
            id: 3,
            img: ratings3,
            star: star,
            display: '4.4 stars'
        },
        {
            id: 4,
            img: ratings4,
            star: star,
            display: '4.4 stars'
        },
    ]
    return ( 
        <main className={classes.root}>
            <Container>
                <Grid container>
                    {
                        ratings.map(rating => (
                            <Grid key={rating.id} item  xs = {12} md={3} className = {classes.grid}>
                                <Image src={rating.img} alt='rating'  className={classes.img}/>
                                <Image src={rating.star} alt='star' className={classes.star} />
                                <Typography variant="h6" className={classes.title}>
                                    {rating.display} out of 5
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

