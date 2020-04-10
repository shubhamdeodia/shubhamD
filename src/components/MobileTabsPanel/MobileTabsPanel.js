import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

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
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    children: PropTypes.node
}

export default TabPanel

