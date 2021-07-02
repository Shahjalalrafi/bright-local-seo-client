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
        margin: '20px 0'
    },
    title: {
        fontWeight: '600',
    },
    desc: {
        color: '#252D13',
        padding: '20px 0',
        fontSize: '20px'
    },
    li: {
        fontWeight: "600",
        padding: '5px 0'
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

const DoubleSection = () => {
    const classes = useStyles()

    const ckeckers = [
        'Monitor rankings at city or postal code level',
        'Compare rankings for 100s of locations in one report',
        'Benchmark rankings vs competitors',
        'Uncover localized search volumes so you know the best keywords to target'
    ]
    const grids = [
        'See how much local search visibility you’re really claiming',
        'Spot opportunities to outrank competitors',
        'Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric',
        'Identify spam in Google My Business profiles'
    ]
    const opportunities = [
        'Analyze 300+ data points in minutes – without lifting a finger',
        'Quickly identify areas for improvement',
        'Get benchmarks against your top-ranking competitors',
        'Win more pitches and impress existing clients with white-label audits '
    ]
    const competitions = [
        'Discover the GMB categories used by top-ranking competitors',
        'See how you stack up vs. the competition against the most important local ranking factors that affect local rankings',
        'Identify duplicate listings with ease',
        'Make more informed decisions with 3x more data than what GMB Insights provides'
    ]
    const citations = [
        'Discover new citation building opportunities',
        'Identify harmful duplicate or inaccurate citations that need fixing',
        'Spy on your competitors to see where they’re listed, and you’re not',
        'Track week-on-week citation growth'
    ]
    const reputations = [
        'Monitor all the important review sites in a single dashboard',
        'Generate reviews with email and SMS campaigns',
        'Reply directly to Google and Facebook reviews from within the platform',
        'Convert more website visitors with an easy-to-install reviews widget'
    ]
    return (
        <main className={classes.root}>
            <Container>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                        LOCAL SEARCH RANK CHECKER
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Know where you rank, and what to focus on
                        </Typography>
                        <ul>
                            {
                                ckeckers.map(checker => (
                                    <li className={classes.li} key={checker}>{checker}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side1} alt='side image' />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Image src={side2} alt='side image' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                        LOCAL SEARCH GRID
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Put your rankings on the map
                        </Typography>
                        <ul>
                            {
                                grids.map(grid => (
                                    <li className={classes.li} key={grid}>{grid}</li>
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
                        LOCAL SEO AUDITS
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Spot optimization opportunities instantly
                        </Typography>
                        <ul>
                            {
                                opportunities.map(opprtunity => (
                                    <li className={classes.li} key={opprtunity}>{opprtunity}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side3} alt='side image' />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Image src={side4} alt='side image' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                        GOOGLE MY BUSINESS AUDIT
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Uncover the GMB insights to leapfrog the competition
                        </Typography>
                        <ul>
                            {
                                competitions.map(competition => (
                                    <li className={classes.li} key={competition}>{competition}</li>
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
                        CITATION TRACKER
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Easily track and manage local citations
                        </Typography>
                        <ul>
                            {
                                citations.map(citation => (
                                    <li className={classes.li} key={citation}>{citation}</li>
                                ))
                            }
                        </ul>
                        <Button color="primary" className={classes.btn}>
                            START YOUR 14 DAY FREE TRAIL
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side5} alt='side image' />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Image src={side6} alt='side image' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.heading}>
                        REPUTATION MANAGER
                        </Typography>
                        <Typography variant='h5' className={classes.title}>
                        Get more reviews and grow your reputation
                        </Typography>
                        <ul>
                            {
                                reputations.map(reputation => (
                                    <li className={classes.li} key={reputation}>{reputation}</li>
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