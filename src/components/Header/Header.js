import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        float: 'right',
        flexGrow: 1
    },
    appBar: {
        margin: '0 auto',
        maxWidth: 1028,
        left: '50%',
        transform: 'translate(-50%, 0)'
    }

}))

function Header (props) {
    const classes = useStyles()
    const { profile } = props

    return (
        <AppBar position='fixed' className={classes.appBar} >
            <Toolbar>
                <div className={classes.headerTitle}>
                    <Typography align='right' variant='h6'>
                        <b>{profile.full_name}</b>
                    </Typography>
                    <Typography align='right' variant='subtitle2'>
                        {profile.headline}
                    </Typography>
                </div>
            </Toolbar>

        </AppBar>
    )
}

export default Header
