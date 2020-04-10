import { Avatar, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Mail, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React from 'react'
import useTypingEffect from '../../hooks/useTypingEffect'
import avatar from '../../images/avatar.jpg'

const useStyles = makeStyles((theme) => {
    return {
        contactInfo: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        avatar: {
            width: 250,
            height: 250,
            marginBottom: 17
        },
        contacts: {
            width: 250,
            marginTop: 20,
            textAlign: 'left'
        },
        description: {
            width: 250,
            marginTop: 10,
            height: 120
        },
        phone: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10
        },
        mail: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10
        },
        link: {
            align: 'left',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'left',
            marginTop: 10

        },

        buttonBackground: {
            backgroundColor: theme.palette.secondary.main
        },

        typingEffect: {
            borderRight: `2px solid ${theme.palette.common.neutral}`
        }
    }
})

function ContactInfoAndDescription (props) {
    const { isLoading, profile } = props

    const classes = useStyles()

    const [text, setSpeed] = useTypingEffect(['Stay at Home', 'Stay Safe', profile.description])

    return (
        <div className={classes.contactInfo}>
            <Avatar className={classes.avatar} alt={profile.full_name} src={avatar} />
            <div className={classes.description}>
                <Box
                    letterSpacing={0}
                    textAlign='left'
                    fontSize={16}>
                    <span className={classes.typingEffect}>{text}</span>
                </Box>
            </div>
            <div className={classes.contacts}>
                <div className={classes.phone}>
                    <Button
                        variant='contained'
                        onClick={() => window.open(`tel:${profile.phone}`)}
                        color='secondary'>
                        <Phone />
                    </Button>
                    <Box
                        fontWeight='bold'
                        letterSpacing={0}
                        style={{ marginLeft: 15 }}
                        fontSize={14}>
                        {profile.phone}
                    </Box>
                </div>
                <div className={classes.mail}>
                    <Button
                        onClick={() => window.open(`mailto:${profile.email}`)}
                        variant='contained'
                        color='secondary'>
                        <Mail />
                    </Button>
                    <Box
                        fontWeight='bold'
                        letterSpacing={0}
                        style={{ marginLeft: 15 }}
                        fontSize={14}>
                        {profile.email}
                    </Box>
                </div>
                {profile.linkedIn
                    ? <div className={classes.link}>
                        <Button
                            variant='contained'
                            onClick={() => window.open(`${profile.linkedIn}`, '_blank')}
                            color='secondary'>
                            <LinkedInIcon />
                        </Button>
                        <Box
                            fontWeight='bold'
                            letterSpacing={0}
                            style={{ marginLeft: 15 }}
                            fontSize={14}>
                            {profile.full_name}
                        </Box>
                    </div>
                    : null
                }
                {profile.gitHub
                    ? <div className={classes.link}>
                        <Button
                            variant='contained'
                            onClick={() => window.open(`${profile.gitHub}`, '_blank')}
                            color='secondary'>
                            <GitHubIcon />
                        </Button>
                        <Box
                            fontWeight='bold'
                            letterSpacing={0}
                            style={{ marginLeft: 15 }}
                            fontSize={14}>
                            {profile.full_name}
                        </Box>
                    </div>
                    : null
                }
            </div>
        </div>

    )
}

export default ContactInfoAndDescription
