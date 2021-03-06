import { Box, Card, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'
import classnames from 'classnames'
import moment from 'moment'
import React, { memo, useCallback, useContext, useState } from 'react'
import { ThemeStateContext } from '../../context/ThemeContext'

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

    

    const getDifference = useCallback(() => {
        let endDate = moment(end_date)
        

        if (end_date.toLowerCase() === 'present') {
            endDate = moment()
        }
        const yearsDifference = moment(endDate).diff(start_date, 'years')
    
        const monthDifference = moment(endDate).diff(start_date, 'months')

        return (yearsDifference + '.' + monthDifference % 12)
    }, [end_date, start_date])


    const duration = getDifference()

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
                    { duration < 1 ? Number((duration + "").split(".")[1]) : Number((duration + "").split(".")[1]) === 0 ?  Number((duration + "").split(".")[0]):  duration}
                </Box>
                <Box
                    textAlign='center'
                    color='common.white'
                    fontSize={{ xs: '14px', sm: '16px', md: '18px', lg: '18px' }}
                    fontWeight='fontWeightBold'>
                    { duration > 1 ? 'Years' : 'Months' }
                </Box>
            </Card>
        </Tooltip>
    )
}

export default memo(ExperienceDuration)
