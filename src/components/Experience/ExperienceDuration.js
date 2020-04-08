import React, { useState, useContext, memo, useCallback } from 'react'
import { Tooltip } from '@material-ui/core'
import { Box } from '@material-ui/core'
import classnames from 'classnames'
import moment from 'moment'

import { ThemeStateContext } from '../../context/ThemeContext'

import { Card } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        durationBox: {
            width: 109,
            height: 109,
            minHeight: 109,
            minWidth: 109,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                width: 90,
                height: 90,
                minHeight: 90,
                minWidth: 90
            }
        },
        elevation2: {
            backgroundColor: '#222222'
        },
        elevation6: {
            backgroundColor: '#2C2C2C'
        }
    }
})

function ExperienceDuration (props) {
    const { position, isLoading } = props
    const themeState = useContext(ThemeStateContext)

    const classes = useStyles()
    const [zDepth, setZDepth] = useState(2)

    const onMouseOver = () => setZDepth(6)
    const onMouseOut = () => setZDepth(2)

    const experienceDurationSkeleton = (
        <Skeleton animation='wave' variant='rect' height={109} width={120} />
    )

    const durationBoxClass = classnames(
        classes.durationBox,
        { [classes.elevation2]: themeState.isDarkMode && zDepth === 2 },
        { [classes.elevation6]: themeState.isDarkMode && zDepth === 6 }
    )

    const { start_date, end_date } = position

    const getDifference = () => {
        let endDate = moment(end_date)
        if (end_date.toLowerCase() === 'present') {
            endDate = moment()
        }

        const monthDifference = moment(start_date).diff(endDate, 'months', true)
        const absMonth = Math.abs(Math.floor(monthDifference))
        return absMonth
    }

    const memoizedCallback = useCallback(
        () => getDifference(),
        [start_date, end_date]
    )

    const duration = memoizedCallback()

    if (isLoading) {
        return experienceDurationSkeleton
    }

    return (
        <Tooltip
            arrow
            title={<Box
                fontSize={12}>
                {`${start_date} - ${end_date}`}
            </Box>}
            style={{ fontSize: '26px' }}
            placement='right'
            aria-label={`${start_date} - ${end_date}`}>
            <Card className={durationBoxClass}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                elevation={zDepth}>
                <Box
                    textAlign='center'
                    color='common.white'
                    fontSize={{ xs: '26px', sm: '30px', md: '32px', lg: '36px' }}
                    fontWeight='fontWeightBold'>
                    { Math.abs(Math.floor(duration > 12 ? duration / 12 : duration % 12))}
                </Box>
                <Box
                    textAlign='center'
                    color='common.white'
                    fontSize={{ xs: '14px', sm: '16px', md: '18px', lg: '18px' }}
                    fontWeight='fontWeightBold'>
                    { duration > 12 ? 'Years' : 'Months' }
                </Box>
            </Card>
        </Tooltip>
    )
}

export default memo(ExperienceDuration)
