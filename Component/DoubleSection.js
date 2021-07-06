import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import side1 from '../public/images/side1.png'
import side2 from '../public/images/side2.png'
import side3 from '../public/images/side3.png'
import side4 from '../public/images/side4.png'
import side5 from '../public/images/side5.png'
import side6 from '../public/images/side6.png'

import { urlFor } from '../sanity'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        backgroundColor: '#F9FAF8'
    },
    heading: {
        color: "#9ABB54",
        paddingTop: '31px'
    },
    grid: {
        margin: '20px 0',
        padding: '30px'
    },
    title: {
        fontWeight: '600',
    },
    img: {
        width: "100%",
        height: '100%'
    }, 
    desc: {
        color: '#252D13',
        padding: '20px 0',
        fontSize: '20px'
    },
    li: {
        fontWeight: "600",
        padding: '10px 0'
    },
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
        marginBottom: '60px'
    },
})

const DoubleSection = ({ doubles }) => {
    const classes = useStyles()


    return (
        <main className={classes.root}>
            <Container>
                <Grid container spacing={5} className={classes.grid} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[0].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[0].title}
                        </Typography>
                        <ul>
                            {
                                doubles[0].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={urlFor(doubles[0].mainImage).url()} alt='trusted team'  className={classes.img} />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                    <img src={urlFor(doubles[1].mainImage).url()} alt='trusted team' className={classes.img} />
                    </Grid>
                    <Grid item xs={12} md={6} alignItems="center">
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[1].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[1].title}
                        </Typography>
                        <ul>
                            {
                                doubles[1].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[2].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[2].title}
                        </Typography>
                        <ul>
                            {
                                doubles[2].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={urlFor(doubles[2].mainImage).url()} alt='trusted team' className={classes.img} />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                    <img src={urlFor(doubles[3].mainImage).url()} alt='trusted team' className={classes.img} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[3].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[3].title}
                        </Typography>
                        <ul>
                            {
                                doubles[3].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[4].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[4].title}
                        </Typography>
                        <ul>
                            {
                                doubles[4].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={urlFor(doubles[4].mainImage).url()} alt='trusted team' className={classes.img} />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                    <img src={urlFor(doubles[5].mainImage).url()} alt='trusted team' className={classes.img} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                            {doubles[5].heading}
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                            {doubles[5].title}
                        </Typography>
                        <ul>
                            {
                                doubles[5].list.map(double => (
                                    <li className={classes.li} key={double.Listfield}>{double.Listfield}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default DoubleSection;