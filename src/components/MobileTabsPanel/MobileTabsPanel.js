import Typography from '@material-ui/core/Typography'
import React from 'react'
import PropTypes from 'prop-types'

function TabPanel (props) {
    const { children, value, index, ...other } = props

    return (
        <Typography
            component='div'
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && children }
        </Typography>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

export default TabPanel

