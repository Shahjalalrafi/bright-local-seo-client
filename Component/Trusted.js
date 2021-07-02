import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import img1 from '../public/images/img1.png'
import img2 from '../public/images/img2.png'
import img3 from '../public/images/img3.png'
import img4 from '../public/images/img4.png'
import img5 from '../public/images/img5.png'
import img6 from '../public/images/img6.png'

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

const Trusted = () => {
    const classes = useStyles()

    const trusted = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
        {
            id: 5,
            img: img5
        },
        {
            id: 6,
            img: img6
        },
    ]
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
                                <Image src={trust.img} alt='trusted image' />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Trusted;