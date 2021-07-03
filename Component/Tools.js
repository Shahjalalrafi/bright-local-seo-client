import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import svg1 from '../public/svg/svg1.svg'
import svg2 from '../public/svg/svg2.svg'
import svg3 from '../public/svg/svg3.svg'
import svg4 from '../public/svg/svg4.svg'
import svg5 from '../public/svg/svg5.svg'
import svg6 from '../public/svg/svg6.svg'
import svg7 from '../public/svg/svg7.svg'
import svg8 from '../public/svg/svg8.svg'
import men1 from '../public/images/person3.jpeg'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        padding: " 70px 0",
        backgroundColor: "#EAF2F3"
    },
    heading: {
        fontWeight: '600',
        paddingBottom: "50px"
    },
    personDetails: {
        backgroundColor: "white",
        padding: '30px',
        borderRadious: "15px"
    },
    title: {
        color: "#95B450",
        fontStyle : "italic",
        paddingBottom: "20px"
    },
    img: {
        borderRadius: "50%"
    },
    name: {
        color: '#9B9B9B',
        paddingBottom: "5px"
    }
})

const Tools = () => {

    const classes = useStyles()
    const toolces = [
        {
            id: 1,
            svg: svg1,
            title: "Track local rankings"
        },
        {
            id: 2,
            svg: svg2,
            title: "Audit citations"
        },
        {
            id: 3,
            svg: svg3,
            title: "Monitor & grow reviews"
        },
        {
            id: 4,
            svg: svg4,
            title: "View & reply to reviews"
        },
        {
            id: 5,
            svg: svg5,
            title: "White-label reporting"
        },
        {
            id: 6,
            svg: svg6,
            title: "Multi-Location reporting"
        },
        {
            id: 7,
            svg: svg7,
            title: "Integrate GMB Insights"
        },
        {
            id: 8,
            svg: svg8,
            title: "Connect Google Analytics"
        },
    ]
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.heading}>
                    Tools that help you rank higher and grow your local search visibility
                </Typography>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Grid container>
                            {
                                toolces.map(tool => (
                                    <Grid key={tool.id} item xs={12} md={3}>
                                        <Image src={tool.svg} alt={tool.title} />
                                        <Typography variant="body2">
                                            {tool.title}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.personDetails}>
                        <Typography variant="h5" className={classes.title}>
                        "BrightLocal's tools are a must-have for marketers looking to optimize their organic search results."
                        </Typography>
                        <Image src={men1} alt="person" width={100} height={100} className={classes.img} />
                        <Typography variant="body1" className={classes.name}>
                        Nielson Hall
                        </Typography>
                        <Typography variant="body2" className={classes.name}>
                        Head of SEO
                        </Typography>
                        <Typography variant="body2" className={classes.name}>
                        iProspect
                        </Typography>
                        <Typography variant="h5">
                        9.5 out of 10 on Trustpilot
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
            
        </main>
    );
}

export default Tools;