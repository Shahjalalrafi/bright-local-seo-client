import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import headerSvg from '../public/svg/headersvg.svg'

import header from '../public/images/header.png'
import { urlFor } from '../sanity';

const useStyles = makeStyles({
    root: {
        padding: '70px 0 30px 0',
        textAlign: "center"
    },
    heading: {
        color: '#549FBA'
    },
    title: {
        fontWeight: '600',
        padding: '0 70px'
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

const Header = ({header}) => {
    const classes = useStyles()
    console.log(header)
    return (
        <main className={classes.root}>
            <Container>
                <Image src={headerSvg} alt='header' width={50} height={50} />
                <Typography variant='h6' className={classes.heading}>
                    {header[0].heading}
                </Typography>
                <Typography variant='h3' align='center' className={classes.title}>
                    {header[0].title}
                </Typography>
                <Typography variant="subtitle1" align='center' className={classes.desc}>
                   {header[0].description[0].children[0].text}
                </Typography>
                <Button variant="contained" className={classes.btn}>
                    TRY FOR FREE
                </Button>
            </Container>
                <img src={urlFor(header[0].mainImage).url()} alt='trusted team' width={900} height={500} />
                {/* <Image src={header} alt="header" height={600} width={900} className={classes.img} /> */}
        </main>
    );
}

export default Header;