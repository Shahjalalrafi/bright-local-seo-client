import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';;
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';

import right from '../public/images/right.png'
import wrong from '../public/images/wrong.png'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        padding: '70px 0'
    },
    heading: {
        fontWeight: '600',
        padding: '10px 200px',
    },
    desc: {
        padding: '10px'
    },
    tableHead: {
        backgroundColor: "#6854BA"
    },
    tableCell: {
        color: 'white'
    },
    buttonSection: {
        backgroundColor: "#6854BA",
        borderRadius: "25px",
        width: '200px',
        margin: 'auto',
        marginBottom: "15px",
    },
    btnleft: {
        color: "white",
        fontWeight: "600",
        width: '100px',
        borderRadius: "25px",
        padding: '10px',
        "&:hover": {
            backgroundColor: "black"
        }
    },
    btnRight: {
        color: "white",
        fontWeight: "600",
        width: '100px',
        borderRadius: "25px",
        padding: '10px',
        "&:hover": {
            backgroundColor: "black"
        }
    }
})

const CostSection = () => {
    const classes = useStyles()

    // const [features, setFeatures] = useState(null)
    const [pricing, setPricing] = useState(false)

    function createData(company, check) {
        return { company, check, check, check, check, check, check, check, check, check, check, };
    }

    const details = [
        createData('BrightLocal', right, right, right, right, right, right, right, right, right, right),
        createData('Moz Local', right, wrong, right, right, wrong, right, right, wrong, wrong, wrong),
        createData('Yext', wrong, wrong, right, right, right, right, wrong, right, wrong, right,),
        createData('Whitespark', right, right, right, right, right, right, wrong, wrong, right, right,),
        createData('Synup', right, wrong, right, right, right, right, right, right, wrong, right,),
        createData('Tribe Local', right, wrong, wrong, right, right, right, right, wrong, right, right,),
    ];

    function pricingData(company, threeSection, tenSection, hundredSection) {
        return { company, threeSection, tenSection, hundredSection }
    }

    const pricingDetails = [
        pricingData('BrightLocal', "£29/month or $290/year", "$49/month or $490/year", "$79/month or $790/year"),
        pricingData('Moz Local', "From $387/year", "From $774/year", "From $12,900/year"),
        pricingData('Yext', "From $600/year", "From $12,000/year", "From $20,000/year"),
        pricingData('Whitespark', "Custom Pricing Only"),
        pricingData('Synup', "$90/month", "$160/month", "$160/month"),
        pricingData('Tribe Local', "From $87/month or $870/year", "From $150/month or $1,500/year", "From $2,900/month or $29,000/year	"),
    ]

    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.heading}>
                    The most complete and cost-effective set of tools to tackle local SEO
                </Typography>
                <Typography variant="body1" className={classes.headdesc}>
                    From just $1.50 per location per month!
                </Typography>
                <Typography variant="subtitle2" className={classes.desc}>
                    (Based on tracking 50 locations on our SEO Pro plan – just $79/month)
                </Typography>
                <div className={classes.buttonSection}>
                    <Button className={classes.btnleft} onClick={() => setPricing(false)}>
                        Features
                    </Button>
                    <Button className={classes.btnRight} onClick={() => setPricing(true)}>
                        Pricing
                    </Button>
                </div>



                {
                    !pricing ? <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>Company</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Rank Tracking</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Geo Rankings</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Citation monitoring</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Review Alerts</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Review Generations</TableCell>
                                    <TableCell className={classes.tableCell} align="right">GMB Insights Data</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Google Analytics Data</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Social Integrations</TableCell>
                                    <TableCell className={classes.tableCell} align="right">Link Audit / Tracking</TableCell>
                                    <TableCell className={classes.tableCell} align="right">White-label Reporting</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {details.map((detail) => (
                                    <TableRow key={detail.company}>
                                        <TableCell component="th" scope="row">
                                            {detail.company}
                                        </TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                        <TableCell align="right"><Image src={detail.check} alt="check" /></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> :
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead className={classes.tableHead}>
                                    <TableRow>
                                        <TableCell className={classes.tableCell}>Company</TableCell>
                                        <TableCell className={classes.tableCell} align="right">3 sections</TableCell>
                                        <TableCell className={classes.tableCell} align="right">6 sections</TableCell>
                                        <TableCell className={classes.tableCell} align="right">100 sections</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pricingDetails.map((price) => (
                                        <TableRow key={price.company}>
                                            <TableCell component="th" scope="row">
                                                {price.company}
                                            </TableCell>
                                            <TableCell align="right">{price.threeSection}</TableCell>
                                            <TableCell align="right">{price.tenSection}</TableCell>
                                            <TableCell align="right">{price.hundredSection}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                }







            </Container>
        </main>
    );
}

export default CostSection;