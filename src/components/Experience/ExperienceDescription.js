import { Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ArrowRightRounded } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles((theme) => {
    return {
        experienceDescription: {
            paddingLeft: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '100%',
            background: 'transparent'
        },
        companyName: {
            width: 140,
            height: 'auto',
            paddingBottom: 10,
            background: 'transparent',
            backgroundColor: 'transparent'
        },
        position: {
            background: 'inherit'
        },
        location: {
            background: 'inherit'
        },
        list: {
            padding: '0px',
            background: 'inherit'
        },
        listItem: {
            padding: '0px',
            display: 'flex',
            alignItems: 'flex-start'

        },
        listIcon: {
            marginTop: '5px',
            minWidth: '30px',
            padding: '0px 0px 0px 0px'
        },
        listItemText: {
            margin: 0
        }
    }
})

function ExperienceDescription (props) {
    const { position, isLoading } = props

    const classes = useStyles()

    const experienceDescriptionSkeleton = (
        <div className={classes.experienceDescription}>
            <Skeleton animation='wave' variant='text' width={150} height={100} />
            <Skeleton animation='wave' variant='text' height={17} />
            <Skeleton animation='wave' variant='text' height={25} />
            <Skeleton animation='wave' variant='text' height={66} />
        </div>

    )
    if (isLoading) {
        return experienceDescriptionSkeleton
    }

    return (
        <div className={classes.experienceDescription}>
            <img alt={position.organization} src={position.organization_logo} className={classes.companyName} />
            <Box
                className={classes.location}
                bgcolor='background.paper'
                fontStyle='italic'
                textAlign='left'
                color='common.muted'
                fontSize={12}>
                {position.location}
            </Box>
            <Box
                className={classes.position}
                fontWeight='bold'
                bgcolor='background.paper'
                textAlign='left'
                fontSize={{ xs: '14px', sm: '16px', md: '18px', lg: '18px' }}>
                {position.title}
            </Box>
            <List className={classes.list}>
                {
                    position.description.map((description) => (
                        <ListItem key={description.id} className={classes.listItem}>
                            <ListItemIcon className={classes.listIcon}>
                                <ArrowRightRounded fontSize='small' />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.listText}
                                primary={
                                    <Box bgcolor='transparent'
                                        textAlign='left'
                                        style={{
                                            cursor: description.link ? 'pointer' : ''
                                        }}
                                        onClick={() => description.link ? window.open(`${description.link}`, '_blank') : null}
                                        color={description.link ? 'secondary.light' : 'common.neutral'}
                                        fontSize={12} >
                                        {description.text}
                                    </Box>
                                } />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default ExperienceDescription
