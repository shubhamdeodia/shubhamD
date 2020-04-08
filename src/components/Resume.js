import React from 'react'
import Header from './Header/Header'
import Experience from './Experience/Experience'
import cvData from '../data/data.json'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Tabs, Tab } from '@material-ui/core'
import { Container } from '@material-ui/core'
import experienceBackgroundImage from '../images/Experience.png'
import skillsBackgroundImage from '../images/Skills.png'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Skills from './Skills/Skills'
import ContactInfoAndDescription from './Contact/ContactInfo'
import Footer from './Footer/Footer'
import Education from './Education/Education'
import TabPanel from './MobileTabsPanel/MobileTabsPanel'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        root: {
            maxWidth: 1028,
            margin: '0 auto'
        },
        gridContainer: {
            marginTop: 50,
            marginBottom: 50,
            [theme.breakpoints.down('sm')]: {
                marginTop: 0
            }
        },
        grid: {
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            }
        },
        expPaper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            minHeight: 1028,
            overflow: 'auto',
            flex: '0 0 100%',
            backgroundColor: theme.palette.background.paper,
            backgroundImage: `url(${experienceBackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto auto',
            backgroundPosition: '-25% 25%',
            [theme.breakpoints.down('sm')]: {
                backgroundPosition: 'center left'
            }
        },
        skillPaper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            overflow: 'auto',
            minHeight: 1028,
            flex: '0 0 100%',
            backgroundColor: theme.palette.background.default,
            backgroundImage: `url(${skillsBackgroundImage})`,
            backgroundSize: 'auto auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '360% 65%',
            [theme.breakpoints.down('sm')]: {
                backgroundPosition: 'center right'
            }
        },

        experienceBlock: {
            marginTop: '40px'
        },

        skillsBlock: {
            marginTop: '40px'
        },
        tabs: {
            maxWidth: 1028,
            paddingTop: 50,
            margin: '0 auto'
        }
    }
})

export const Resume = (props) => {
    const classes = useStyles()

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    function a11yProps (index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        }
    }

    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    function a11yProps (index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        }
    }

    return (

        <div className={classes.root}>
            <Container style={{ padding: '8px' }} >
                <Header profile={cvData.profile} />
                <Hidden smUp>
                    <Tabs variant='fullWidth' value={value} className={classes.tabs} onChange={handleChange}
                        aria-label='My resume tabs'>
                        <Tab label='Experience' {...a11yProps(0)} />
                        <Tab label='Contacts and Skills' {...a11yProps(1)} />
                    </Tabs>
                </Hidden>

                <Grid container spacing={1} className={classes.gridContainer}>
                    <Grid item xs={12} sm={12} md={8} lg={8} className={classes.grid}>
                        {/* Experience Block */}
                        <Hidden smDown>
                            <Paper className={classes.expPaper}>
                                <Container>
                                    <div className={classes.experienceBlock}>
                                        <Experience isLoading={isLoading} positions={cvData.positions} />
                                    </div>
                                </Container>
                            </Paper>
                        </Hidden>
                        <Hidden mdUp>
                            <TabPanel value={value} index={0}>
                                <Paper className={classes.expPaper}>
                                    <Container>
                                        <div className={classes.experienceBlock}>
                                            <Experience isLoading={isLoading} positions={cvData.positions} />
                                        </div>
                                    </Container>
                                </Paper>
                            </TabPanel>
                        </Hidden>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={classes.grid}>
                        {/* Skills Block */}
                        <Hidden smDown>
                            <Paper className={classes.skillPaper}>
                                <Container>
                                    <div className={classes.skillsBlock}>
                                        <ContactInfoAndDescription isLoading={isLoading} profile={cvData.profile} />
                                        <Education isLoading={isLoading} education={cvData.education} />
                                        <Skills isLoading={isLoading} skills={cvData.skills} />
                                    </div>
                                </Container>
                            </Paper>
                        </Hidden>
                        <Hidden mdUp>
                            <TabPanel value={value} index={1}>
                                <Paper className={classes.skillPaper}>
                                    <Container>
                                        <div className={classes.skillsBlock}>
                                            <ContactInfoAndDescription isLoading={isLoading} profile={cvData.profile} />
                                            <Education isLoading={isLoading} education={cvData.education} />
                                            <Skills isLoading={isLoading} skills={cvData.skills} />
                                        </div>
                                    </Container>
                                </Paper>
                            </TabPanel>
                        </Hidden>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>

    )
}

export default Resume
