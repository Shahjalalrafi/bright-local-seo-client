import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import header from '../public/images/header.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0 30px 0',
        textAlign: "center"
    },
    heading: {
        color: '#549FBA'
    },
    title: {
        fontWeight: '600'
    },
    desc: {
        fontWeight: "600",
        padding: '21px 0'
    },
    btn: {
        textAlign: "center",
        color: "white",
        width: '250px',
        backgroundColor: "#9ABB54",
        padding: '10px 0px',
        borderRadius: '30px',
        fontWeight: '600',
        fontSize: "18px",
        backgroundImage: "linear-gradient(-180deg,#accf60 4%,#a3c559 18%,#93b24f 59%,#83a044 100%)",
        marginBottom: '60px'
    },
    img: {
        padding: '40px 0'
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant='h6' className={classes.heading}>
                    Local SEO Tools
                </Typography>
                <Typography variant='h3' align='center' className={classes.title}>
                    An all-in-one platform to monitor, audit, and improve local SEO
                </Typography>
                <Typography variant="subtitle1" align='center' className={classes.desc}>
                    Save time and make smarter decisions with BrightLocal.
                </Typography>
                <Button variant="contained" className={classes.btn}>
                    TRY FOR FREE
                </Button>
            </Container>
                <Image src={header} alt="header" height={600} width={900} className={classes.img} />
        </main>
    );
}

export default Header;