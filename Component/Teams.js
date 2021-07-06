import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';;
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { urlFor } from '../sanity'


const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        backgroundColor: "#F9FAF8"
    },
    heading: {
        fontWeight: '600'
    },
    card: {
        height: '600px',
        margin: "20px",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        cursor: "pointer",
        boxShadow: '2px 3px 8px #d2d2d2'
    },
    img: {
        borderRadius: "20px"
    },
    greet: {
        padding: '50px 20px',
        fontWeight: "600"
    },
    name: {
        padding: '0 20px'
    },
    content: {
        transform: 'translateY(-48px)'
    },
    position: {
        fontWeight: '600',
        padding: '0 20px'
    }
})

const Teams = ({ posts }) => {
    const classes = useStyles()

    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.heading} align='center'>
                    Don't just take our word for it...
                </Typography>
                <Grid container>

                    {
                       posts && posts.map(post => (
                            <Grid key={post._id} item xs={12} md={4}>
                                <Link href={`/teams/${post.slug.current}`}>
                                    <div className={classes.card}>
                                        <img src={urlFor(post.mainImage).url()} alt={post.name} width={370} height={300} className={classes.img} />
                                        <div className={classes.content}>
                                            <Typography variant="subtitle1" className={classes.greet}>
                                                {post.body[0].children[0].text}
                                            </Typography>
                                            <Typography variant='body2' className={classes.name}>
                                                {post.name}
                                            </Typography>
                                            <Typography variant='h6' className={classes.position}>
                                                {post.positions}
                                            </Typography>
                                        </div>

                                    </div>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Teams;